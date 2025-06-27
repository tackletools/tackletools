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

    // Scene setup with enhanced settings
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x111111, 10, 50);
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
    renderer.setClearColor(0x111111, 0);
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
      // Custom wireframe geometries
      new THREE.IcosahedronGeometry(1.0, 0),
      new THREE.CylinderGeometry(0.3, 0.3, 1.5, 8),
    ];

    // Enhanced materials with different effects
    const createMaterials = () => [
      new THREE.MeshPhongMaterial({
        color: 0x9089fc,
        transparent: true,
        opacity: 0.9,
        shininess: 100,
        emissive: new THREE.Color(0x9089fc).multiplyScalar(0.1),
      }),
      new THREE.MeshPhongMaterial({
        color: 0xff80b5,
        transparent: true,
        opacity: 0.9,
        shininess: 100,
        emissive: new THREE.Color(0xff80b5).multiplyScalar(0.1),
      }),
      new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8,
        shininess: 150,
        emissive: new THREE.Color(0x00ffff).multiplyScalar(0.15),
      }),
      new THREE.MeshPhongMaterial({
        color: 0xffa500,
        transparent: true,
        opacity: 0.85,
        shininess: 120,
        emissive: new THREE.Color(0xffa500).multiplyScalar(0.1),
      }),
      // Wireframe materials
      new THREE.MeshBasicMaterial({
        color: 0x9089fc,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xff6b6b,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      }),
    ];

    const materials = createMaterials();
    const meshes = [];
    const particles = [];

    // Create main floating objects
    for (let i = 0; i < 25; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // More spread out positioning
      mesh.position.x = (Math.random() - 0.5) * 40;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 30;

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Enhanced animation data
      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        speedX: (Math.random() - 0.5) * 0.03,
        speedY: (Math.random() - 0.5) * 0.02,
        speedZ: (Math.random() - 0.5) * 0.025,
        rotSpeedX: (Math.random() - 0.5) * 0.08,
        rotSpeedY: (Math.random() - 0.5) * 0.06,
        rotSpeedZ: (Math.random() - 0.5) * 0.04,
        scale: 0.5 + Math.random() * 0.8,
        pulseSpeed: 0.5 + Math.random() * 2,
        mouseInfluence: 0.1 + Math.random() * 0.3,
      };

      mesh.scale.setScalar(mesh.userData.scale);
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.6, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x9089fc, 1.2);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xff80b5, 1.5, 30);
    pointLight1.position.set(-15, 10, -10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 1.2, 25);
    pointLight2.position.set(15, -10, 10);
    scene.add(pointLight2);

    // Animated lights
    const spotLight = new THREE.SpotLight(0xffa500, 2, 40, Math.PI / 6, 0.1, 1);
    spotLight.position.set(0, 20, 0);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    scene.add(spotLight.target);

    camera.position.set(0, 0, 20);

    let time = 0;

    // Enhanced animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Mouse interaction effects
      const mouseInfluenceX = mouseRef.current.x * 2;
      const mouseInfluenceY = mouseRef.current.y * 2;

      meshes.forEach((mesh, index) => {
        // Complex floating motion
        mesh.position.x +=
          mesh.userData.speedX + Math.sin(time + index * 0.5) * 0.01;
        mesh.position.y +=
          mesh.userData.speedY + Math.cos(time + index * 0.3) * 0.008;
        mesh.position.z +=
          mesh.userData.speedZ + Math.sin(time * 0.7 + index) * 0.006;

        // Mouse influence
        const distanceToMouse = Math.sqrt(
          Math.pow(mesh.position.x - mouseInfluenceX * 10, 2) +
            Math.pow(mesh.position.y - mouseInfluenceY * 10, 2)
        );

        if (distanceToMouse < 8) {
          const influence = (8 - distanceToMouse) / 8;
          mesh.position.x +=
            (mouseInfluenceX * 2 - mesh.position.x * 0.1) *
            influence *
            mesh.userData.mouseInfluence;
          mesh.position.y +=
            (mouseInfluenceY * 2 - mesh.position.y * 0.1) *
            influence *
            mesh.userData.mouseInfluence;
        }

        // Enhanced rotation
        mesh.rotation.x += mesh.userData.rotSpeedX + Math.sin(time) * 0.01;
        mesh.rotation.y +=
          mesh.userData.rotSpeedY + Math.cos(time * 0.8) * 0.008;
        mesh.rotation.z += mesh.userData.rotSpeedZ;

        // Pulsing scale effect
        const pulseScale =
          mesh.userData.scale + Math.sin(time * mesh.userData.pulseSpeed) * 0.1;
        mesh.scale.setScalar(pulseScale);

        // Dynamic opacity based on distance
        if (mesh.material.transparent) {
          const baseOpacity = mesh.material.opacity;
          mesh.material.opacity =
            baseOpacity + Math.sin(time * 2 + index) * 0.2;
        }

        // Boundary wrapping with smooth transition
        if (Math.abs(mesh.position.x) > 25) mesh.userData.speedX *= -0.8;
        if (Math.abs(mesh.position.y) > 20) mesh.userData.speedY *= -0.8;
        if (Math.abs(mesh.position.z) > 20) mesh.userData.speedZ *= -0.8;
      });

      // Animate particle system
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.02;
        positions[i] += Math.cos(time + positions[i + 1] * 0.01) * 0.01;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Animate lights
      pointLight1.position.x = Math.sin(time) * 15;
      pointLight1.position.z = Math.cos(time) * 15;
      pointLight2.position.x = Math.cos(time * 0.7) * 15;
      pointLight2.position.z = Math.sin(time * 0.7) * 15;

      spotLight.position.x = Math.sin(time * 0.5) * 10;
      spotLight.position.z = Math.cos(time * 0.5) * 10;

      // Camera subtle movement
      camera.position.x = mouseInfluenceX * 0.5;
      camera.position.y = mouseInfluenceY * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Handle resize
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

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5 z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-orange-900/5 z-10" />

      {/* Animated background patterns */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-pink-500/20 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading with enhanced animations */}
          <div
            className={`transition-all duration-1500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative pt-5">
              <h1 class="text-5xl md:text-7xl font-inter font-black tracking-tight mb-8 relative">
                <span class="block relative mb-2">
                  <span class="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 text-transparent bg-clip-text animate-pulse relative z-10 drop-shadow-2xl">
                    BUILDING A {" "}
                    <span class="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                      3D
                    </span>
                    <span class="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text">
                      {" "}
                      FUTURE
                    </span>
                  </span>
                  <span class="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 text-transparent bg-clip-text blur-2xl opacity-60 animate-pulse">
                    BUILDING A{" "}
                    <span class="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                      3D
                    </span>
                    <span class="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text">
                      {" "}
                      FUTURE
                    </span>
                  </span>
                </span>
                <span class="block text-gray-100 mt-6 mb-4 relative">
                  <span class="relative z-10 tracking-wider">FOR YOUR</span>
                  <span class="absolute inset-0 text-gray-100 blur-sm opacity-40 tracking-wider">
                    FOR YOUR
                  </span>
                </span>
                <span class="block relative">
                  <span class="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text relative z-10 animate-pulse drop-shadow-2xl">
                    DIGITAL SUCCESS
                  </span>
                  <span class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text blur-2xl opacity-70 animate-pulse">
                    DIGITAL SUCCESS
                  </span>
                </span>
              </h1>
              {/* Floating accent elements */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce" />
              <div
                className="absolute -top-4 -right-12 w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -bottom-6 left-1/4 w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Enhanced subtitle */}
          <div
            className={`transition-all duration-1500 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-inter font-light">
              <span className="bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text">
                Crafting Tomorrow’s Tech, Today — with TackleTools
              </span>
              <br />
              <span className="text-gray-400 text-xl md:text-2xl">
                At tackletools, we craft innovative solutions to bring your
                ideas to life with depth, detail, and direction. Let’s elevate
                your digital journey.
              </span>
            </p>
          </div>

          {/* Small Horizontal CTA Buttons */}
          <div
            className={`transition-all duration-1500 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-semibold text-white text-sm font-inter transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transform-gpu">
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Launch Experience
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-150 blur-2xl -z-20"></div>
              </button>

              <button className="group px-6 py-3 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full font-semibold text-sm font-inter transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/30 relative overflow-hidden">
                <span className="absolute inset-0 bg-[#111] m-0.5 rounded-full"></span>
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-cyan-400"
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
                  Explore Features
                </span>
              </button>
            </div>
          </div>

          {/* Smaller Feature Pills */}
          <div
            className={`transition-all duration-1500 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center justify-center flex-wrap gap-3 mt-12">
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
                  className="group px-4 py-2 backdrop-blur bg-white/[0.04] rounded-full text-gray-300 text-sm font-medium font-inter border border-white/20 hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base group-hover:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </span>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating UI Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer`}
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer`}
              style={{ animationDelay: `${i * 0.7}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gradient-to-r from-cyan-400 to-transparent opacity-30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gradient-to-l from-purple-400 to-transparent opacity-30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gradient-to-r from-pink-400 to-transparent opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gradient-to-l from-orange-400 to-transparent opacity-30"></div>
    </div>
  );
};

export default Hero;