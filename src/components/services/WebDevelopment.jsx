import React, { useRef, useEffect, useState } from "react";

const WebDevelopment = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeLines, setCodeLines] = useState(0);
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
    
    // Animate code lines counter
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 5) + 1;
      setCodeLines(count);
      if (count >= 247) {
        setCodeLines(247);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dark Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Floating Web Dev Service Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-blue-400/40 font-mono text-xs animate-float">⚛️ React Development</div>
        <div className="absolute top-40 right-32 text-green-400/40 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>🚀 API Integration</div>
        <div className="absolute bottom-32 left-16 text-purple-400/40 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>📱 Responsive Design</div>
        <div className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>⚡ Performance Optimization</div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col pt-12 md:pt-20">

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 mb-6 mt-4">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Taking new projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">Build Your</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 text-transparent bg-clip-text animate-gradient">
                    Digital
                  </span>
                  <span className="block text-gray-300">Presence</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                  Tackle every stage of web development with the right tools—from concept to deployment. We craft modern, responsive websites that drive results and deliver exceptional user experiences.
                </p>

                {/* Stats - Reduced margins */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">150+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Projects Delivered</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">99%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Client Satisfaction</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">48hr</div>
                    <div className="text-xs sm:text-sm text-gray-500">Quick Turnaround</div>
                  </div>
                </div>

                {/* CTA Buttons - Small and in one line */}
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    Start Project
                  </button>
                  <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                    View Portfolio
                  </button>
                  <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4L5 15l5-5a8.003 8.003 0 017-7c4.418 0 8 3.582 8 8z" />
                    </svg>
                    Free Quote
                  </button>
                </div>

              </div>

              {/* Right Content - Code Editor Mockup */}
              <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Code Editor Container */}
                <div className="relative">
                  
                  {/* Browser Window */}
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                    
                    {/* Browser Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-gray-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>tackletools.tech</span>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Live</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
                          <div className="w-1 h-1 bg-gray-400"></div>
                        </div>
                        <div className="w-4 h-4 border border-gray-600 rounded"></div>
                        <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
                          <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M0 0v8l8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Code Editor Tabs */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/60 border-b border-gray-700/30">
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 rounded-t text-xs text-white">
                        <span className="text-blue-400">⚛</span>
                        <span>App.jsx</span>
                        <span className="text-gray-500 hover:text-white cursor-pointer">×</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 text-xs text-gray-400 hover:text-white cursor-pointer">
                        <span className="text-orange-400">{}</span>
                        <span>styles.css</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 text-xs text-gray-400 hover:text-white cursor-pointer">
                        <span className="text-green-400">📄</span>
                        <span>index.html</span>
                      </div>
                    </div>

                    {/* Code Content */}
                    <div className="p-4 font-mono text-sm leading-relaxed">
                      {/* Line numbers and code */}
                      <div className="flex">
                        <div className="text-gray-600 text-right pr-4 select-none w-8">
                          {Array.from({length: 12}, (_, i) => (
                            <div key={i} className="leading-6">{i + 1}</div>
                          ))}
                        </div>
                        <div className="flex-1">  
                          <div className="leading-6 text-purple-400">import <span className="text-cyan-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                          <div className="leading-6 text-purple-400">import <span className="text-cyan-400">{ useState }</span> from <span className="text-green-400">'react'</span>;</div>
                          <div className="leading-6"></div>
                          <div className="leading-6 text-purple-400">const <span className="text-yellow-400">WebApp</span> = <span className="text-cyan-400">()</span> <span className="text-purple-400">=></span> {`{`}</div>
                          <div className="leading-6 pl-4 text-purple-400">const <span className="text-white">[</span><span className="text-cyan-400">isLoading</span><span className="text-white">, </span><span className="text-cyan-400">setLoading</span><span className="text-white">]</span> = <span className="text-yellow-400">useState</span><span className="text-white">(</span><span className="text-orange-400">false</span><span className="text-white">);</span></div>
                          <div className="leading-6"></div>
                          <div className="leading-6 pl-4 text-purple-400">return <span className="text-white">(</span></div>
                          <div className="leading-6 pl-8 text-cyan-400">&lt;<span className="text-red-400">div</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">"app-container"</span>&gt;</div>
                          <div className="leading-6 pl-12 text-cyan-400">&lt;<span className="text-red-400">h1</span>&gt;<span className="text-white">Welcome to TackleTools</span>&lt;/<span className="text-red-400">h1</span>&gt;</div>
                          <div className="leading-6 pl-12 text-cyan-400">&lt;<span className="text-red-400">button</span> <span className="text-yellow-400">onClick</span>=<span className="text-white">{`{handleClick}`}</span>&gt;</div>
                          <div className="leading-6 pl-16 text-white">Get Started</div>
                          <div className="leading-6 pl-12 text-cyan-400">&lt;/<span className="text-red-400">button</span>&gt;</div>
                        </div>
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900/60 border-t border-gray-700/30 text-xs">
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          No errors
                        </span>
                        <span>{codeLines} lines</span>
                        <span>React 18.2.0</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <span>UTF-8</span>
                        <span>JavaScript</span>
                        <span>⚡ Fast Refresh</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-xl p-3 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Build Success</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span className="text-blue-400 text-xs font-medium">Responsive Design</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur border border-purple-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-purple-400 text-xs font-medium">Clean Code</span>
                    </div>
                  </div>

                  <div className="absolute top-8 -left-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur border border-orange-500/30 rounded-xl p-3 animate-float" style={{ animationDelay: '3s' }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <span className="text-orange-400 text-xs font-medium">Optimized</span>
                    </div>
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

export default WebDevelopment;