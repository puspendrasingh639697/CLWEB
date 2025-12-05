import React, { useEffect, useRef, useState } from "react";

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [userActive, setUserActive] = useState(true);
  const sectionRef = useRef(null);

  const clients = [
    {
     
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Emblem_of_India.svg/512px-Emblem_of_India.svg.png",
     
    },
    {
     
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Central_Board_of_Direct_Taxes_Logo.svg/512px-Central_Board_of_Direct_Taxes_Logo.svg.png",
     
    },
    {
     
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Acme-logo.png/512px-Acme-logo.png",
     
    },
    {
     
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Income_Tax_Department_India_Logo.svg/512px-Income_Tax_Department_India_Logo.svg.png",
    
    },
    {
     
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/SIS_Group_Logo.png/512px-SIS_Group_Logo.png",
     
    },
  ];

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

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full text-white py-24 overflow-hidden relative"
      style={{
      background: "linear-gradient(135deg, #0a0a0aff 90%, #477052 100%)",

      }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Spheres */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#428f56] ${
              isVisible ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
              top: `${15 + i * 10}%`,
              left: `${5 + i * 12}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              transform: `perspective(1000px) rotateX(${i * 15}deg) rotateY(${i * 20}deg) translateZ(${i * 10}px)`,
              animation: `float 15s infinite linear ${i * 2}s`,
              transition: 'opacity 1s ease-out'
            }}
          />
        ))}
      </div>

     

      {/* TOP TEXT with 3D effect */}
      <div className={`text-center max-w-4xl mx-auto px-6 relative z-20 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
       

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 relative">
          <span className="relative inline-block">
            Celebrating Success With{" "}
            <span 
              className="text-transparent bg-[#477052] via-cyan-300 to-blue-400 bg-clip-text animate-gradient"
              style={{
                textShadow: '0 0 30px rgba(31, 68, 40, 0.5)',
                transform: 'perspective(1000px) translateZ(20px)'
              }}
            >
              Our Valued Clients
            </span>
          </span>
        </h2>

        <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-3xl mx-auto backdrop-blur-sm">
          We proudly partner with leading organizations across India, delivering
          powerful digital solutions that transform operations and drive growth.
        </p>
      </div>

      {/* 3D LOGO CARDS */}
      <div className="mt-20 relative z-20">
        {/* Cards Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
          {clients.map((item, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* 3D Card Base */}
              <div 
                className={`relative w-full h-48 rounded-2xl flex items-center justify-center p-8 transition-all duration-500 ${
                  isHovered === index 
                    ? 'bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/30' 
                    : 'bg-gradient-to-br from-black/30 via-black/20 to-transparent border border-white/10'
                }`}
                style={{
                  transform: isHovered === index 
                    ? `perspective(1000px) rotateY(${index % 2 === 0 ? '-10deg' : '10deg'}) rotateX(${index % 3 === 0 ? '5deg' : '-5deg'}) translateZ(30px) scale(1.05)` 
                    : `perspective(1000px) rotateY(${index % 2 === 0 ? '-5deg' : '5deg'}) rotateX(0deg) translateZ(0px)`,
                  boxShadow: isHovered === index
                    ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Logo Container with 3D effect */}
                <div 
                  className="relative w-full h-32 flex items-center justify-center"
                  style={{
                    transform: isHovered === index 
                      ? 'perspective(1000px) translateZ(50px) scale(1.1)' 
                      : 'perspective(1000px) translateZ(30px)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Logo with glow effect */}
                  <div className="relative">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-auto max-h-24 object-contain filter brightness-110 drop-shadow-2xl"
                      style={{
                        filter: isHovered === index ? 'drop-shadow(0 10px 20px rgba(0, 212, 255, 0.3))' : 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))'
                      }}
                    />
                    
                    {/* Glow effect on hover */}
                    {isHovered === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        rounded-lg blur-lg -z-10 animate-pulse" />
                    )}
                  </div>
                  
                  {/* Floating ring animation */}
                  <div className={`absolute inset-0 border-2 border-blue-400/30 rounded-xl ${
                    isHovered === index ? 'animate-spin-slow' : ''
                  }`} />
                </div>

                {/* Client Name (appears on hover) */}
                <div 
                  className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                    isHovered === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <p className="text-sm font-bold text-white bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full 
                    border border-white/20 shadow-lg min-w-[120px] text-center">
                    {item.name}
                  </p>
                </div>

                {/* Description (appears on hover) */}
                <div 
                  className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-48 transition-all duration-300 ${
                    isHovered === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <p className="text-xs text-gray-300 text-center bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                    {item.description}
                  </p>
                </div>

                {/* Hover shine effect */}
                {isHovered === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    -translate-x-full animate-shine" />
                )}
              </div>

              {/* 3D Card Shadow */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent rounded-2xl blur-md -z-10"
                style={{
                  transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-5deg' : '5deg'}) translateZ(-20px)`,
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Animated Connector Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <svg className="w-full h-2" viewBox="0 0 1200 2">
            <path
              d="M50,1 L1150,1"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="10,5"
              className="animate-dash"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(46, 145, 99, 0.7)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

    

    </section>
  );
}