
import React, { useEffect, useState, useRef } from "react";
import ui from "../assets/ui.png";
import web from "../assets/web.png";
import what from "../assets/what.png";
import software from "../assets/software.png";
import data from "../assets/data.png";
import data1 from "../assets/data1.png";
import cloud from "../assets/cloud.png";
import ui1 from "../assets/ui1.png";
import Footer from "../Componets/Footer";
import { text } from "framer-motion/client";

export default function ServicesCards() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(null);
    const sectionRef = useRef(null);

    const services = [
        {
            title: "Web Development",
            desc: "Web development is the art of brining digital ideas to life. With coding as our paintbrush and creativity as our canvas, we craft user-friendly, visually stunning websites. From responsive design to robust functionalities, we ensure your online presence shines. Let's transform your vision into a compelling digital reality.",
            icon: web,
            textColor: "text-green-400"
        },
        {
            title: "App Development",
            desc: "We craft intuitive and powerful mobile apps (Android/iOS) that offer seamless user experiences. Our team specializes in native and cross-platform development, ensuring high performance, security, and scalability for your mobile applications.",
            icon: ui,

            textColor: "text-green-400"
        },
        {
            title: "Data Analysis",
            desc: "Transform raw data into insights with trend analysis, reports, predictive modeling & more. We help you make data-driven decisions with advanced analytics tools and visualization techniques.",
            icon: data1,

            textColor: "text-green-400"
        },
        {
            title: "UI/UX Design",
            desc: "Beautiful, modern and intuitive UI/UX designs that improve user experience and product usability. We focus on creating interfaces that are both aesthetically pleasing and highly functional.",
            icon: ui1,

            textColor: "text-green-400"
        },
        {
            title: "Cloud Solutions",
            desc: "Secure, scalable and reliable cloud architectures tailored for your business growth. We provide comprehensive cloud services including migration, management, and optimization.",
            icon: cloud,

            textColor: "text-green-400"
        },
        {
            title: "Software Consulting",
            desc: "Professional consulting services to guide your tech decisions and business strategies. Our experts help you choose the right technologies and optimize your software development processes.",
            icon: software,
            textColor: "text-green-900"
        },
    ];

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
       <>
        <section ref={sectionRef} className="min-h-screen bg-black  px-4 py-24 md:px-12 lg:px-20 bg-black overflow-hidden">

            {/* HEADER SECTION */}
            <div className={`max-w-7xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>

                {/* Green Tag - Left aligned */}
                <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-green-900/80 to-green-800/80 text-green-300 text-sm font-bold 
        tracking-wide rounded-full px-5 py-3 border border-green-700/50 backdrop-blur-sm">
                    <span className="w-2 h-2 text-white rounded-full animate-pulse"></span>
                    OUR SERVICES
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left Side - Heading (Takes 60% width) */}
                    <div className="lg:w-3/5">
                        {/* Main Heading */}
                        <h2 className="text-2xl md:text-2xl lg:text-6xl font-bold text-white leading-tight">
                            Custom Digital Solutions
                            <br />
                            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text">
                                For Your Business Needs
                            </span>
                        </h2>
                    </div>

                    <div className="lg:w-2/5 space-y-3 text-gray-300 text-lg leading-relaxed pt-2">
                        <p>
                            Discover the Power of
                            <span className="text-green-400 font-semibold"> Customized Digital Solutions</span>,
                            Uniquely Crafted to
                        </p>

                        <p>
                            Address Your
                            <span className="text-green-400 font-semibold"> Business Requirements</span>.
                            We Create
                            <span className="text-green-400 font-semibold"> Digital Solutions</span> That
                        </p>

                        <p>
                            Align Perfectly with Your
                            <span className="text-green-400 font-semibold"> Vision</span> and
                            <span className="text-green-400 font-semibold"> Goals</span>,
                            Ensuring Your
                            <span className="text-green-400 font-semibold"> Success</span>.
                        </p>
                    </div>

                </div>
            </div>
            {/* 3D SERVICES CARDS GRID */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((srv, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-20'
                                }`}
                            style={{
                                transitionDelay: `${100 + index * 100}ms`,
                                transformStyle: 'preserve-3d'
                            }}
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {/* 3D Card */}
                            <div
                                className={`relative rounded-2xl p-8 transition-all duration-500 overflow-hidden ${isHovered === index
                                    ? 'bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/50 shadow-2xl'
                                    : 'bg-gradient-to-br from-gray-900/90 to-black/90 border border-green-800/30 shadow-xl'
                                    }`}
                                style={{
                                    transform: isHovered === index
                                        ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(30px) scale(1.02)'
                                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                                }}
                            >
                                <div className="relative flex items-center justify-center mb-8 mx-auto transition-all duration-500"
                                    style={{
                                        transform: isHovered === index
                                            ? 'perspective(1000px) translateZ(10px) rotateY(5deg)'
                                            : 'perspective(1000px) translateZ(20px)',
                                    }}
                                >
                                    <div className={`w-20 h-20  backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-500 ${isHovered === index ? 'scale-110' : ''
                                        }`}>
                                        <img
                                            src={srv.icon}
                                            alt={srv.title}
                                            className="w-14 h-14 object-contain"
                                            style={{
                                                filter: 'invert(1) sepia(1) saturate(5) hue-rotate(90deg) brightness(1.2)'
                                            }}
                                        />
                                    </div>

                                    {/* 3D Ring Effect */}
                                    {isHovered === index && (
                                        <div className="absolute -inset-3 border-2 border-green-400/50 rounded-2xl animate-ping"></div>
                                    )}
                                </div>

                                {/* Title with 3D effect */}
                                <h3 className={`text-2xl font-bold ${srv.textColor} mb-4 text-center transition-all duration-300 ${isHovered === index ? 'scale-105' : ''
                                    }`}
                                    style={{
                                        transform: isHovered === index
                                            ? 'perspective(1000px) translateZ(20px)'
                                            : 'perspective(1000px) translateZ(10px)',
                                    }}
                                >
                                    {srv.title}
                                </h3>

                                {/* Description with scroll */}
                                <div className="h-40 mb-6 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900">
                                    <p className="text-gray-300 text-center leading-relaxed text-sm">
                                        {srv.desc}
                                    </p>
                                </div>

                                {/* 3D Button */}
                                <div className="text-center"
                                    style={{
                                        transform: isHovered === index
                                            ? 'perspective(1000px) translateZ(30px)'
                                            : 'perspective(1000px) translateZ(10px)',
                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                                    }}
                                >
                                    <button
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${isHovered === index
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
                                            : 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-300 border border-green-800/50 hover:bg-green-900/70'
                                            }`}
                                    >
                                        Learn More
                                        <span className={`transition-transform duration-300 ${isHovered === index ? 'translate-x-1' : ''
                                            }`}>→</span>
                                    </button>
                                </div>

                                {/* 3D Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/50 rounded-tl-2xl"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/50 rounded-tr-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/50 rounded-bl-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/50 rounded-br-2xl"></div>
                            </div>

                            {/* 3D Shadow */}
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black/30 rounded-2xl -z-10 transition-all duration-500"
                                style={{
                                    transform: isHovered === index
                                        ? 'perspective(1000px) translateZ(-20px)'
                                        : 'perspective(1000px) translateZ(-10px)',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom 3D CTA */}
                <div className={`mt-20 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`} style={{ transitionDelay: '800ms' }}>
                    <div className="inline-block relative"
                        style={{
                            transform: 'perspective(1000px)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        

                       
                    </div>
                </div>
                
            </div>
            
           
           
        </section>




        
       
       
       
       
       </>
        
        
    );
}