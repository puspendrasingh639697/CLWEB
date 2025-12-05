import React, { useEffect, useRef, useState } from "react";
import name3 from "../assets/name3.jpg";

export default function CompanySection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for scroll animation ONLY
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // DON'T unobserve if you want it to animate again when scrolling back
                }
            },
            {
                threshold: 0.2, // Adjust this value for when animation triggers
                rootMargin: '0px 0px -100px 0px' // Starts animation when 100px from bottom
            }
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

    // REMOVED the page load timer effect completely

    return (
        <section ref={sectionRef} className="w-full bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

                {/* LEFT IMAGE - Slides from left ONLY on scroll */}
                <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>

                    {/* Floating Experience Card */}
                    <div className={`absolute -top-8 -left-8 bg-[#5c9c6d] px-8 py-6 rounded-xl shadow-md z-20 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <h2 className="text-4xl font-bold text-white">10+</h2>
                        <p className="text-white font-semibold text-sm">
                            Years Of Experience
                        </p>
                    </div>

                    {/* Main Image Container */}
                    <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        }`} style={{ transitionDelay: '300ms' }}>
                        <img
                            src={name3}
                            alt="Company Team"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />

                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Floating dots */}
                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-green-100/30 rounded-full blur-lg transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'
                        }`} style={{ transitionDelay: '400ms' }} />

                    <div className={`absolute -top-4 -left-4 w-16 h-16 bg-green-100/30 rounded-full blur-lg transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'
                        }`} style={{ transitionDelay: '500ms' }} />
                </div>

                {/* RIGHT CONTENT - Slides from right ONLY on scroll */}
                <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`} style={{ transitionDelay: '100ms' }}>

                    {/* Tag */}
                    <div className={`transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                        }`} style={{ transitionDelay: '300ms' }}>
                        <p className="text-green-700 font-semibold text-sm tracking-wider inline-flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></span>
                            ABOUT OUR COMPANY
                        </p>
                    </div>

                    {/* Heading with stagger */}
                    <div className="space-y-4">
                        <h2 className={`text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`} style={{ transitionDelay: '400ms' }}>
                            Taking Care Of Your IT Needs
                        </h2>

                        <h3 className={`text-4xl md:text-5xl font-extrabold leading-tight transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`} style={{ transitionDelay: '500ms' }}>
                            From Past <span className="text-green-900 relative">
                                <span className="relative z-10">10+ Years</span>
                                <span className="absolute inset-0 bg-green-100/30 blur-xl -z-10"></span>
                            </span>
                        </h3>
                    </div>

                    {/* Paragraphs with stagger */}
                    <div className="space-y-4">
                        <p className={`text-gray-600 leading-relaxed transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`} style={{ transitionDelay: '600ms' }}>
                           Dart is a global software solutions company delivering innovative and scalable digital products across Web, Mobile, Data Science, and Data Analytics. We Discover, Design, and Deliver IT solutions ranging from simple to enterprise-level for diverse business verticals worldwide. With strong technical expertise, we provide complete end-to-end solutions that streamline processes, enhance productivity, and accelerate business growth.


                        </p>


                    </div>

                    {/* Button */}
                    <div className={`pt-2 transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                        }`} style={{ transitionDelay: '800ms' }}>
                        <button className="group relative bg-[#497354] text-white px-8 py-4 rounded-lg font-semibold shadow 
              hover:bg-[#265733] transition-all duration-300 hover:scale-105 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {[
                            { number: '200+', label: 'Projects Done' },
                            { number: '50+', label: 'Happy Clients' }
                        ].map((stat, index) => (
                            <div key={index} className={`transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                                }`} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                                <div className="bg-[#477052] p-6 rounded-xl border border-green-700/30 hover:border-green-500 
                  transition-all duration-300 hover:scale-105 group">
                                    <p className="text-3xl font-bold text-white">{stat.number}</p>
                                    <p className="text-white/90 text-sm mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background floating elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-50/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-50/20 rounded-full blur-3xl -z-10" />
        </section>
    );
}