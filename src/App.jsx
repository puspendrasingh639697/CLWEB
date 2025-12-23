import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Phone, PhoneOff, User, Radio, Check, X, Volume2 } from "lucide-react";

// --- AAPKA RENDER BACKEND LINK ---
const socket = io("https://clall-1.onrender.com", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
});

const AudioCall = () => {
  const [myUserId, setMyUserId] = useState(""); 
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [incomingCall, setIncomingCall] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [activeCallWith, setActiveCallWith] = useState(null);
  const [callTimer, setCallTimer] = useState(0);
  const [audioError, setAudioError] = useState(false);

  const pc = useRef(null);
  const remoteAudioRef = useRef();
  const localStream = useRef(null);
  const timerRef = useRef();

  const setupPeerConnection = (remoteId) => {
    pc.current = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" }
      ]
    });

    pc.current.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", { to: remoteId, candidate: e.candidate });
      }
    };

    pc.current.ontrack = (e) => {
      console.log("Remote stream received!");
      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = e.streams[0];
        remoteAudioRef.current.play().catch(() => {
          setAudioError(true);
        });
      }
    };
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Server!");
    });

    const handleUpdateList = (list) => {
      console.log("New User List:", list);
      // Khud ka naam list se hatane ke liye
      setOnlineUsers(list.filter(user => user.userId !== myUserId && user.userId));
    };

    socket.on("update-user-list", handleUpdateList);
    socket.on("incoming-call", (data) => setIncomingCall(data));

    socket.on("call-accepted", async ({ answer }) => {
      if (pc.current) {
        await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
        startTimer();
      }
    });

    socket.on("call-ended", () => handleHangup(false));

    socket.on("ice-candidate", async ({ candidate }) => {
      if (pc.current && candidate) {
        try {
          await pc.current.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (e) { console.error("ICE Error", e); }
      }
    });

    return () => {
      socket.off("update-user-list", handleUpdateList);
      socket.off("incoming-call");
      socket.off("call-accepted");
      socket.off("call-ended");
      socket.off("ice-candidate");
    };
  }, [myUserId]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setCallTimer(0);
    timerRef.current = setInterval(() => setCallTimer(p => p + 1), 1000);
  };

  const handleJoin = () => {
    if (!myUserId.trim()) return alert("Bhai, apna naam toh likho!");
    socket.emit("join", { userId: myUserId });
    setIsOnline(true);
  };

  const startCall = async (remoteId) => {
    setActiveCallWith(remoteId);
    setupPeerConnection(remoteId);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;
      stream.getTracks().forEach(t => pc.current.addTrack(t, stream));
      const offer = await pc.current.createOffer();
      await pc.current.setLocalDescription(offer);
      socket.emit("call-request", { to: remoteId, from: myUserId, offer });
    } catch (err) {
      alert("Microphone access chahiye call karne ke liye!");
      setActiveCallWith(null);
    }
  };

  const acceptCall = async () => {
    const remoteId = incomingCall.from;
    setActiveCallWith(remoteId);
    setupPeerConnection(remoteId);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;
      stream.getTracks().forEach(t => pc.current.addTrack(t, stream));
      await pc.current.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));
      const answer = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answer);
      socket.emit("answer-call", { to: remoteId, answer });
      setIncomingCall(null);
      startTimer();
    } catch (err) {
      alert("Microphone allow karein!");
      handleHangup(true);
    }
  };

  const handleHangup = (shouldEmit = true) => {
    if (shouldEmit && activeCallWith) socket.emit("end-call", { to: activeCallWith });
    clearInterval(timerRef.current);
    if (localStream.current) localStream.current.getTracks().forEach(t => t.stop());
    if (pc.current) pc.current.close();
    setActiveCallWith(null);
    setCallTimer(0);
    setAudioError(false);
  };

  const forcePlayAudio = () => {
    if (remoteAudioRef.current) {
      remoteAudioRef.current.play();
      setAudioError(false);
    }
  };

  return (
    <div style={{ background: "#0f172a", color: "white", minHeight: "100vh", padding: "20px", fontFamily: 'sans-serif' }}>
      {!isOnline ? (
        <div style={{ textAlign: 'center', background: '#1e293b', padding: '40px', borderRadius: '20px', maxWidth: '400px', margin: '100px auto', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          <h2 style={{ marginBottom: '10px' }}>📞 Voice Messenger</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Connect with anyone, anywhere</p>
          <input value={myUserId} onChange={e => setMyUserId(e.target.value)} placeholder="Apna Naam..." style={{ padding: '12px', borderRadius: '8px', border: 'none', width: '85%', marginBottom: '20px', background: '#334155', color: 'white' }} />
          <button onClick={handleJoin} style={{ padding: '12px 30px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>Online Ho Jayein</button>
        </div>
      ) : (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ background: '#1e293b', padding: '15px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px', alignItems: 'center' }}>
            <span>Hi, <b>{myUserId}</b></span>
            <span style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '5px' }}><Radio size={14} className="animate-pulse" /> Live</span>
          </div>

          <h3 style={{ marginBottom: '15px' }}>Online Users ({onlineUsers.length})</h3>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {onlineUsers.length === 0 ? <p style={{ color: '#94a3b8' }}>Abhi koi online nahi hai...</p> : onlineUsers.map(user => (
              <div key={user.userId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#334155', padding: '15px', borderRadius: '12px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#475569', padding: '8px', borderRadius: '50%' }}><User size={20}/></div>
                  <span>{user.userId}</span>
                </div>
                <button onClick={() => startCall(user.userId)} disabled={!!activeCallWith} style={{ background: '#22c55e', border: 'none', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><Phone size={20}/></button>
              </div>
            ))}
          </div>

          {activeCallWith && (
            <div style={{ position: 'fixed', inset: 0, background: '#0f172a', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '120px', height: '120px', background: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #22c55e', marginBottom: '20px' }}><User size={60} /></div>
              <h2>{activeCallWith}</h2>
              <p style={{ color: '#22c55e', marginBottom: '10px' }}>In Call</p>
              <h1 style={{ fontSize: '50px', marginBottom: '40px' }}>{new Date(callTimer * 1000).toISOString().substr(14, 5)}</h1>
              
              {audioError && (
                <button onClick={forcePlayAudio} style={{ background: '#f59e0b', color: 'black', padding: '12px 24px', borderRadius: '30px', border: 'none', marginBottom: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <Volume2 size={20}/> Enable Audio
                </button>
              )}

              <button onClick={() => handleHangup(true)} style={{ background: '#ef4444', borderRadius: '50%', width: '80px', height: '80px', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(239,68,68,0.4)' }}><PhoneOff size={35}/></button>
            </div>
          )}
        </div>
      )}

      {incomingCall && !activeCallWith && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: 'white', color: '#1e293b', padding: '20px', borderRadius: '20px', width: '320px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', zIndex: 200 }}>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Incoming Call</p>
          <h3 style={{ margin: '10px 0' }}>{incomingCall.from}</h3>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <button onClick={acceptCall} style={{ flex: 1, background: '#22c55e', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}><Check/></button>
            <button onClick={() => setIncomingCall(null)} style={{ flex: 1, background: '#ef4444', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}><X/></button>
          </div>
        </div>
      )}

      <audio ref={remoteAudioRef} autoPlay playsInline style={{ display: 'none' }} />
    </div>
  );
};

export default AudioCall;