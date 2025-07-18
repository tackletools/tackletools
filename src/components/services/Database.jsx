import React, { useRef, useEffect, useState } from "react";

const Database = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [serverActive, setServerActive] = useState(false);
  const [queryActive, setQueryActive] = useState(false);
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
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    // Animate database states
    const serverInterval = setInterval(() => {
      setServerActive((prev) => !prev);
    }, 2800);

    const queryInterval = setInterval(() => {
      setQueryActive((prev) => !prev);
    }, 2200);

    return () => {
      clearInterval(serverInterval);
      clearInterval(queryInterval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Database Themed Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>

        {/* Mouse Follower Gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Floating Database Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-blue-400/40 font-mono text-xs animate-float">
          💾 PostgreSQL
        </div>
        <div
          className="absolute top-40 right-32 text-emerald-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "1s" }}
        >
          🔍 MongoDB
        </div>
        <div
          className="absolute bottom-32 left-16 text-purple-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "2s" }}
        >
          ⚡ Redis Cache
        </div>
        <div
          className="absolute bottom-20 right-20 text-indigo-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "3s" }}
        >
          🚀 MySQL Optimization
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-20 sm:pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 mb-6">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Database solutions available</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Scale Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
                  Database
                </span>
                <span className="block text-gray-300">Architecture</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                We design robust, scalable database solutions optimized for performance.
                From SQL to NoSQL, we handle migrations, optimization, and real-time 
                analytics to power your applications efficiently.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    100TB+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Data Managed
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Uptime
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    50ms
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Avg Response
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Get Started
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Case Studies
                </button>
                <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Database Audit
                </button>
              </div>
            </div>

            {/* Right Content - Database Hardware */}
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative flex flex-col items-center space-y-12">
                {/* Database Server */}
                <div className="relative group">
                  <div
                    className={`transition-all duration-500 ${
                      serverActive ? "transform rotate-1 scale-105" : ""
                    }`}
                  >
                    {/* Server Rack */}
                    <div className="relative">
                      <div className="w-80 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-600 shadow-2xl relative overflow-hidden">
                        
                        {/* Server Units */}
                        <div className="absolute inset-4 space-y-2">
                          {/* Server 1 */}
                          <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center px-3 gap-2">
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-blue-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className="flex-1 h-1 bg-slate-600 rounded"></div>
                            <div className="text-xs text-slate-400 font-mono">PostgreSQL</div>
                          </div>
                          
                          {/* Server 2 */}
                          <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center px-3 gap-2">
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-orange-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className="flex-1 h-1 bg-slate-600 rounded"></div>
                            <div className="text-xs text-slate-400 font-mono">MongoDB</div>
                          </div>
                          
                          {/* Server 3 */}
                          <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center px-3 gap-2">
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-red-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className="flex-1 h-1 bg-slate-600 rounded"></div>
                            <div className="text-xs text-slate-400 font-mono">Redis</div>
                          </div>
                          
                          {/* Server 4 */}
                          <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center px-3 gap-2">
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-purple-400' : 'bg-slate-500'} transition-colors`}></div>
                            <div className="flex-1 h-1 bg-slate-600 rounded"></div>
                            <div className="text-xs text-slate-400 font-mono">MySQL</div>
                          </div>
                        </div>

                        {/* Cooling Vents */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-slate-700 rounded-r-lg"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-slate-700 rounded-l-lg"></div>
                        
                        {/* Power LED */}
                        <div className="absolute top-2 right-2 flex gap-1">
                          <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                          <div className={`w-2 h-2 rounded-full ${serverActive ? 'bg-blue-400' : 'bg-slate-500'} transition-colors`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Server Info */}
                    <div className="absolute -top-8 -left-8 bg-emerald-500/20 backdrop-blur border border-emerald-400/30 rounded-xl p-3 animate-float">
                      <div className="text-emerald-400 text-xs font-mono">
                        ACTIVE
                      </div>
                    </div>

                    <div
                      className="absolute -top-8 -right-8 bg-blue-500/20 backdrop-blur border border-blue-400/30 rounded-xl p-3 animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="text-blue-400 text-xs font-mono">
                        CLUSTER
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-500/20 backdrop-blur border border-purple-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="text-purple-400 text-xs font-mono">
                        24/7
                      </div>
                    </div>
                  </div>
                </div>

                {/* Query Terminal */}
                <div className="relative group">
                  <div
                    className={`transition-all duration-500 ${
                      queryActive ? "transform -rotate-1 scale-105" : ""
                    }`}
                  >
                    {/* Terminal Body */}
                    <div className="w-72 h-44 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-600 shadow-2xl relative overflow-hidden">
                      {/* Terminal Header */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-xs text-slate-400 font-mono">
                          Database Query Terminal
                        </div>
                      </div>

                      {/* Terminal Content */}
                      <div className="absolute top-8 left-0 right-0 bottom-0 p-4 font-mono text-xs overflow-hidden">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400">$</span>
                            <span className="text-slate-300">SELECT * FROM users</span>
                            <div className={`w-2 h-4 bg-emerald-400 ${queryActive ? 'animate-pulse' : ''}`}></div>
                          </div>
                          
                          <div className="text-blue-400">
                            | id | name | email |
                          </div>
                          
                          <div className="text-slate-400">
                            | 1  | Amit | amit@... |
                          </div>
                          
                          <div className="text-slate-400">
                            | 2  | Pawan | pawan@... |
                          </div>
                          
                          <div className="text-slate-400">
                            | 3  | Bob  | bob@...  |
                          </div>
                          
                          <div className="text-emerald-400 mt-2">
                            Query executed in 0.023s
                          </div>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-emerald-400">$</span>
                            <span className="text-slate-300">CREATE INDEX idx_email</span>
                            <div className={`w-2 h-4 bg-emerald-400 ${queryActive ? 'animate-pulse' : ''}`}></div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Indicators */}
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        <div className={`w-2 h-2 rounded-full ${queryActive ? 'bg-emerald-400' : 'bg-slate-500'} transition-colors`}></div>
                        <div className={`w-2 h-2 rounded-full ${queryActive ? 'bg-blue-400' : 'bg-slate-500'} transition-colors`}></div>
                        <div className={`w-2 h-2 rounded-full ${queryActive ? 'bg-purple-400' : 'bg-slate-500'} transition-colors`}></div>
                      </div>
                    </div>

                    {/* Floating Terminal Info */}
                    <div className="absolute -top-6 -left-6 bg-blue-500/20 backdrop-blur border border-blue-400/30 rounded-xl p-2 animate-float">
                      <div className="text-blue-400 text-xs font-mono">
                        SQL
                      </div>
                    </div>

                    <div
                      className="absolute -top-6 -right-6 bg-emerald-500/20 backdrop-blur border border-emerald-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <div className="text-emerald-400 text-xs font-mono">
                        REAL-TIME
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-500/20 backdrop-blur border border-purple-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "3s" }}
                    >
                      <div className="text-purple-400 text-xs font-mono">
                        OPTIMIZED
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-slate-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            );
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Database;