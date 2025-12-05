import React, { useEffect, useState, useRef } from "react";
import coun from "../assets/coun.png";
import hap from "../assets/hap.png";
import to from "../assets/to.png";
import tagIcon from "../assets/tag.png";

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const sectionRef = useRef(null);


    const projects = [
        {
            id: 1,
            title: "Railway Analytics Platform",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
            category: "Web Development"
        },
        {
            id: 2,
            title: "Mobile Ticketing System",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
            category: "Mobile App"
        },
        {
            id: 3,
            title: "Data Analytics Dashboard",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
            category: "Data Science"
        },
        {
            id: 4,
            title: "Cloud Infrastructure",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop",
            category: "Cloud Solutions"
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
        <div ref={sectionRef} className="w-full bg-black py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">

                {/* Top Section */}
                <div className={`mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>

                    {/* Green Badge */}
                    <div className="w-full flex justify-end">
                        <div className="
    inline-flex items-center gap-2 mb-6 
    bg-gradient-to-r from-green-700 to-green-600 
    text-white text-sm font-bold tracking-wide 
    rounded-full px-6 py-3 
    border border-green-400/40 
    shadow-[0_4px_15px_rgba(0,255,0,0.3)] 
    hover:shadow-[0_6px_20px_rgba(0,255,0,0.5)] 
    hover:scale-[1.03] 
    transition-all duration-300
  ">
                            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white]"></span>
                            OUR COMPLETED PROJECTS
                        </div>
                    </div>



                    {/* Heading */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Explore Our Diverse
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text">
                                    Portfolio Projects
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg mt-6 max-w-2xl">
                                Where excellence meets proven capabilities in delivering innovative
                                digital solutions across various industries.
                            </p>
                        </div>

                        {/* Green Button */}
                        <div>
                            <button className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium text-lg rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-500/30">
                                View All Projects →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>

                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                transitionDelay: `${100 + index * 100}ms`
                            }}
                        >
                            {/* Project Card with Black & Green */}
                            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border 
                transition-all duration-500 ${hoveredProject === project.id ? 'shadow-2xl border-green-500' : 'shadow-lg border-gray-800'}`}
                                style={{
                                    transform: hoveredProject === project.id
                                        ? 'perspective(1000px) translateY(-10px) rotateX(3deg)'
                                        : 'perspective(1000px) translateY(0)'
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Green Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-green-900/20 to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-green-900/80 text-green-300 text-xs font-bold rounded-full border border-green-700/50">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Green Hover Button */}
                                    <div className={`absolute bottom-4 right-4 transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                        }`}>
                                        <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center 
                      justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 border border-green-400/30">
                                            ↗
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4">
                                        Innovative solution delivering exceptional results and
                                        transforming business operations.
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-green-400 text-sm font-medium">
                                            View Case Study
                                        </span>
                                        <span className={`text-green-400 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''
                                            }`}>
                                            →
                                        </span>
                                    </div>
                                </div>

                                {/* Corner Green Accents */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/50 rounded-tl-2xl"></div>
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500/50 rounded-tr-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

               
<div
  className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
  style={{ transitionDelay: "400ms" }}
>
  {[
    { number: "50+", label: "Projects Delivered", icon: to },
    { number: "40+", label: "Happy Clients", icon: hap },
    { number: "100%", label: "Success Rate", icon: coun },
    { number: "24/7", label: "Support", icon: tagIcon },
  ].map((stat, index) => (
    <div key={index} className="flex items-center gap-4 justify-center">

      {/* ICON */}
      <img
        src={stat.icon}
        alt="icon"
        className="w-12 h-12 object-contain"
      />

      {/* TEXT */}
      <div className="flex flex-col items-start">
        <h3 className="text-3xl font-extrabold text-green-400">
          {stat.number}
        </h3>

        {/* 👇 LABEL COLOR UPDATED 👇 */}
        <p className="text-green-300 text-sm tracking-wide font-medium">
          {stat.label}
        </p>
      </div>

    </div>
  ))}
</div>


            </div>
        </div>
    );
};

export default ProjectsSection;