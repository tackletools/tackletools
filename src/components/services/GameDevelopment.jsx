import React, { useRef, useEffect, useState } from "react";
import { HelmetTags } from '../../utils/HelmetMetaTags.jsx';

const GameDevelopment = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [glassesActive, setGlassesActive] = useState(false);
  const [controllerActive, setControllerActive] = useState(false);
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

    // Animate hardware states
    const glassesInterval = setInterval(() => {
      setGlassesActive((prev) => !prev);
    }, 3000);

    const controllerInterval = setInterval(() => {
      setControllerActive((prev) => !prev);
    }, 2500);

    return () => {
      clearInterval(glassesInterval);
      clearInterval(controllerInterval);
    };
  }, []);

  return (
    <>
      {HelmetTags.GameDevelopment}
    <section
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gaming Themed Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse"
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

      {/* Floating Game Development Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-red-400/40 font-mono text-xs animate-float">
          🎮 Unity Development
        </div>
        <div
          className="absolute top-40 right-32 text-blue-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "1s" }}
        >
          🕹️ Unreal Engine
        </div>
        <div
          className="absolute bottom-32 left-16 text-green-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "2s" }}
        >
          🎯 Game Mechanics
        </div>
        <div
          className="absolute bottom-20 right-20 text-purple-400/40 font-mono text-xs animate-float"
          style={{ animationDelay: "3s" }}
        >
          🚀 Live Deployment
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 mb-6">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span>Now accepting new projects</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Build Epic</span>
                <span className="block bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text animate-gradient">
                  Games
                </span>
                <span className="block text-gray-300">That Players Love</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                We develop engaging game experiences across platforms, using
                cutting-edge tools to tackle creative challenges and bring your
                vision to life—on mobile, PC, or console from concept to launch.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Games Shipped
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    2M+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Downloads
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    5★
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Avg Rating
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  Start Project
                </button>
                <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                  View Portfolio
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Right Content - Gaming Hardware */}
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative flex flex-col items-center space-y-12">
                {/* VR/VFX Glasses */}
                <div className="relative group">
                  <div
                    className={`transition-all duration-500 ${
                      glassesActive ? "transform rotate-2 scale-105" : ""
                    }`}
                  >
                    {/* Main Glasses Body */}
                    <div className="relative">
                      {/* Glasses Frame */}
                      <div className="w-80 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-600 shadow-2xl relative overflow-hidden">
                        {/* Lenses */}
                        <div className="absolute inset-4 flex gap-4">
                          <div
                            className={`flex-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl border border-blue-400/30 relative overflow-hidden ${
                              glassesActive ? "animate-pulse" : ""
                            }`}
                          >
                            {/* Lens Effects */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
                          </div>
                          <div
                            className={`flex-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl border border-blue-400/30 relative overflow-hidden ${
                              glassesActive ? "animate-pulse" : ""
                            }`}
                          >
                            {/* Lens Effects */}
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                            <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
                          </div>
                        </div>

                        {/* Status Indicators */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              glassesActive ? "bg-green-400" : "bg-gray-500"
                            } transition-colors`}
                          ></div>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              glassesActive ? "bg-blue-400" : "bg-gray-500"
                            } transition-colors`}
                          ></div>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              glassesActive ? "bg-purple-400" : "bg-gray-500"
                            } transition-colors`}
                          ></div>
                        </div>

                        {/* Side Vents */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-12 bg-gray-700 rounded-r-lg"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-12 bg-gray-700 rounded-l-lg"></div>
                      </div>

                      {/* Head Strap */}
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-gray-700 rounded-full"></div>
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-gray-700 rounded-full"></div>
                    </div>

                    {/* Floating VR Elements */}
                    <div className="absolute -top-8 -left-8 bg-blue-500/20 backdrop-blur border border-blue-400/30 rounded-xl p-3 animate-float">
                      <div className="text-blue-400 text-xs font-mono">
                        VR MODE
                      </div>
                    </div>

                    <div
                      className="absolute -top-8 -right-8 bg-purple-500/20 backdrop-blur border border-purple-400/30 rounded-xl p-3 animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="text-purple-400 text-xs font-mono">
                        8K DISPLAY
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500/20 backdrop-blur border border-green-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="text-green-400 text-xs font-mono">
                        120Hz
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gaming Controller */}
                <div className="relative group">
                  <div
                    className={`transition-all duration-500 ${
                      controllerActive ? "transform -rotate-1 scale-105" : ""
                    }`}
                  >
                    {/* Controller Body */}
                    <div className="w-72 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-600 shadow-2xl relative overflow-hidden">
                      {/* Controller Grips */}
                      <div className="absolute bottom-0 left-8 w-16 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-full"></div>
                      <div className="absolute bottom-0 right-8 w-16 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-full"></div>

                      {/* D-Pad */}
                      <div className="absolute top-8 left-12">
                        <div className="relative w-12 h-12">
                          <div
                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-600 rounded transition-colors ${
                              controllerActive ? "bg-blue-500" : ""
                            }`}
                          ></div>
                          <div
                            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-600 rounded transition-colors ${
                              controllerActive ? "bg-blue-500" : ""
                            }`}
                          ></div>
                          <div
                            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-4 bg-gray-600 rounded transition-colors ${
                              controllerActive ? "bg-blue-500" : ""
                            }`}
                          ></div>
                          <div
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-4 bg-gray-600 rounded transition-colors ${
                              controllerActive ? "bg-blue-500" : ""
                            }`}
                          ></div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-8 right-12">
                        <div className="relative w-12 h-12">
                          <div
                            className={`absolute top-0 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                              controllerActive
                                ? "bg-green-500 border-green-400 text-white"
                                : "bg-gray-600 border-gray-500 text-gray-300"
                            } transition-all`}
                          >
                            Y
                          </div>
                          <div
                            className={`absolute bottom-0 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                              controllerActive
                                ? "bg-blue-500 border-blue-400 text-white"
                                : "bg-gray-600 border-gray-500 text-gray-300"
                            } transition-all`}
                          >
                            A
                          </div>
                          <div
                            className={`absolute top-3 left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                              controllerActive
                                ? "bg-red-500 border-red-400 text-white"
                                : "bg-gray-600 border-gray-500 text-gray-300"
                            } transition-all`}
                          >
                            X
                          </div>
                          <div
                            className={`absolute top-3 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                              controllerActive
                                ? "bg-yellow-500 border-yellow-400 text-white"
                                : "bg-gray-600 border-gray-500 text-gray-300"
                            } transition-all`}
                          >
                            B
                          </div>
                        </div>
                      </div>

                      {/* Analog Sticks */}
                      <div className="absolute bottom-8 left-16">
                        <div
                          className={`w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-600 relative ${
                            controllerActive ? "border-red-400" : ""
                          } transition-colors`}
                        >
                          <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                              controllerActive ? "bg-red-500" : "bg-gray-600"
                            } transition-colors`}
                          ></div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-16">
                        <div
                          className={`w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-600 relative ${
                            controllerActive ? "border-blue-400" : ""
                          } transition-colors`}
                        >
                          <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                              controllerActive ? "bg-blue-500" : "bg-gray-600"
                            } transition-colors`}
                          ></div>
                        </div>
                      </div>

                      {/* Center Buttons */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                        <div
                          className={`w-4 h-4 bg-gray-600 rounded border ${
                            controllerActive
                              ? "bg-orange-500 border-orange-400"
                              : "border-gray-500"
                          } transition-colors`}
                        ></div>
                        <div
                          className={`w-4 h-4 bg-gray-600 rounded border ${
                            controllerActive
                              ? "bg-orange-500 border-orange-400"
                              : "border-gray-500"
                          } transition-colors`}
                        ></div>
                      </div>

                      {/* LED Indicators */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            controllerActive ? "bg-green-400" : "bg-gray-500"
                          } transition-colors`}
                        ></div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            controllerActive ? "bg-blue-400" : "bg-gray-500"
                          } transition-colors`}
                        ></div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            controllerActive ? "bg-red-400" : "bg-gray-500"
                          } transition-colors`}
                        ></div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            controllerActive ? "bg-yellow-400" : "bg-gray-500"
                          } transition-colors`}
                        ></div>
                      </div>
                    </div>

                    {/* Floating Controller Info */}
                    <div className="absolute -top-6 -left-6 bg-red-500/20 backdrop-blur border border-red-400/30 rounded-xl p-2 animate-float">
                      <div className="text-red-400 text-xs font-mono">
                        WIRELESS
                      </div>
                    </div>

                    <div
                      className="absolute -top-6 -right-6 bg-yellow-500/20 backdrop-blur border border-yellow-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <div className="text-yellow-400 text-xs font-mono">
                        HD RUMBLE
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-500/20 backdrop-blur border border-cyan-400/30 rounded-xl p-2 animate-float"
                      style={{ animationDelay: "3s" }}
                    >
                      <div className="text-cyan-400 text-xs font-mono">
                        BLUETOOTH 5.0
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-500/50 to-transparent"></div>
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
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
    </>
  );
};

export default GameDevelopment;
