import React, { useState, useEffect, useRef } from 'react';
import { Star, Users, Award, TrendingUp, MessageCircle, Heart, Eye, Calendar, CheckCircle, ArrowRight, Code, Shield, Smartphone, Globe, Camera, ShoppingCart, BarChart3, Gamepad2, BookOpen, ThumbsUp, Share2, Clock, Tag, Filter, Search, Zap, Target, Rocket } from 'lucide-react';
import * as THREE from 'three';
import { HelmetTags } from '../../utils/HelmetMetaTags';

const Community = () => {
  const mountRef = useRef(null);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    experience: 0
  });
  const [activeTab, setActiveTab] = useState('community');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Three.js background animation
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    
    for (let i = 0; i < 200; i++) {
      vertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
      
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5);
      colors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({ 
      size: 3, 
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    camera.position.z = 1000;
    
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
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
    };
  }, []);

  // Animate stats on load
  useEffect(() => {
    const animateStats = () => {
      const targets = { clients: 500, projects: 1200, satisfaction: 98, experience: 8 };
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setStats({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          experience: Math.floor(targets.experience * progress)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };
    
    animateStats();
  }, []);

  const communityStats = [
    { label: "Happy Clients", value: stats.clients, suffix: "+", icon: Users, color: "text-blue-400" },
    { label: "Projects", value: stats.projects, suffix: "+", icon: Rocket, color: "text-purple-400" },
    { label: "Success Rate", value: stats.satisfaction, suffix: "%", icon: Target, color: "text-green-400" },
    { label: "Years", value: stats.experience, suffix: "+", icon: Award, color: "text-orange-400" }
  ];

  const keyHighlights = [
    { icon: Zap, title: "Lightning Fast", desc: "Average 2-day delivery", color: "text-yellow-400" },
    { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security", color: "text-blue-400" },
    { icon: Award, title: "Industry Leader", desc: "Top-rated service provider", color: "text-purple-400" },
    { icon: Users, title: "Expert Team", desc: "50+ skilled professionals", color: "text-green-400" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI-Powered Solutions",
      excerpt: "Discover how artificial intelligence is revolutionizing web development workflows and creating smarter applications...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Web Development", "Future Tech"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      likes: 142,
      views: 2840,
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn best practices for creating high-performance mobile applications that can handle millions of users...",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Mobile Development",
      tags: ["React Native", "Mobile", "Scalability"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      likes: 89,
      views: 1560,
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Trends Every Developer Should Know",
      excerpt: "Stay ahead of security threats with these essential cybersecurity practices for modern development teams...",
      author: "Alex Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      tags: ["Cybersecurity", "Best Practices", "Development"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      likes: 203,
      views: 3200,
      featured: true
    },
    {
      id: 4,
      title: "Optimizing Database Performance for High-Traffic Apps",
      excerpt: "Database optimization techniques that can improve your application's performance by up to 300%...",
      author: "Emma Wilson",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Database",
      tags: ["Database", "Performance", "Optimization"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
      likes: 156,
      views: 2100,
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Serverless Architecture",
      excerpt: "Exploring how serverless computing is changing the way we build and deploy applications...",
      author: "David Park",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cloud Computing",
      tags: ["Serverless", "Cloud", "Architecture"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      likes: 98,
      views: 1890,
      featured: false
    },
    {
      id: 6,
      title: "UI/UX Design Principles for Better User Engagement",
      excerpt: "Design strategies that can increase user engagement and conversion rates in your applications...",
      author: "Lisa Thompson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Design",
      tags: ["UI/UX", "Design", "User Experience"],
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
      likes: 234,
      views: 4100,
      featured: true
    }
  ];

  const categories = ['all', 'Technology', 'Mobile Development', 'Security', 'Database', 'Cloud Computing', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
    {HelmetTags.Community}
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      
      {/* Hero Section */}
      <section className="relative pt-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community & <span className="text-white">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join our thriving community and stay updated with the latest tech insights and industry trends
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 border border-gray-800">
              <button
                onClick={() => setActiveTab('community')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'community' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Community
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'blog' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-5 h-5 inline mr-2" />
                Blog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Compact Design */}
      {activeTab === 'community' && (
        <div className="px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {communityStats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <div className={`text-xl font-bold ${stat.color}`}>
                      {stat.value}{stat.suffix}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-center mb-6">
                Why Choose <span className="text-blue-400">TackleTools</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
                    <highlight.icon className={`w-6 h-6 ${highlight.color} flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold text-sm">{highlight.title}</h3>
                      <p className="text-xs text-gray-400">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack - Compact */}
            <div className="mt-8 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-center mb-4">
                <span className="text-cyan-400">Technology</span> Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'AI/ML', 'Flutter', 'Next.js'].map((tech, index) => (
                  <span key={index} className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-700 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-sm text-gray-200 mb-4">Join our community and let's build something amazing together</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all">
                    Get Started
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Blog Section */}
      {activeTab === 'blog' && (
        <>
          {/* Blog Header with Search and Filters */}
          <section className="px-4 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Featured <span className="text-purple-400">Articles</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden hover:border-purple-500 transition-all hover:transform hover:scale-105">
                    <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-sm text-purple-400">{post.category}</span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                        </div>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Blog Posts */}
          <section className="px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Latest <span className="text-cyan-400">Insights</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden hover:border-cyan-500 transition-all hover:transform hover:scale-105">
                    <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 relative overflow-hidden">
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-sm text-cyan-400">{post.category}</span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
    </>
  );
};

export default Community;