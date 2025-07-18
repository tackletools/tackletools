import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

const Hero = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      title: "MODERN",
      subtitle: "INTERFACE",
      focusWord: "MODERN",
      description: "Experience the future of digital interaction through our advanced 3D environment designed for next-generation applications.",
      status: "SYSTEM ONLINE",
      stats: [
        { label: 'RESPONSE TIME', value: '0.08ms', color: 'text-blue-400' },
        { label: 'ACCURACY', value: '99.7%', color: 'text-purple-400' },
        { label: 'UPTIME', value: '99.9%', color: 'text-cyan-400' },
      ]
    },
    {
      title: "REAL-TIME",
      subtitle: "ANALYTICS",
      focusWord: "REAL-TIME",
      description: "Real-time data visualization and insights powered by advanced algorithms and machine learning capabilities.",
      status: "DATA STREAMING",
      stats: [
        { label: 'PROCESSED', value: '2.4M', color: 'text-orange-400' },
        { label: 'EFFICIENCY', value: '94.2%', color: 'text-pink-400' },
        { label: 'LATENCY', value: '12ms', color: 'text-yellow-400' },
      ]
    },
    {
      title: "ADVANCED",
      subtitle: "SECURITY",
      focusWord: "ADVANCED",
      description: "Enterprise-grade security measures with end-to-end encryption and advanced threat detection systems.",
      status: "SECURE CONNECTION",
      stats: [
        { label: 'THREATS BLOCKED', value: '1,247', color: 'text-red-400' },
        { label: 'ENCRYPTION', value: 'AES-256', color: 'text-indigo-400' },
        { label: 'SECURITY SCORE', value: '98.5%', color: 'text-emerald-400' },
      ]
    },
    {
      title: "SCALABLE",
      subtitle: "CLOUD",
      focusWord: "SCALABLE",
      description: "Scalable cloud architecture with global distribution and automatic failover capabilities.",
      status: "CLOUD ACTIVE",
      stats: [
        { label: 'NODES ACTIVE', value: '847', color: 'text-teal-400' },
        { label: 'BANDWIDTH', value: '10GB/s', color: 'text-violet-400' },
        { label: 'AVAILABILITY', value: '99.99%', color: 'text-lime-400' },
      ]
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // Stop autoplay when user manually changes slide
    // Resume autoplay after 8 seconds
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const handleMouseMove = useCallback((event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouseRef.current = { x, y };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 30, 60);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = false;
    mountRef.current.appendChild(renderer.domElement);

    // Create minimal floating particles
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.4,
    });

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );
      
      particle.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        },
        originalOpacity: 0.2 + Math.random() * 0.3,
      };
      
      scene.add(particle);
      particles.push(particle);
    }

    // Minimal lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x808080, 0.3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.set(0, 0, 15);

    let time = 0;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.005;

      const mouseInfluenceX = mouseRef.current.x * 2;
      const mouseInfluenceY = mouseRef.current.y * 2;

      particles.forEach((particle, index) => {
        // Gentle floating motion
        particle.position.x += particle.userData.velocity.x;
        particle.position.y += particle.userData.velocity.y;
        particle.position.z += particle.userData.velocity.z;

        // Bounce off boundaries
        if (Math.abs(particle.position.x) > 20) particle.userData.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 20) particle.userData.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 20) particle.userData.velocity.z *= -1;

        // Subtle mouse interaction
        const distance = Math.sqrt(
          Math.pow(particle.position.x - mouseInfluenceX, 2) +
          Math.pow(particle.position.y - mouseInfluenceY, 2)
        );
        
        const influence = Math.max(0, 1 - distance / 10);
        particle.material.opacity = particle.userData.originalOpacity + influence * 0.3;
      });

      // Very subtle camera movement
      camera.position.x = mouseInfluenceX * 0.02;
      camera.position.y = mouseInfluenceY * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [handleMouseMove]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 z-10" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px'
           }} />

      {/* Content Layout */}
      <div className="relative z-20 h-full flex flex-col lg:flex-row">
        
        {/* Left Side - Navigation */}
        <div className="lg:w-20 w-full h-16 lg:h-full flex lg:flex-col flex-row items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-800 order-2 lg:order-1">
          <div className="flex lg:flex-col flex-row lg:space-y-6 space-x-6 lg:space-x-0">
            {['01', '02', '03', '04'].map((num, index) => (
              <button
                key={num}
                onClick={() => handleSlideChange(index)}
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-xs font-mono ${
                  index === currentSlide
                    ? 'border-white bg-white text-black' 
                    : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          
          {/* Autoplay indicator */}
          <div className="hidden lg:block absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-white animate-pulse' : 'bg-gray-600'}`}></div>
          </div>
        </div>

        {/* Center - Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0 order-1 lg:order-2">
          <div className="max-w-2xl w-full text-center lg:text-left">
            
            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-mono mb-6 lg:mb-8 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">{currentSlideData.status}</span>
            </div>

            {/* Main Title */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                <span className="block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text font-extrabold animate-pulse">
                    {currentSlideData.focusWord}
                  </span>
                  {currentSlideData.title !== currentSlideData.focusWord && (
                    <span className="ml-2 text-gray-300">
                      {currentSlideData.title.replace(currentSlideData.focusWord, '').trim()}
                    </span>
                  )}
                </span>
                <span className="block bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                  {currentSlideData.subtitle}
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 lg:mb-8 leading-relaxed font-light px-4 sm:px-0">
                {currentSlideData.description}
              </p>
            </div>

            {/* Action Buttons*/}
            <div
              className={`flex flex-col sm:flex-row lg:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button className="group px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25">
                <span className="flex items-center justify-center gap-2">
                  INITIALIZE
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105">
                EXPLORE
              </button>
            </div>

          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col justify-center order-3">
          <div className="space-y-6 lg:space-y-8">
            
            {/* Stats */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left">
                    <span className="text-gray-500 text-xs sm:text-sm font-mono mb-1 lg:mb-0">{stat.label}</span>
                    <span className={`text-lg lg:text-xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Status */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-mono">CONNECTED</span>
                </div>
                <p className="text-gray-400 text-sm">
                  All systems operational. Ready for deployment.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-black/80 backdrop-blur-sm border-t border-gray-800 flex items-center justify-between px-4 sm:px-6 z-30">
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-gray-400">
          <span>tackletools</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">TackleTools Neural Interface</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-gray-400">
          <span className="hidden sm:inline">UTC</span>
          <span>{new Date().toLocaleTimeString()}</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;