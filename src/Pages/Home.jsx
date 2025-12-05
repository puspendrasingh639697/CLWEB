import React, { useEffect, useState, useCallback, useRef } from "react";
import name from "../assets/name.jpg";
import name1 from "../assets/name1.jpg";
import name2 from "../assets/name2.jpg";
import name3 from "../assets/name3.jpg";
import name4 from "../assets/name4.jpg";
import name5 from "../assets/name5.jpg";
import name6 from "../assets/name6.jpg";
import CompanySection from "./CompanySection";
import ClientsSection from "./ClientsSection";
import ServicesCards from "./ServicesCards";
import ProjectsSection from "../Componets/ProjectsSection";
import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./TeamSection";
import RequestCallback from "./RequestCallback";
import Footer from "../Componets/Footer";

const HomePage = () => {
  const images = [name, name1, name2, name3, name4, name5, name6];
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [userActive, setUserActive] = useState(true);
  const sliderRef = useRef(null);

  // Check user activity
  useEffect(() => {
    let timeoutId;

    const resetActivity = () => {
      setUserActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setUserActive(false), 3000);
    };

    const events = ['mousemove', 'keydown', 'touchstart', 'click'];
    events.forEach(event => window.addEventListener(event, resetActivity));

    resetActivity();

    return () => {
      events.forEach(event => window.removeEventListener(event, resetActivity));
      clearTimeout(timeoutId);
    };
  }, []);

  const nextSlide = useCallback(() => {
    if (isHovering) return;
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setProgress(0);
    setUserActive(true);
  }, [images.length, isHovering]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setProgress(0);
    setUserActive(true);
  }, [images.length]);

  // Auto slide with progress bar
  useEffect(() => {
    if (isHovering || userActive) return;

    const interval = 4000;
    const step = 100 / (interval / 100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [nextSlide, isHovering, userActive]);

  // Enhanced 3D effect for slides
  const getSlideTransform = (i) => {
    const distance = i - index;
    const isCurrent = i === index;
    const isVisible = Math.abs(distance) <= 1;

    if (!isVisible) return { opacity: 0 };

    const rotateY = distance * 20;
    const translateZ = isCurrent ? 0 : -Math.abs(distance) * 100;
    const scale = isCurrent ? 1 : 0.9;
    const translateX = distance * 30;

    return {
      transform: `perspective(1200px) rotateY(${rotateY}deg) translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity: isCurrent ? 1 : 0.5,
      zIndex: isCurrent ? 30 : 20 - Math.abs(distance),
      filter: `brightness(${isCurrent ? 1 : 0.7}) blur(${isCurrent ? 0 : 1}px)`,
    };
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black pt-0 sm:pt-0">
      {/* Full Screen 3D Slider */}
      <div
        ref={sliderRef}
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* 3D Image Stack */}
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={getSlideTransform(i)}
          >
            <div
              key={i}
              className={`absolute top-[15px] left-0 right-0 bottom-0 transition-all duration-700 ease-in-out ${index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-[calc(100vh-65px)] object-cover"
              />
            </div>


            {/* Progress bar for active slide */}
            {i === index && (
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
                <div
                  className="h-full bg-gradient-to-r from-[#b4ff33] via-green-400 to-emerald-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        ))}

        {/* 3D Dark Overlay with gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"
          style={{
            transform: 'perspective(1000px) rotateX(5deg)',
            transformOrigin: 'bottom'
          }}
        />

        {/* Content Overlay with 3D effect */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-8 transform transition-all duration-500"
            style={{
              transform: 'perspective(1000px) translateZ(50px)',
              textShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}
          >
           

            <h3 className="text-[#b4ff33] text-xl sm:text-2xl font-semibold mb-2 animate-pulse">
              Our Data Analytics Software
            </h3>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mt-2 drop-shadow-2xl tracking-tight">
              Indian Railways
            </h1>
            <p className="text-white/80 text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
              Transforming railway operations with advanced 3D analytics and real-time insights
            </p>
          </div>
        </div>

        {/* RIGHT SIDE 3D CONTROL PANEL */}
        <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 flex flex-col items-center gap-4 z-30">

          {/* User Activity Indicator - 3D Card */}
          <div
            className="flex flex-col items-center gap-2 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 
              backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-2xl
              transition-all duration-300 hover:scale-105 group"
            style={{
              transform: 'perspective(1000px) rotateY(-10deg)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)'
            }}
          >
            <div className="relative">
              <div className={`w-4 h-4 rounded-full ${userActive ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'} 
                shadow-lg ${userActive ? 'shadow-green-500/30' : 'shadow-yellow-500/30'}`} />
              {userActive && (
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
              )}
            </div>
           
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* 3D Slide Navigation */}
          <div
            className="flex flex-col gap-3 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 
              backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl"
            style={{
              transform: 'perspective(1000px) rotateY(-10deg)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {images.map((_, i) => {
              const isActive = i === index;
              const distance = Math.abs(i - index);

              return (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setProgress(0);
                    setUserActive(true);
                  }}
                  className="relative group"
                  style={{
                    transform: isActive ? 'translateX(-5px) scale(1.1)' : 'translateX(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* 3D Glow effect */}
                    {isActive && (
                      <div className="absolute -inset-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-transparent 
                          animate-pulse blur-sm" />
                      </div>
                    )}

                    {/* Main 3D Dot */}
                    <div className={`
                      w-3 h-3 rounded-full relative overflow-hidden
                      transition-all duration-300 group-hover:scale-125
                      ${isActive
                        ? 'bg-gradient-to-br from-white to-gray-300 shadow-lg shadow-green-500/50'
                        : 'bg-gradient-to-br from-white/30 to-white/10 hover:from-white/50 hover:to-white/30'
                      }
                    `}>
                      {/* 3D Top highlight */}
                      <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-white/50 rounded-full" />

                      {/* Inner active indicator */}
                      {isActive && (
                        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-[#b4ff33] to-green-400 
                          animate-pulse" />
                      )}
                    </div>

                    {/* 3D Number label */}
                    <span className={`
                      absolute -right-7 text-xs font-bold transition-all duration-300
                      ${isActive
                        ? 'text-white opacity-100 scale-125'
                        : 'text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-white/80'
                      }`}
                      style={{
                        textShadow: isActive ? '0 2px 10px rgba(180, 255, 51, 0.5)' : 'none'
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* 3D Connecting line */}
                  {i < images.length - 1 && (
                    <div className={`
                      h-4 w-0.5 mx-auto mt-1 transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-b from-[#b4ff33] via-green-400 to-transparent shadow shadow-green-500/50'
                        : i > index
                          ? 'bg-gradient-to-b from-white/20 via-white/10 to-transparent'
                          : 'bg-gradient-to-b from-transparent via-white/10 to-white/20'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Slide Counter - 3D Display */}
          <div
            className="bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 
              backdrop-blur-xl rounded-xl p-3 border border-white/10 shadow-2xl"
            style={{
              transform: 'perspective(1000px) rotateY(-10deg)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
           
          </div>
        </div>


       

        
      </div>
      <CompanySection/>
      <ClientsSection/>
      <ServicesCards/>
      <ProjectsSection/>
      <WhyChooseUs/>
      <TeamSection/>
      <RequestCallback/>
      <Footer/>
    </div>
  );
};

export default HomePage;

