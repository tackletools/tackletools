import React, { useRef, useEffect, useState } from "react";

const SensorsCreation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [sensorData, setSensorData] = useState({
    temperature: 23.5,
    humidity: 68,
    pressure: 1013.25,
    motion: false
  });
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

  // Simulate sensor data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: 20 + Math.random() * 10,
        humidity: 60 + Math.random() * 20,
        pressure: 1010 + Math.random() * 10,
        motion: Math.random() > 0.7
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dark Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Floating Sensor Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-blue-400/40 font-mono text-xs animate-float">🌡️ Temperature Monitoring</div>
        <div className="absolute top-40 right-32 text-green-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>📊 Data Analytics</div>
        <div className="absolute bottom-32 left-16 text-orange-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>🔧 Custom Sensors</div>
        <div className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>📡 IoT Integration</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 mb-6">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Ready for deployment</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Create Smart</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                  Sensors
                </span>
                <span className="block text-gray-300">Solutions</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                From concept to deployment, we design and build custom sensor solutions. Monitor anything, anywhere with our intelligent IoT sensors and real-time analytics platform.
              </p>

              {/* Stats - Reduced margins */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Sensors Built</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Industries Served</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons - Small and in one line */}
              <div className="flex items-center gap-3 flex-wrap">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Start Building
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Portfolio
                </button>
                <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free Assessment
                </button>
              </div>

            </div>

            {/* Right Content - Sensor Dashboard */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Interactive Sensor Dashboard */}
              <div className="relative">
                
                {/* Main Sensor Control Panel */}
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Sensor Network</h3>
                        <p className="text-gray-400 text-sm">Live monitoring</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Sensor Readings */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Temperature</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {sensorData.temperature.toFixed(1)}°C
                      </div>
                      <div className="text-xs text-gray-500">Optimal range</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Humidity</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {sensorData.humidity.toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-500">Normal levels</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Pressure</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {sensorData.pressure.toFixed(1)} hPa
                      </div>
                      <div className="text-xs text-gray-500">Stable</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${sensorData.motion ? 'bg-red-400' : 'bg-gray-600'}`}></div>
                        <span className="text-gray-300 text-sm">Motion</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {sensorData.motion ? 'Active' : 'Clear'}
                      </div>
                      <div className="text-xs text-gray-500">PIR sensor</div>
                    </div>
                  </div>

                  {/* Network Status */}
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-300 text-sm">Network Status</span>
                      <span className="text-green-400 text-sm font-medium">All Systems Online</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((sensor, i) => (
                        <div key={i} className="bg-gray-700/50 rounded-lg p-2 text-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1"></div>
                          <div className="text-xs text-gray-400">Node {sensor}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Sensor Status Cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Calibrated</div>
                      <div className="text-green-400 text-xs">Just now</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Data Stream</div>
                      <div className="text-blue-400 text-xs">Active</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur border border-orange-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-orange-400 text-xs font-medium">Processing</span>
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

export default SensorsCreation;