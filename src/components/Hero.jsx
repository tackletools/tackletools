import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

const Hero = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouseRef.current = { x, y };
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with darker theme
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 50);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
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
    renderer.setClearColor(0x000000, 1); // Pure black background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create more diverse and attractive geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.DodecahedronGeometry(0.7),
      new THREE.TorusGeometry(0.6, 0.2, 16, 100),
      new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.9),
      new THREE.SphereGeometry(0.6, 32, 32),
      new THREE.IcosahedronGeometry(1.0, 0),
      new THREE.CylinderGeometry(0.3, 0.3, 1.5, 8),
    ];

    // Enhanced materials with darker theme colors
    const createMaterials = () => [
      new THREE.MeshPhongMaterial({
        color: 0x6366f1, // Indigo
        transparent: true,
        opacity: 0.8,
        shininess: 100,
        emissive: new THREE.Color(0x6366f1).multiplyScalar(0.2),
      }),
      new THREE.MeshPhongMaterial({
        color: 0xe879f9, // Fuchsia
        transparent: true,
        opacity: 0.8,
        shininess: 100,
        emissive: new THREE.Color(0xe879f9).multiplyScalar(0.2),
      }),
      new THREE.MeshPhongMaterial({
        color: 0x06b6d4, // Cyan
        transparent: true,
        opacity: 0.7,
        shininess: 150,
        emissive: new THREE.Color(0x06b6d4).multiplyScalar(0.25),
      }),
      new THREE.MeshPhongMaterial({
        color: 0xf59e0b, // Amber
        transparent: true,
        opacity: 0.75,
        shininess: 120,
        emissive: new THREE.Color(0xf59e0b).multiplyScalar(0.2),
      }),
      // Wireframe materials
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6, // Violet
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xec4899, // Pink
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
    ];

    const materials = createMaterials();
    const meshes = [];

    // Create main floating objects
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 35;
      mesh.position.y = (Math.random() - 0.5) * 25;
      mesh.position.z = (Math.random() - 0.5) * 25;

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.015,
        speedZ: (Math.random() - 0.5) * 0.02,
        rotSpeedX: (Math.random() - 0.5) * 0.06,
        rotSpeedY: (Math.random() - 0.5) * 0.05,
        rotSpeedZ: (Math.random() - 0.5) * 0.04,
        scale: 0.4 + Math.random() * 0.6,
        pulseSpeed: 0.5 + Math.random() * 1.5,
        mouseInfluence: 0.1 + Math.random() * 0.2,
      };

      mesh.scale.setScalar(mesh.userData.scale);
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.4 + 0.5, 0.7, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Dark theme lighting setup
    const ambientLight = new THREE.AmbientLight(0x222222, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x6366f1, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xe879f9, 1.2, 25);
    pointLight1.position.set(-15, 10, -10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 1, 20);
    pointLight2.position.set(15, -10, 10);
    scene.add(pointLight2);

    camera.position.set(0, 0, 18);

    let time = 0;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.008;

      const mouseInfluenceX = mouseRef.current.x * 2;
      const mouseInfluenceY = mouseRef.current.y * 2;

      meshes.forEach((mesh, index) => {
        mesh.position.x += mesh.userData.speedX + Math.sin(time + index * 0.5) * 0.008;
        mesh.position.y += mesh.userData.speedY + Math.cos(time + index * 0.3) * 0.006;
        mesh.position.z += mesh.userData.speedZ + Math.sin(time * 0.7 + index) * 0.005;

        const distanceToMouse = Math.sqrt(
          Math.pow(mesh.position.x - mouseInfluenceX * 8, 2) +
          Math.pow(mesh.position.y - mouseInfluenceY * 8, 2)
        );

        if (distanceToMouse < 6) {
          const influence = (6 - distanceToMouse) / 6;
          mesh.position.x += (mouseInfluenceX * 1.5 - mesh.position.x * 0.1) * influence * mesh.userData.mouseInfluence;
          mesh.position.y += (mouseInfluenceY * 1.5 - mesh.position.y * 0.1) * influence * mesh.userData.mouseInfluence;
        }

        mesh.rotation.x += mesh.userData.rotSpeedX + Math.sin(time) * 0.008;
        mesh.rotation.y += mesh.userData.rotSpeedY + Math.cos(time * 0.8) * 0.006;
        mesh.rotation.z += mesh.userData.rotSpeedZ;

        const pulseScale = mesh.userData.scale + Math.sin(time * mesh.userData.pulseSpeed) * 0.08;
        mesh.scale.setScalar(pulseScale);

        if (mesh.material.transparent) {
          const baseOpacity = 0.7;
          mesh.material.opacity = baseOpacity + Math.sin(time * 1.5 + index) * 0.15;
        }

        if (Math.abs(mesh.position.x) > 20) mesh.userData.speedX *= -0.8;
        if (Math.abs(mesh.position.y) > 15) mesh.userData.speedY *= -0.8;
        if (Math.abs(mesh.position.z) > 15) mesh.userData.speedZ *= -0.8;
      });

      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.015;
        positions[i] += Math.cos(time + positions[i + 1] * 0.01) * 0.008;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      pointLight1.position.x = Math.sin(time) * 12;
      pointLight1.position.z = Math.cos(time) * 12;
      pointLight2.position.x = Math.cos(time * 0.7) * 12;
      pointLight2.position.z = Math.sin(time * 0.7) * 12;

      camera.position.x = mouseInfluenceX * 0.3;
      camera.position.y = mouseInfluenceY * 0.2;
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

    setTimeout(() => setIsLoaded(true), 300);

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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-900/10 z-10" />

      {/* Subtle animated background patterns */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-indigo-500/30 to-transparent rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-radial from-cyan-500/30 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 bg-gradient-radial from-fuchsia-500/30 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    
      {/* Mouse follower effect - Hidden on small screens */}
      <div
        className="fixed pointer-events-none z-50 hidden lg:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isLoaded ? 1 : 0})`,
        }}
      >
        {/* Main cursor */}
        <div className="relative">
          <div className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 rounded-full animate-spin mix-blend-screen"></div>
          <div className="absolute w-4 h-4 top-1 left-1 bg-gradient-to-r from-white to-cyan-200 rounded-full animate-pulse"></div>
          <div className="absolute w-8 h-8 -top-1 -left-1 border border-cyan-400/50 rounded-full animate-ping"></div>
        </div>
        
        {/* Orbital rings */}
        <div className="absolute w-12 h-12 -top-3 -left-3 border border-indigo-400/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        <div className="absolute w-16 h-16 -top-5 -left-5 border border-fuchsia-400/20 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
        
        {/* Particle trails */}
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ top: '-20px', left: '10px', animationDelay: '0.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ top: '20px', left: '-15px', animationDelay: '0.4s' }}></div>
        <div className="absolute w-1 h-1 bg-fuchsia-400 rounded-full animate-bounce" style={{ top: '5px', left: '25px', animationDelay: '0.6s' }}></div>
      </div>

      {/* Content - Added top padding for navbar */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-black tracking-tight mb-6 sm:mb-8 relative">
                <span className="block relative mb-2">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 text-transparent bg-clip-text animate-pulse relative z-10 drop-shadow-2xl">
                    BUILDING A{" "}
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
                      3D
                    </span>
                    <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text">
                      {" "}FUTURE
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 text-transparent bg-clip-text blur-xl opacity-50 animate-pulse">
                    BUILDING A{" "}
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
                      3D
                    </span>
                    <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text">
                      {" "}FUTURE
                    </span>
                  </span>
                </span>
                <span className="block text-gray-100 mt-4 sm:mt-6 mb-3 sm:mb-4 relative">
                  <span className="relative z-10 tracking-wider">FOR YOUR</span>
                  <span className="absolute inset-0 text-gray-100 blur-sm opacity-40 tracking-wider">
                    FOR YOUR
                  </span>
                </span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text relative z-10 animate-pulse drop-shadow-2xl">
                    DIGITAL SUCCESS
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text blur-xl opacity-60 animate-pulse">
                    DIGITAL SUCCESS
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1500 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-inter font-light">
              <span className="bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text">
                Crafting Tomorrow's Tech, Today — with TackleTools
              </span>
              <br />
              <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                At tackletools, we craft innovative solutions to bring your ideas to life with depth, detail, and direction. Let's elevate your digital journey.
              </span>
            </p>
          </div>

          {/* CTA Buttons*/}
          <div
            className={`transition-all duration-1500 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button className="group relative px-4 py-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 rounded-lg font-medium text-white text-sm font-inter transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 transform-gpu">
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Launch Experience
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </button>

              <button className="group px-4 py-2 border border-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-lg font-medium text-sm font-inter transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 relative overflow-hidden">
                <span className="absolute inset-0 bg-black m-[1px] rounded-[7px]"></span>
                <span className="relative z-10 flex items-center justify-center gap-1.5 bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Explore Features
                </span>
              </button>
            </div>
          </div>

          {/* Feature Pills */}
          <div
            className={`transition-all duration-1500 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12 max-w-4xl mx-auto">
              {[
                { icon: "🎮", text: "Interactive 3D" },
                { icon: "⚡", text: "Real-time" },
                { icon: "🎨", text: "Immersive" },
                { icon: "🚀", text: "WebGL" },
                { icon: "🔮", text: "Future Ready" },
                { icon: "💫", text: "Mind Blowing" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur bg-white/[0.03] rounded-full text-gray-300 text-xs sm:text-sm font-medium font-inter border border-white/10 hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-sm sm:text-base group-hover:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </span>
                    <span className="whitespace-nowrap">{feature.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute top-1/2 left-4 sm:left-6 lg:left-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-4 sm:space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer`}
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-4 sm:right-6 lg:right-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-4 sm:space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-fuchsia-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer`}
              style={{ animationDelay: `${i * 0.7}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l-2 border-t-2 border-cyan-400/30 opacity-50"></div>
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r-2 border-t-2 border-indigo-400/30 opacity-50"></div>
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l-2 border-b-2 border-fuchsia-400/30 opacity-50"></div>
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r-2 border-b-2 border-orange-400/30 opacity-50"></div>
    </div>
  );
};

export default Hero;