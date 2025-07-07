import React, { useRef, useEffect, useState } from "react";

const Multimedia = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLevels, setAudioLevels] = useState([]);
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
    
    // Animate projects completed counter
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 4) + 1;
      setProjectsCompleted(count);
      if (count >= 127) {
        setProjectsCompleted(127);
        clearInterval(interval);
      }
    }, 120);

    // Auto-cycle through media types
    const mediaCycle = setInterval(() => {
      setActiveMedia(prev => (prev + 1) % 3);
    }, 4000);

    // Generate audio levels for visualizer
    const audioInterval = setInterval(() => {
      setAudioLevels(Array.from({ length: 12 }, () => Math.random() * 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(mediaCycle);
      clearInterval(audioInterval);
    };
  }, []);

  const mediaTypes = [
    {
      name: "Video Production",
      type: "4K & HD Content",
      color: "from-red-600 to-pink-600",
      icon: "🎬",
      features: ["Motion Graphics", "Color Grading", "Post-Production"]
    },
    {
      name: "Audio Design",
      type: "Professional Sound",
      color: "from-purple-600 to-blue-600",
      icon: "🎵",
      features: ["Sound Engineering", "Music Production", "Voice Over"]
    },
    {
      name: "Visual Effects",
      type: "3D & Animation",
      color: "from-green-600 to-cyan-600",
      icon: "✨",
      features: ["3D Modeling", "Animation", "Compositing"]
    }
  ];

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-pink-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Floating Multimedia Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-red-400/40 font-mono text-xs animate-float">🎬 Video Production</div>
        <div className="absolute top-40 right-32 text-purple-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>🎵 Audio Engineering</div>
        <div className="absolute bottom-32 left-16 text-green-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>✨ Visual Effects</div>
        <div className="absolute bottom-20 right-20 text-blue-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>🎨 Motion Graphics</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-xs sm:text-sm text-red-400 mb-4 sm:mb-6 mt-2 sm:mt-4">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Multimedia Production Studio</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">Craft</span>
                <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-gradient">
                  Stunning
                </span>
                <span className="block text-gray-300">Multimedia</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                At TackleTools, we bring your vision to life through cutting-edge video production, audio engineering, and visual effects that captivate audiences and elevate your brand.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{projectsCompleted}+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-xs sm:text-sm text-gray-500">Client Rating</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">8K</div>
                  <div className="text-xs sm:text-sm text-gray-500">Max Resolution</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-stretch sm:items-center gap-3">
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg font-medium text-white text-sm sm:text-base hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  Start Production
                </button>
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm sm:text-base hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Portfolio
                </button>
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-gray-400 text-sm sm:text-base hover:text-white transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Right Content - Multimedia Showcase */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-8 lg:mt-0`}>
              
              {/* Multimedia Production Center */}
              <div className="relative perspective-1000 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                
                {/* Main Studio Display */}
                <div className="relative transform-gpu hover:scale-105 transition-all duration-500" style={{ 
                  transform: `rotateX(${mousePosition.y * 0.02 - 1}deg) rotateY(${mousePosition.x * 0.02 - 1}deg)`,
                  transformStyle: 'preserve-3d'
                }}>
                  
                  {/* Studio Monitor */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-gray-800 overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
                    
                    {/* Screen Content */}
                    <div className="absolute inset-2 sm:inset-3 bg-black rounded-lg sm:rounded-xl overflow-hidden">
                      
                      {/* Video Player Interface */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-2 sm:px-4 py-1 sm:py-2 bg-gray-800/50 backdrop-blur border-b border-gray-700/50">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full"></div>
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400 font-mono hidden sm:block">
                            {mediaTypes[activeMedia].name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {mediaTypes[activeMedia].type}
                          </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="p-2 sm:p-4 h-full">
                          <div className={`w-full h-full rounded-md sm:rounded-lg bg-gradient-to-br ${mediaTypes[activeMedia].color} p-2 sm:p-4 relative overflow-hidden transition-all duration-500`}>
                            
                            {/* Content Based on Active Media */}
                            {activeMedia === 0 && (
                              // Video Production View
                              <div className="relative h-full">
                                <div className="absolute inset-0 bg-black/20 rounded-lg">
                                  <div className="flex items-center justify-center h-full">
                                    <div className="text-3xl sm:text-4xl lg:text-6xl opacity-50">🎬</div>
                                  </div>
                                </div>
                                
                                {/* Video Timeline */}
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                                  <div className="bg-black/40 backdrop-blur rounded-lg p-2 sm:p-3">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                      <button 
                                        onClick={togglePlayback}
                                        className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xs sm:text-sm"
                                      >
                                        {isPlaying ? '⏸️' : '▶️'}
                                      </button>
                                      <div className="text-xs text-white">00:32 / 02:45</div>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-1">
                                      <div className="bg-white h-1 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                  </div>
                                </div>

                                {/* Floating Video Elements */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                                  4K
                                </div>
                              </div>
                            )}

                            {activeMedia === 1 && (
                              // Audio Production View
                              <div className="relative h-full">
                                <div className="absolute inset-0 bg-black/20 rounded-lg p-2 sm:p-4">
                                  
                                  {/* Audio Waveform Visualizer */}
                                  <div className="flex items-end justify-center h-1/2 sm:h-2/3 gap-1">
                                    {audioLevels.slice(0, 8).map((level, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-gradient-to-t from-purple-400 to-blue-400 w-2 sm:w-3 rounded-t transition-all duration-100"
                                        style={{ 
                                          height: `${Math.max(level, 10)}%`,
                                          animationDelay: `${idx * 0.1}s`
                                        }}
                                      ></div>
                                    ))}
                                  </div>
                                  
                                  {/* Audio Controls */}
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur rounded-lg p-2 sm:p-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <button 
                                          onClick={togglePlayback}
                                          className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xs sm:text-sm"
                                        >
                                          {isPlaying ? '⏸️' : '▶️'}
                                        </button>
                                        <div className="text-xs text-white">🎵 Audio</div>
                                      </div>
                                      <div className="text-xs text-white opacity-70 hidden sm:block">48kHz</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Audio Level Meters */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 space-y-1">
                                  <div className="flex items-center gap-1">
                                    <div className="text-xs text-white">L</div>
                                    <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-black/40 rounded-full overflow-hidden">
                                      <div className="h-full bg-gradient-to-r from-green-400 to-red-400 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="text-xs text-white">R</div>
                                    <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-black/40 rounded-full overflow-hidden">
                                      <div className="h-full bg-gradient-to-r from-green-400 to-red-400 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeMedia === 2 && (
                              // Visual Effects View
                              <div className="relative h-full">
                                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                                  
                                  {/* 3D Wireframe Animation */}
                                  <div className="relative w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32">
                                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-spin opacity-60"></div>
                                    <div className="absolute inset-1 sm:inset-2 border-2 border-green-400 rounded-lg animate-spin opacity-40" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                                    <div className="absolute inset-2 sm:inset-4 border-2 border-blue-400 rounded-lg animate-spin opacity-30" style={{ animationDuration: '4s' }}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-lg sm:text-xl lg:text-2xl animate-pulse">✨</div>
                                    </div>
                                  </div>
                                </div>

                                {/* VFX Timeline */}
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                                  <div className="bg-black/40 backdrop-blur rounded-lg p-2 sm:p-3">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                      <div className="text-xs text-white">Composition</div>
                                      <div className="flex gap-1">
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 text-xs text-white/70">
                                      <div>3D Layer</div>
                                      <div>Particles</div>
                                      <div>Lighting</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Render Progress */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/40 backdrop-blur rounded-lg p-2">
                                  <div className="text-xs text-white mb-1">Rendering...</div>
                                  <div className="w-16 sm:w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Monitor Base */}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-2 sm:h-4 bg-gray-800 rounded-b-lg"></div>
                  </div>

                  {/* Floating Production Elements */}
                  <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base lg:text-lg animate-float shadow-lg" style={{ transform: 'translateZ(30px)' }}>
                    🎬
                  </div>
                  
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base lg:text-lg animate-float shadow-lg" style={{ animationDelay: '1s', transform: 'translateZ(20px)' }}>
                    🎵
                  </div>

                  <div className="absolute top-1/4 -left-6 sm:-left-8 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-gradient-to-br from-green-500 to-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm animate-float shadow-lg" style={{ animationDelay: '2s', transform: 'translateZ(25px)' }}>
                    ✨
                  </div>

                  <div className="absolute top-12 sm:top-16 -right-6 sm:-right-8 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm animate-float shadow-lg" style={{ animationDelay: '3s', transform: 'translateZ(35px)' }}>
                    🎨
                  </div>
                </div>

                {/* Media Type Indicators */}
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  {mediaTypes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMedia(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeMedia === idx ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* Production Software Stack */}
                <div className="grid grid-cols-2 gap-2 mt-4 sm:mt-6">
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur border border-red-500/30 rounded-lg p-2 text-center">
                    <span className="text-red-400 text-xs sm:text-sm font-medium">After Effects</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur border border-purple-500/30 rounded-lg p-2 text-center">
                    <span className="text-purple-400 text-xs sm:text-sm font-medium">Pro Tools</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur border border-green-500/30 rounded-lg p-2 text-center">
                    <span className="text-green-400 text-xs sm:text-sm font-medium">Cinema 4D</span>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur border border-orange-500/30 rounded-lg p-2 text-center">
                    <span className="text-orange-400 text-xs sm:text-sm font-medium">Premiere Pro</span>
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

export default Multimedia;