import React, { useRef, useEffect, useState } from "react";

const AppDevelopment = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeApp, setActiveApp] = useState(0);
  const [appsDeployed, setAppsDeployed] = useState(0);
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
    
    // Animate apps deployed counter
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 3) + 1;
      setAppsDeployed(count);
      if (count >= 89) {
        setAppsDeployed(89);
        clearInterval(interval);
      }
    }, 150);

    // Auto-cycle through apps
    const appCycle = setInterval(() => {
      setActiveApp(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(appCycle);
    };
  }, []);

  const apps = [
    {
      name: "E-Commerce App",
      type: "Mobile & Web",
      color: "from-gray-800 to-gray-900",
      icon: "🛒",
      features: ["Payment Gateway", "Push Notifications", "Real-time Chat"]
    },
    {
      name: "Social Platform",
      type: "Cross-Platform",
      color: "from-slate-800 to-slate-900",
      icon: "👥",
      features: ["Live Streaming", "Social Auth", "Cloud Storage"]
    },
    {
      name: "Business Dashboard",
      type: "Web App",
      color: "from-gray-800 to-black-900",
      icon: "📊",
      features: ["Analytics", "API Integration", "Data Visualization"]
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Floating App Dev Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-purple-400/40 font-mono text-xs animate-float">📱 Native iOS & Android</div>
        <div className="absolute top-40 right-32 text-blue-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>⚛️ React Native & Flutter</div>
        <div className="absolute bottom-32 left-16 text-emerald-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>🔄 Cross-Platform Solutions</div>
        <div className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>☁️ Cloud-Native Architecture</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 mb-6 mt-4">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <span>App Development Experts</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Create</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                  Amazing
                </span>
                <span className="block text-gray-300">Mobile Apps</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                Complete app development services from concept to App Store. We build native iOS, Android, and cross-platform applications that engage users and drive business growth.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{appsDeployed}+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Apps Deployed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">4.9★</div>
                  <div className="text-xs sm:text-sm text-gray-500">App Store Rating</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">App Store Approval</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Start App Project
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View App Portfolio
                </button>
                <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Free Demo
                </button>
              </div>

            </div>

            {/* Right Content - Compact 3D App Showcase */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Compact 3D App Container */}
              <div className="relative perspective-1000 max-w-sm mx-auto">
                
                {/* Compact Phone Mockup */}
                <div className="relative mx-auto w-48 h-96 transform-gpu hover:scale-105 transition-all duration-500" style={{ 
                  transform: `rotateX(${mousePosition.y * 0.05 - 2}deg) rotateY(${mousePosition.x * 0.05 - 2}deg)`,
                  transformStyle: 'preserve-3d'
                }}>
                  
                  {/* Phone Frame */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2rem] shadow-xl border-4 border-gray-800" style={{ transform: 'translateZ(0px)' }}>
                    
                    {/* Screen Bezel */}
                    <div className="absolute inset-2 bg-black rounded-[1.5rem] overflow-hidden">
                      
                      {/* Dynamic Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20"></div>
                      
                      {/* App Screen Content */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 pt-6 pb-1 text-white text-xs">
                          <span>9:41</span>
                          <div className="w-3 h-1.5 border border-white rounded-sm">
                            <div className="w-2 h-0.5 bg-green-400 rounded-sm m-0.5"></div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="px-2 pb-2 h-full">
                          <div className={`w-full h-full rounded-xl bg-gradient-to-br ${apps[activeApp].color} p-3 relative overflow-hidden transition-all duration-500`}>
                            
                            {/* App Header */}
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-lg backdrop-blur">
                                {apps[activeApp].icon}
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-xs">{apps[activeApp].name}</h3>
                                <p className="text-white/70 text-xs">{apps[activeApp].type}</p>
                              </div>
                            </div>

                            {/* Feature Cards */}
                            <div className="space-y-2">
                              {apps[activeApp].features.slice(0, 2).map((feature, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-2 border border-white/10">
                                  <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: `${idx * 0.5}s` }}></div>
                                    <span className="text-white text-xs font-medium">{feature}</span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Bottom Action */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <button className="w-full bg-white/20 backdrop-blur border border-white/20 rounded-lg py-2 text-white font-medium text-xs hover:bg-white/30 transition-colors">
                                Get App
                              </button>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                            <div className="absolute top-1/4 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone Buttons */}
                    <div className="absolute -right-0.5 top-12 w-0.5 h-6 bg-gray-700 rounded-r"></div>
                    <div className="absolute -right-0.5 top-20 w-0.5 h-8 bg-gray-700 rounded-r"></div>
                  </div>

                  {/* Compact Floating App Icons */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg animate-float shadow-lg" style={{ transform: 'translateZ(30px)' }}>
                    📱
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-lg animate-float shadow-lg" style={{ animationDelay: '1s', transform: 'translateZ(20px)' }}>
                    🚀
                  </div>

                  <div className="absolute top-1/3 -left-6 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-sm animate-float shadow-lg" style={{ animationDelay: '2s', transform: 'translateZ(25px)' }}>
                    ⚡
                  </div>

                  <div className="absolute top-12 -right-6 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-sm animate-float shadow-lg" style={{ animationDelay: '3s', transform: 'translateZ(35px)' }}>
                    🎨
                  </div>
                </div>

                {/* App Type Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {apps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveApp(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeApp === idx ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* Compact Technology Stack */}
                <div className="grid grid-cols-2 gap-2 mt-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-lg p-2 text-center">
                    <span className="text-blue-400 text-xs font-medium">React Native</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-lg p-2 text-center">
                    <span className="text-green-400 text-xs font-medium">Flutter</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-lg p-2 text-center">
                    <span className="text-purple-400 text-xs font-medium">Swift</span>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur border border-orange-500/30 rounded-lg p-2 text-center">
                    <span className="text-orange-400 text-xs font-medium">Kotlin</span>
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

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default AppDevelopment;