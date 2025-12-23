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
        { urls: "stun:stun1.l.google.com:19302" },
        { urls: "stun:stun2.l.google.com:19302" },
        { urls: "stun:stun3.l.google.com:19302" }
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
        // Browsers often block auto-play audio, this forces it
        const playPromise = remoteAudioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setAudioError(true); // Show manual play button if blocked
          });
        }
      }
    };
  };

  useEffect(() => {
    socket.on("connect", () => console.log("Connected to Server!"));

    const handleUpdateList = (data) => {
      console.log("New User List Data:", data);
      let usersArray = [];
      if (data && data.users && Array.isArray(data.users)) {
        usersArray = data.users;
      } else if (Array.isArray(data)) {
        usersArray = data;
      }

      const filtered = usersArray
        .filter(userId => userId !== myUserId && userId !== (myUserId + " "))
        .map(id => ({ userId: id }));
      
      setOnlineUsers(filtered);
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
      socket.off("update-user-list");
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
    if (!myUserId.trim()) return alert("Bhai, naam likho!");
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
      alert("Mic access denied!");
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
      alert("Mic error!");
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
    <div style={{ background: "#0f172a", color: "white", minHeight: "100vh", padding: "20px" }}>
      {!isOnline ? (
        <div style={{ textAlign: 'center', background: '#1e293b', padding: '40px', borderRadius: '20px', maxWidth: '400px', margin: '80px auto' }}>
          <h2>📞 Secure Voice</h2>
          <input value={myUserId} onChange={e => setMyUserId(e.target.value)} placeholder="Enter Name..." style={{ padding: '10px', width: '80%', margin: '20px 0', borderRadius: '5px' }} />
          <button onClick={handleJoin} style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', borderRadius: '5px', width: '100%' }}>Go Online</button>
        </div>
      ) : (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span>User: <b>{myUserId}</b></span>
            <span style={{ color: '#22c55e' }}>● Live</span>
          </div>

          <h3>Online Users ({onlineUsers.length})</h3>
          {onlineUsers.map(user => (
            <div key={user.userId} style={{ display: 'flex', justifyContent: 'space-between', background: '#334155', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
              <span>{user.userId}</span>
              <button onClick={() => startCall(user.userId)} disabled={!!activeCallWith} style={{ background: '#22c55e', color: 'white', border: 'none', padding: '8px', borderRadius: '50%' }}><Phone size={20}/></button>
            </div>
          ))}

          {activeCallWith && (
            <div style={{ position: 'fixed', inset: 0, background: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h2>{activeCallWith}</h2>
              <h1 style={{ fontSize: '40px' }}>{new Date(callTimer * 1000).toISOString().substr(14, 5)}</h1>
              
              {audioError && (
                <button onClick={forcePlayAudio} style={{ background: '#f59e0b', color: 'black', padding: '10px 20px', borderRadius: '20px', margin: '20px' }}>
                  <Volume2 size={20}/> Click to Enable Audio
                </button>
              )}

              <button onClick={() => handleHangup(true)} style={{ background: '#ef4444', borderRadius: '50%', padding: '20px', marginTop: '30px' }}><PhoneOff size={30}/></button>
            </div>
          )}
        </div>
      )}

      {incomingCall && !activeCallWith && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: 'white', color: 'black', padding: '20px', borderRadius: '15px', width: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <p>Incoming from: {incomingCall.from}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button onClick={acceptCall} style={{ flex: 1, background: '#22c55e', color: 'white', padding: '10px', borderRadius: '10px' }}><Check/></button>
            <button onClick={() => setIncomingCall(null)} style={{ flex: 1, background: '#ef4444', color: 'white', padding: '10px', borderRadius: '10px' }}><X/></button>
          </div>
        </div>
      )}
      <audio ref={remoteAudioRef} autoPlay playsInline style={{ display: 'none' }} />
    </div>
  );
};

export default AudioCall;