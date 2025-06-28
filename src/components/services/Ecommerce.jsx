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
      className="relative h-screen bg-black overflow-hidden"
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

      {/* Floating Ecommerce Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-green-400/40 font-mono text-xs animate-float">📊 Dashboard Management</div>
        <div className="absolute top-40 right-32 text-blue-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>📝 Product Listing</div>
        <div className="absolute bottom-32 left-16 text-purple-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>📈 Marketing Automation</div>
        <div className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>💰 Revenue Optimization</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 mb-6">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new clients</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Scale Your</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                  eCommerce
                </span>
                <span className="block text-gray-300">Business</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                We tackle everything from store management to marketing automation. Focus on growing your business while we optimize your operations and boost your sales.
              </p>

              {/* Stats - Reduced margins */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">200+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Stores Managed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">$2M+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Revenue Generated</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-500">Support</div>
                </div>
              </div>

              {/* CTA Buttons - Small and in one line */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Services
                </button>
                <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Free Consultation
                </button>
              </div>

            </div>

            {/* Right Content - Visual Elements */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Interactive Store Dashboard */}
              <div className="relative">
                
                {/* Main Store Card */}
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H12M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Client Dashboard</h3>
                        <p className="text-gray-400 text-sm">Performance metrics</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Client Growth</span>
                      <span className="text-green-400 text-sm font-medium">+47.2%</span>
                    </div>
                    <div className="h-24 bg-gray-800/50 rounded-xl p-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                        {[30, 55, 35, 75, 50, 85, 65, 90].map((height, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-green-500 to-emerald-500 rounded-t w-2 animate-pulse"
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
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                      <div className="text-cyan-400 text-lg sm:text-xl font-bold">85</div>
                      <div className="text-gray-500 text-xs">Active Clients</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                      <div className="text-green-400 text-lg sm:text-xl font-bold">$2.3M</div>
                      <div className="text-gray-500 text-xs">Revenue Managed</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                      <div className="text-purple-400 text-lg sm:text-xl font-bold">98%</div>
                      <div className="text-gray-500 text-xs">Satisfaction</div>
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
                      <div className="text-white text-sm font-medium">Campaign Live</div>
                      <div className="text-green-400 text-xs">Running now</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Store Optimized</div>
                      <div className="text-purple-400 text-xs">2 min ago</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 text-xs font-medium">Auto Scaling</span>
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
      `}</style>
    </section>
  );
};

export default Ecommerce;