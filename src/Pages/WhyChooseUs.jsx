import { useState } from "react";
import { Plus, Minus, Users, Target, Award, TrendingUp, Zap, Activity } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Expertise And Innovation",
      description: "Our team consists of industry experts who stay ahead of the curve with the latest technologies and innovative approaches to solve complex problems.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Customized Solutions",
      description: "We tailor our services to meet your specific needs, ensuring that every solution is perfectly aligned with your business objectives and goals.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Proven Track Record",
      description: "With over 500+ successful projects delivered, we have a reputation for excellence and reliability that speaks for itself.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Client Centric Approach",
      description: "Your success is our priority. We work closely with you at every stage, ensuring transparency and collaboration throughout the process.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Support",
      description: "Our relationship doesn't end at delivery. We provide ongoing support and maintenance to ensure your solution continues to perform optimally.",
      icon: <TrendingUp className="w-6 h-6" />
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black-100">
      {/* Active Status Bar */}
      <div className="fixed top-6 right-6 z-50">
        <div className="relative">
          {/* 3D Effect Container */}
          
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black/50 rounded-3xl rotate-45 border border-emerald-900/30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-black/40 rounded-3xl -rotate-12 border border-emerald-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 relative z-10">
          
          {/* LEFT CONTENT - 3D Card Style */}
          <div className="space-y-10">
            <div className="relative group">
              {/* Card 3D Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 via-black to-emerald-800 rounded-3xl blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-10 border border-emerald-800/30 shadow-2xl">
                <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-900/50 to-black text-emerald-300 text-sm font-bold tracking-wider border border-emerald-700/30 mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  REASON TO CHOOSE US
                </span>
                
                <h2 className="text-5xl font-bold text-white leading-tight">
                  Client Focused
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                    Solutions That Deliver
                  </span>
                </h2>

                <p className="text-gray-300 mt-8 text-lg leading-relaxed">
                  Accelerate innovation with world-class tech teams. We match you with elite remote talent for all your software development needs, delivering excellence at every step.
                </p>

                {/* Enhanced Stats with Images/Visuals */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {/* Projects Completed Card */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-emerald-900 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-7 border border-emerald-800/40 hover:border-emerald-600/60 transition-all duration-300 transform hover:-translate-y-1">
                      {/* Visual Element - Progress Ring */}
                      <div className="relative w-16 h-16 mb-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#064e3b" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="56" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-2xl font-bold text-emerald-300">500+</div>
                        </div>
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">Projects Completed</div>
                      <div className="text-emerald-400/80 text-sm">Successfully delivered worldwide</div>
                    </div>
                  </div>

                  {/* Client Satisfaction Card */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-400 to-emerald-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-7 border border-emerald-700/40 hover:border-emerald-500/60 transition-all duration-300 transform hover:-translate-y-1">
                      {/* Visual Element - Star Rating */}
                      <div className="relative w-16 h-16 mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-2xl font-bold text-emerald-300">98%</div>
                        </div>
                        {/* Stars */}
                        <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-0.5">
                          {[1,2,3,4,5].map((star) => (
                            <div key={star} className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">Client Satisfaction</div>
                      <div className="text-emerald-400/80 text-sm">Rated 4.9/5 by clients</div>
                            <div className="text-emerald-400/80 text-sm">Successfully delivered worldwide</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDIONS - 3D Style */}
          <div className="space-y-5">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative group perspective-1000 ${open === index ? 'z-10' : ''}`}
              >
                {/* 3D Hover Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl blur transition duration-500 ${
                  open === index 
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-800 opacity-70' 
                    : 'bg-gradient-to-r from-emerald-900/50 to-black opacity-30'
                }`}></div>
                
                <div className={`relative bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 transform ${
                  open === index 
                    ? 'scale-[1.02] border-emerald-500/50 shadow-2xl shadow-emerald-900/30' 
                    : 'border-emerald-800/30 hover:border-emerald-600/40 hover:scale-[1.01]'
                }`}>
                  <div
                    onClick={() => setOpen(open === index ? null : index)}
                    className="p-7 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        open === index 
                          ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-lg shadow-emerald-900/50' 
                          : 'bg-gradient-to-br from-emerald-900/30 to-black text-emerald-400 border border-emerald-800/30'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xl font-bold text-white block mb-1">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-xs text-emerald-400/80 font-medium">
                              {open === index ? 'Expanded' : 'Click to expand'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      open === index 
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-900/50' 
                        : 'bg-gradient-to-br from-gray-800 to-black text-emerald-400 border border-emerald-800/40'
                    }`}>
                      {open === index ? 
                        <Minus size={20} className="transform transition-transform duration-300" /> : 
                        <Plus size={20} className="transform transition-transform duration-300" />
                      }
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-7 pb-7 pt-3 border-t border-emerald-900/30">
                      <p className="text-gray-300 leading-relaxed pl-17">
                        {item.description}
                      </p>
                      {/* Bottom line indicator */}
                      <div className="mt-6 pl-17">
                        <div className="w-full h-px bg-gradient-to-r from-emerald-900/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements for 3D Effect */}
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-emerald-900/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-20 h-20 border border-emerald-700/10 rounded-2xl rotate-45 animate-pulse delay-1000"></div>
      </section>

      {/* Additional Active Indicator at Bottom */}
      <div className="fixed bottom-8 right-8 z-40">
  <div className="bg-gradient-to-r from-black/80 to-emerald-900/30 backdrop-blur-sm rounded-full p-3 border border-emerald-800/40 shadow-lg">
    <div className="flex items-center gap-3">

      {/* Animated Green Dot */}
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-3 h-3 bg-emerald-400 rounded-full"></div>
      </div>

      {/* Support Icon */}
      <div className="text-emerald-300">
        <i className="fas fa-headset text-xl"></i>
      </div>

    </div>
  </div>
</div>

    </div>
  );
}