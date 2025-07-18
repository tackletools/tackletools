import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { HelmetTags } from '../../utils/HelmetMetaTags'
import { Users, Building2, UserPlus, Briefcase, Star, Globe, Zap, Shield } from 'lucide-react';

const Collaboration = () => {
  const mountRef = useRef(null);
  const [activeTab, setActiveTab] = useState('b2b');

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometry1 = new THREE.OctahedronGeometry(0.5);
    const geometry2 = new THREE.TetrahedronGeometry(0.4);
    const geometry3 = new THREE.IcosahedronGeometry(0.3);

    const material1 = new THREE.MeshBasicMaterial({ 
      color: 0x8B5CF6, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const material2 = new THREE.MeshBasicMaterial({ 
      color: 0xF97316, 
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const material3 = new THREE.MeshBasicMaterial({ 
      color: 0xA855F7, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const shapes = [];
    for (let i = 0; i < 12; i++) {
      const geom = [geometry1, geometry2, geometry3][i % 3];
      const mat = [material1, material2, material3][i % 3];
      const mesh = new THREE.Mesh(geom, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.007 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const b2bFeatures = [
    { icon: Building2, title: 'Enterprise Solutions', desc: 'Scalable collaboration tools for large organizations' },
    { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security and compliance standards' },
    { icon: Globe, title: 'Global Reach', desc: 'Connect with partners worldwide seamlessly' },
    { icon: Zap, title: 'Fast Integration', desc: 'Quick setup with existing business systems' }
  ];

  const freelancerFeatures = [
    { icon: UserPlus, title: 'Join Network', desc: 'Connect with top-tier clients and projects' },
    { icon: Star, title: 'Skill Showcase', desc: 'Highlight your expertise and portfolio' },
    { icon: Briefcase, title: 'Project Management', desc: 'Streamlined workflow and payment systems' },
    { icon: Users, title: 'Community', desc: 'Access to freelancer community and resources' }
  ];

  return (
    <>
    {HelmetTags.Collaboration}
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
                Collaborate
              </h1>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-orange-500 rounded-full blur-sm opacity-40 animate-pulse delay-300"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full blur-sm opacity-50 animate-pulse delay-700"></div>
            </div>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Connect, create, and scale with our collaboration platform designed for businesses and freelancers
            </p>
          </div>

           {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800 w-full max-w-sm">
          <div className="flex">
            <button
              onClick={() => setActiveTab('b2b')}
              className={`flex-1 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                activeTab === 'b2b' 
                  ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="block sm:hidden">B2B</span>
              <span className="hidden sm:block">B2B Solutions</span>
            </button>
            <button
              onClick={() => setActiveTab('freelancer')}
              className={`flex-1 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                activeTab === 'freelancer' 
                  ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="block sm:hidden">Freelancer</span>
              <span className="hidden sm:block">Join as Freelancer</span>
            </button>
          </div>
        </div>
      </div>

          {/* Content Sections */}
          <div className="transition-all duration-500 ease-in-out">
            {activeTab === 'b2b' ? (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-purple-400">
                    Business Collaboration
                  </h2>
                  <p className="text-sm text-gray-400 max-w-lg mx-auto">
                    Streamline your business partnerships with our comprehensive B2B platform
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {b2bFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      <feature.icon className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                      <h3 className="text-sm font-semibold mb-1 text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    Start B2B Collaboration
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-400">
                    Freelancer Network
                  </h2>
                  <p className="text-sm text-gray-400 max-w-lg mx-auto">
                    Join thousands of talented freelancers and access premium opportunities
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {freelancerFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      <feature.icon className="w-8 h-8 text-orange-400 mb-2 mx-auto" />
                      <h3 className="text-sm font-semibold mb-1 text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                    Join Freelancer Network
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-400">500+</div>
              <div className="text-xs text-gray-400">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-orange-400">50k+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-400">98%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Collaboration;