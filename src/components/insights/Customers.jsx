import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { HelmetTags } from '../../utils/HelmetMetaTags';

const Customers = () => {
  const mountRef = useRef(null);
  const [activeStory, setActiveStory] = useState(0);

  const customerStories = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "TechStart Inc",
      role: "CEO",
      story: "Our productivity increased by 300% after implementing this solution. The team collaboration features transformed how we work together.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      metrics: { revenue: "250%", efficiency: "300%", satisfaction: "95%" }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      company: "Global Solutions",
      role: "CTO",
      story: "The scalability and performance exceeded our expectations. We handled 10x more traffic during our product launch without any issues.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      metrics: { performance: "10x", uptime: "99.9%", cost: "-40%" }
    },
    {
      id: 3,
      name: "Emily Watson",
      company: "Creative Agency",
      role: "Creative Director",
      story: "This platform revolutionized our creative workflow. Client feedback cycles are now 5x faster, and our team loves the intuitive interface.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metrics: { speed: "5x", satisfaction: "98%", projects: "+150%" }
    },
    {
      id: 4,
      name: "David Kim",
      company: "FinTech Pro",
      role: "Head of Operations",
      story: "Security and compliance were our top concerns. This solution delivered enterprise-grade security while maintaining ease of use.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      metrics: { security: "100%", compliance: "SOC2", incidents: "0" }
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "EcoTech Solutions",
      role: "Founder",
      story: "As a startup, we needed something that could grow with us. This platform scaled seamlessly from 5 to 500 users without missing a beat.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      metrics: { growth: "10000%", retention: "94%", support: "24/7" }
    },
    {
      id: 6,
      name: "James Miller",
      company: "Manufacturing Plus",
      role: "Operations Manager",
      story: "Our supply chain visibility improved dramatically. Real-time tracking and analytics helped us reduce costs by 30% in the first quarter.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      metrics: { costs: "-30%", visibility: "100%", efficiency: "45%" }
    }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 16, 16),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.OctahedronGeometry(0.8)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x555555, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x777777, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true })
    ];

    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);
      
      shape.position.x = (Math.random() - 0.5) * 50;
      shape.position.y = (Math.random() - 0.5) * 30;
      shape.position.z = (Math.random() - 0.5) * 30;
      
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      scene.add(shape);
      shapes.push(shape);
    }

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
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

  return (
    <>
    {HelmetTags.Customers}
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      
      {/* Main Content */}
      <div className="relative z-10 px-4 pt-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            Customer Stories
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Real experiences from real customers who transformed their business with our solutions
          </p>
        </div>

        {/* Featured Story */}
        <div className="max-w-6xl mx-auto mb-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={customerStories[activeStory].image} 
                  alt={customerStories[activeStory].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-lg md:text-xl text-gray-100 mb-4 italic">
                  "{customerStories[activeStory].story}"
                </blockquote>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-white">{customerStories[activeStory].name}</p>
                  <p className="text-xs text-gray-400">{customerStories[activeStory].role} at {customerStories[activeStory].company}</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {Object.entries(customerStories[activeStory].metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-green-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {customerStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all ${
                  activeStory === index 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="hidden sm:inline">{story.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent font-bold mb-6 text-center">All Customer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {customerStories.map((story) => (
              <div key={story.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:bg-gray-900/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{story.name}</h3>
                    <p className="text-xs text-gray-400">{story.role}</p>
                    <p className="text-xs text-gray-500">{story.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">{story.story}</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(story.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-gray-800 px-2 py-1 rounded text-xs">
                      <span className="text-green-400 font-semibold">{value}</span>
                      <span className="text-gray-400 ml-1">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">500+</div>
              <div className="text-xs text-gray-400">Happy Customers</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">250%</div>
              <div className="text-xs text-gray-400">Avg ROI</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Customers;