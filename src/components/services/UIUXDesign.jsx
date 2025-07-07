import React, { useRef, useEffect, useState } from "react";

const UIUXDesign = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDesign, setActiveDesign] = useState(0);
  const [designData, setDesignData] = useState({
    projectsCompleted: 150,
    clientSatisfaction: 98,
    avgDeliveryTime: 7,
    currentProject: 'Mobile Banking App'
  });
  const heroRef = useRef(null);

  const designShowcase = [
    {
      title: "E-Commerce Platform",
      type: "Web Design",
      color: "from-purple-500 to-pink-500",
      status: "Live",
      users: "2.3M"
    },
    {
      title: "Banking Mobile App",
      type: "Mobile UX",
      color: "from-blue-500 to-cyan-500",
      status: "In Development",
      users: "500K"
    },
    {
      title: "SaaS Dashboard",
      type: "Web App",
      color: "from-green-500 to-emerald-500",
      status: "Testing",
      users: "1.2M"
    },
    {
      title: "AR Shopping Experience",
      type: "AR/VR",
      color: "from-orange-500 to-red-500",
      status: "Prototype",
      users: "Beta"
    }
  ];

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

  // Auto-cycle through design showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDesign(prev => (prev + 1) % designShowcase.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulate dynamic data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDesignData(prev => ({
        projectsCompleted: prev.projectsCompleted + Math.floor(Math.random() * 2),
        clientSatisfaction: 95 + Math.floor(Math.random() * 5),
        avgDeliveryTime: 5 + Math.floor(Math.random() * 5),
        currentProject: ['Mobile Banking App', 'E-commerce Platform', 'SaaS Dashboard', 'AR Experience'][Math.floor(Math.random() * 4)]
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
      style={{ paddingTop: 'max(60px, env(safe-area-inset-top))' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dark Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Floating Design Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-purple-400/40 font-mono text-xs animate-float">🎨 UI Design</div>
        <div className="absolute top-40 right-32 text-blue-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>📱 UX Research</div>
        <div className="absolute bottom-32 left-16 text-green-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>🖥️ Web Design</div>
        <div className="absolute bottom-20 right-20 text-orange-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>🚀 Prototyping</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-4 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Award-winning design studio</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">Craft Beautiful</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  UI/UX
                </span>
                <span className="block text-gray-300">Experiences</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                We design digital experiences that users love. From concept to pixel-perfect execution, we create interfaces that are both beautiful and functional.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{designData.projectsCompleted}+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Projects Done</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{designData.clientSatisfaction}%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{designData.avgDeliveryTime}</div>
                  <div className="text-xs sm:text-sm text-gray-500">Days Avg Delivery</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Project
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Portfolio
                </button>
                <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Free Consultation
                </button>
              </div>

            </div>

            {/* Right Content - Design Portfolio */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} lg:flex lg:justify-end mt-8 lg:mt-0`}>
              
              {/* Interactive Design Portfolio */}
              <div className="relative max-w-sm lg:max-w-lg xl:max-w-xl w-full mx-auto lg:mx-0">
                
                {/* Main Design Showcase Panel */}
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Portfolio</h3>
                        <p className="text-gray-400 text-xs">Featured work</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Active Project Display */}
                  <div className="mb-4">
                    <div className={`bg-gradient-to-r ${designShowcase[activeDesign].color} p-3 rounded-xl mb-3`}>
                      <div className="bg-black/20 backdrop-blur rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-bold text-sm">{designShowcase[activeDesign].title}</h4>
                          <span className="text-white/80 text-xs px-2 py-1 bg-white/20 rounded-full">
                            {designShowcase[activeDesign].status}
                          </span>
                        </div>
                        <p className="text-white/80 text-xs mb-2">{designShowcase[activeDesign].type}</p>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-white/80 text-xs">Users: {designShowcase[activeDesign].users}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Navigation */}
                  <div className="flex gap-1 mb-4 justify-center">
                    {designShowcase.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveDesign(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeDesign ? 'bg-purple-500' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Design Process Steps */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Research</span>
                      </div>
                      <div className="text-sm font-bold text-white">Done</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Design</span>
                      </div>
                      <div className="text-sm font-bold text-white">12/15</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Prototype</span>
                      </div>
                      <div className="text-sm font-bold text-white">Active</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Testing</span>
                      </div>
                      <div className="text-sm font-bold text-white">Queue</div>
                    </div>
                  </div>

                  {/* Current Project Status */}
                  <div className="bg-gray-800/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-xs">Active Project</span>
                      <span className="text-purple-400 text-xs font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5 mb-1">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-xs text-gray-400">On schedule</div>
                  </div>
                </div>

                {/* Floating Design Status Cards */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-xl p-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium">Award</div>
                      <div className="text-purple-400 text-xs">Winner</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-xl p-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium">98%</div>
                      <div className="text-blue-400 text-xs">Positive</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-lg p-2 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">Live</span>
                  </div>
                </div>

              </div>

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
        
        @media (max-width: 640px) {
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default UIUXDesign;