import React, { useRef, useEffect, useState } from "react";

const Ecommerce = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dark Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-teal-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
        
        {/* Mouse Follower Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 text-green-400/40 font-mono text-xs animate-float">{"<div className='hero'>"}</div>
        <div className="absolute top-40 right-32 text-blue-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>const [state, setState] = useState()</div>
        <div className="absolute bottom-32 left-16 text-purple-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>function Component() {}</div>
        <div className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>export default Hero</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col pt-20">

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 mb-6">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">We Build</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                    Digital Magic
                  </span>
                  <span className="block text-gray-300">That Works</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                  From concept to deployment, we craft exceptional digital experiences that convert visitors into customers and ideas into reality.
                </p>

                {/* Stats - Removed spacing */}
                <div className="grid grid-cols-3 gap-0 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">150+</div>
                    <div className="text-sm text-gray-500">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-gray-500">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-500">Support</div>
                  </div>
                </div>

                {/* CTA Buttons - Small and in one line */}
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    Start Project
                  </button>
                  <button className="px-5 py-2.5 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                    View Work
                  </button>
                  <button className="px-5 py-2.5 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Live Demo
                  </button>
                </div>

              </div>

              {/* Right Content - Visual Elements */}
              <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Interactive Dashboard Preview */}
                <div className="relative">
                  
                  {/* Main Dashboard Card */}
                  <div className="bg-gradient-to-br from-gray-900/70 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Analytics Dashboard</h3>
                          <p className="text-gray-400 text-sm">Real-time insights</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Revenue Growth</span>
                        <span className="text-green-400 text-sm font-medium">+24.5%</span>
                      </div>
                      <div className="h-24 bg-gray-800/50 rounded-xl p-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                          {[40, 65, 45, 80, 60, 90, 75, 95].map((height, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t w-2 animate-pulse"
                              style={{ 
                                height: `${height}%`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                        <div className="text-cyan-400 text-xl font-bold">2.4K</div>
                        <div className="text-gray-500 text-xs">Active Users</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                        <div className="text-green-400 text-xl font-bold">€47K</div>
                        <div className="text-gray-500 text-xs">Revenue</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                        <div className="text-purple-400 text-xl font-bold">156</div>
                        <div className="text-gray-500 text-xs">Conversions</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Notification Cards */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-2xl p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Deploy Success</div>
                        <div className="text-green-400 text-xs">Just now</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">New User</div>
                        <div className="text-purple-400 text-xs">2 min ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-400 text-xs font-medium">Live Updates</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Services Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "💻", label: "Web Dev", desc: "Full-stack solutions" },
                { icon: "📱", label: "Mobile", desc: "iOS & Android apps" },
                { icon: "🎨", label: "Design", desc: "UI/UX & Branding" },
                { icon: "⚡", label: "Optimization", desc: "Speed & Performance" }
              ].map((service, index) => (
                <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <div className="text-white font-medium text-sm mb-1">{service.label}</div>
                  <div className="text-gray-500 text-xs">{service.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Ecommerce;