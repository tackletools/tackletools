import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Search, Globe, Smartphone, Gamepad2, ShoppingCart, Camera, Shield, TrendingUp, Server, MessageCircle, Phone, Mail } from 'lucide-react';
import * as THREE from 'three';
import { HelmetTags } from '../../utils/HelmetMetaTags'

const HelpCenter = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const mountRef = useRef(null);

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
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      
      const color = Math.random() > 0.5 ? new THREE.Color(0xFF6B35) : new THREE.Color(0x8B5CF6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
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

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-orange-400',
      description: 'Custom websites and web applications',
      faqs: [
        {
          q: 'What technologies do you use for web development?',
          a: 'We use modern technologies including React, Next.js, Node.js, Python, PHP, and various databases like MongoDB and PostgreSQL.'
        },
        {
          q: 'How long does it take to develop a website?',
          a: 'Timeline depends on complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks.'
        },
        {
          q: 'Do you provide website maintenance?',
          a: 'Yes, we offer ongoing maintenance packages including updates, security patches, and performance optimization.'
        }
      ]
    },
    {
      id: 'app-development',
      title: 'App Development',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'text-purple-400',
      description: 'Native and cross-platform mobile applications',
      faqs: [
        {
          q: 'Do you develop for both iOS and Android?',
          a: 'Yes, we develop native apps for both platforms as well as cross-platform solutions using React Native and Flutter.'
        },
        {
          q: 'What is the app development process?',
          a: 'Our process includes planning, UI/UX design, development, testing, deployment, and post-launch support.'
        },
        {
          q: 'Can you help with app store submission?',
          a: 'Absolutely! We handle the entire app store submission process for both Google Play Store and Apple App Store.'
        }
      ]
    },
    {
      id: 'game-development',
      title: 'Game Development',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'text-orange-400',
      description: '2D/3D games for multiple platforms',
      faqs: [
        {
          q: 'What game engines do you use?',
          a: 'We work with Unity, Unreal Engine, Godot, and custom engines depending on project requirements.'
        },
        {
          q: 'Can you develop games for consoles?',
          a: 'Yes, we develop games for PC, mobile, and major consoles including PlayStation, Xbox, and Nintendo Switch.'
        },
        {
          q: 'Do you provide game art and sound design?',
          a: 'Yes, we have a complete team including artists, animators, and sound designers for full game production.'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: 'eCommerce Solutions',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'text-purple-400',
      description: 'Online stores and marketplace platforms',
      faqs: [
        {
          q: 'Which eCommerce platforms do you work with?',
          a: 'We work with Shopify, WooCommerce, Magento, and also create custom eCommerce solutions.'
        },
        {
          q: 'Do you integrate payment gateways?',
          a: 'Yes, we integrate all major payment gateways including PayPal, Stripe, Square, and regional payment methods.'
        },
        {
          q: 'Can you migrate my existing store?',
          a: 'Absolutely! We provide seamless migration services while preserving your data and SEO rankings.'
        }
      ]
    },
    {
      id: 'multimedia',
      title: 'Multimedia Services',
      icon: <Camera className="w-5 h-5" />,
      color: 'text-orange-400',
      description: 'Video production, animation, and design',
      faqs: [
        {
          q: 'What multimedia services do you offer?',
          a: 'We provide video production, 2D/3D animation, motion graphics, audio production, and interactive media.'
        },
        {
          q: 'Do you create promotional videos?',
          a: 'Yes, we create promotional videos, explainer videos, product demos, and social media content.'
        },
        {
          q: 'Can you help with branding and logo design?',
          a: 'Absolutely! We offer complete branding packages including logo design, brand guidelines, and marketing materials.'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-purple-400',
      description: 'Security audits and protection services',
      faqs: [
        {
          q: 'What cybersecurity services do you provide?',
          a: 'We offer security audits, penetration testing, vulnerability assessments, and ongoing security monitoring.'
        },
        {
          q: 'How often should I get a security audit?',
          a: 'We recommend quarterly security audits for businesses, with critical systems checked monthly.'
        },
        {
          q: 'Do you provide incident response?',
          a: 'Yes, we offer 24/7 incident response services and help with breach recovery and prevention.'
        }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-orange-400',
      description: 'SEO, social media, and online advertising',
      faqs: [
        {
          q: 'What digital marketing services do you offer?',
          a: 'We provide SEO, PPC advertising, social media marketing, content marketing, and email marketing campaigns.'
        },
        {
          q: 'How do you measure marketing success?',
          a: 'We use comprehensive analytics including traffic, conversions, ROI, and custom KPIs relevant to your business goals.'
        },
        {
          q: 'Can you manage our social media accounts?',
          a: 'Yes, we offer complete social media management including content creation, posting, and community engagement.'
        }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: <Server className="w-5 h-5" />,
      color: 'text-purple-400',
      description: 'Cloud migration and infrastructure management',
      faqs: [
        {
          q: 'Which cloud platforms do you support?',
          a: 'We work with AWS, Google Cloud, Microsoft Azure, and other major cloud providers.'
        },
        {
          q: 'Can you help migrate to the cloud?',
          a: 'Yes, we provide complete cloud migration services with minimal downtime and data integrity assurance.'
        },
        {
          q: 'Do you offer cloud monitoring?',
          a: 'Absolutely! We provide 24/7 cloud monitoring, automated scaling, and performance optimization.'
        }
      ]
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    {HelmetTags.Help}
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Help </span>
              <span className="text-orange-400">Center</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Find answers to your questions about our IT services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4 md:gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${service.color} p-2 bg-gray-800 rounded-lg`}>
                        {service.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                    {activeSection === service.id ? 
                      <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    }
                  </button>
                  
                  {activeSection === service.id && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {service.faqs.map((faq, index) => (
                          <div key={index} className="border-l-2 border-orange-400/30 pl-4">
                            <h4 className="font-medium text-orange-400 mb-2 text-sm">{faq.q}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-orange-400/10 to-purple-400/10 border border-orange-400/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="text-white">Need More </span>
                <span className="text-orange-400">Help?</span>
              </h3>
              
              <div className="flex flex-wrap justify-center items-center gap-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Live Chat</h4>
                  <p className="text-gray-400 text-sm">with our support team</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-gray-400 text-sm">support@tackletools.tech</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Phone Support</h4>
                  <p className="text-gray-400 text-sm">+91 728 909 5248</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default HelpCenter;