import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  Users,
  Palette,
  Shield,
  Rocket,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Layers,
  Cloud,
  Monitor,
  Cpu,
  TestTube,
  Upload,
  Clock,
  Lightbulb,
  Search,
  Sparkles,
  MousePointer,
  ChevronDown,
} from "lucide-react";

const WebDevelopment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const cubeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const floatingElementsRef = useRef([]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Floating elements animation
  useEffect(() => {
    const animateFloatingElements = () => {
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = 0.5 + index * 0.2;
          const amplitude = 20 + index * 10;
          const time = Date.now() * 0.001;

          const x = Math.sin(time * speed) * amplitude;
          const y = Math.cos(time * speed * 0.7) * amplitude;

          el.style.transform = `translate(${x}px, ${y}px) rotate(${
            time * speed * 10
          }deg)`;
        }
      });
      requestAnimationFrame(animateFloatingElements);
    };

    animateFloatingElements();
  }, []);

  const services = [
    {
      title: "E-Commerce Platforms",
      icon: ShoppingCart,
      description:
        "Full-stack e-commerce solutions with payment integration, inventory management, and analytics.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Corporate Websites",
      icon: Globe,
      description:
        "Professional corporate websites with CMS, SEO optimization, and responsive design.",
      tech: ["Next.js", "WordPress", "GraphQL", "AWS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Applications",
      icon: Smartphone,
      description:
        "Cross-platform mobile apps with native performance and intuitive user experience.",
      tech: ["React Native", "Flutter", "Firebase", "Redux"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Web Applications",
      icon: Monitor,
      description:
        "Custom web applications with real-time features, dashboards, and API integrations.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Optimized performance with modern frameworks",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      desc: "Enterprise-grade security implementations",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      desc: "Built to grow with your business needs",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      desc: "Seamless deployment and cloud services",
    },
    {
      icon: Palette,
      title: "Custom Design",
      desc: "Unique designs tailored to your brand",
    },
    {
      icon: Users,
      title: "User-Centric",
      desc: "Exceptional user experience and accessibility",
    },
  ];

  const testimonials = [
    {
      name: "Amit Gusain",
      role: "CEO, TackleTools",
      avatar: "SC",
      rating: 5,
      text: "TackleTools transformed our vision into a stunning e-commerce platform. Sales increased 300% in the first quarter!",
      company: "TackleTools",
    },
    {
      name: "Pawan Singh",
      role: "CTO, InnovaCorp",
      avatar: "MR",
      rating: 5,
      text: "Their technical expertise and attention to detail is unmatched. The web application they built handles our complex workflows perfectly.",
      company: "InnovaCorp",
    },
    {
      name: "Emily Johnson",
      role: "Founder, CreativeStudio",
      avatar: "EJ",
      rating: 5,
      text: "Professional, innovative, and reliable. TackleTools delivered beyond our expectations with exceptional design and functionality.",
      company: "CreativeStudio",
    },
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Requirements analysis and strategic planning",
      duration: "1-2 weeks",
      color: "from-blue-500 to-cyan-500",
      features: ["User Research", "Tech Stack Selection", "Project Roadmap"],
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Creative concepts and interactive prototypes",
      duration: "2-3 weeks",
      color: "from-purple-500 to-pink-500",
      features: ["UI/UX Design", "Wireframes", "Prototyping"],
    },
    {
      icon: Code,
      title: "Development",
      description: "Expert coding with modern technologies",
      duration: "4-8 weeks",
      color: "from-green-500 to-emerald-500",
      features: ["Frontend", "Backend", "Integration"],
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Quality assurance and optimization",
      duration: "1-2 weeks",
      color: "from-orange-500 to-red-500",
      features: ["Bug Testing", "Performance", "Security"],
    },
    {
      icon: Upload,
      title: "Launch",
      description: "Deployment and ongoing support",
      duration: "Ongoing",
      color: "from-indigo-500 to-purple-500",
      features: ["Deployment", "Monitoring", "Support"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-advance active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D Cube Animation
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-purple-900/20 to-[#111] text-gray-300 overflow-hidden font-inter">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
        .translate-z-32 {
          transform: translateZ(128px);
        }
        .rotate-y-90 {
          transform: rotateY(90deg) translateZ(128px);
        }
        .rotate-y-180 {
          transform: rotateY(180deg) translateZ(128px);
        }
        .rotate-y-270 {
          transform: rotateY(270deg) translateZ(128px);
        }
        .rotate-x-90 {
          transform: rotateX(90deg) translateZ(128px);
        }
        .rotate-x-270 {
          transform: rotateX(-90deg) translateZ(128px);
        }
      `}</style>

      {/* 3D Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20"></div>

          {/* Dynamic grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
              linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              transform: `translate(${mousePosition.x * 0.05}px, ${
                mousePosition.y * 0.05
              }px)`,
            }}
          ></div>

          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (floatingElementsRef.current[index] = el)}
              className={`absolute w-6 h-6 rounded-lg opacity-20 ${
                index % 4 === 0
                  ? "bg-purple-400"
                  : index % 4 === 1
                  ? "bg-pink-400"
                  : index % 4 === 2
                  ? "bg-blue-400"
                  : "bg-green-400"
              }`}
              style={{
                left: `${10 + index * 12}%`,
                top: `${15 + index * 8}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div
          ref={heroRef}
          className="relative z-10 text-center max-w-6xl mx-auto px-6 py-20"
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-gray-900/60 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-gray-700 hover:bg-gray-800/60 transition-all duration-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
            <span className="text-sm font-medium text-gray-100">
              Next-Gen Web Development
            </span>
            <Rocket className="w-4 h-4 text-pink-400" />
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent">
                Craft Digital
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Masterpieces
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              We transform innovative ideas into{" "}
              <span className="text-purple-400 font-semibold">
                stunning digital experiences
              </span>{" "}
              that captivate users and accelerate business growth.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-row flex-wrap justify-center items-center gap-6 mb-16 transition-all duration-1000 delay-600 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-3 text-white">
                <MousePointer className="w-6 h-6" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button className="group border-2 border-gray-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:border-gray-500 text-gray-100">
              <span className="flex items-center justify-center space-x-3">
                <div className="relative">
                  <Play className="w-6 h-6" />
                  <div className="absolute inset-0 bg-gray-300/20 rounded-full animate-ping"></div>
                </div>
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer group">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-purple-400" />
            </div>
          </div>
        </div>

        {/* Interactive Cursor Effect */}
        <div
          className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
          style={{
            left: (mousePosition.x * window.innerWidth) / 100 - 8,
            top: (mousePosition.y * window.innerHeight) / 100 - 8,
            transform: `scale(${
              mousePosition.x > 25 && mousePosition.x < 75 ? 1.5 : 1
            })`,
          }}
        ></div>
      </section>

      {/* 3D Interactive Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Experience</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                3D
              </span>{" "}
              <span className="text-white">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create immersive digital experiences that push the boundaries
              of web technology
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Advanced 3D Graphics
                    </h3>
                    <p className="text-gray-300">
                      Stunning visual effects and animations that captivate your
                      audience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Interactive Elements
                    </h3>
                    <p className="text-gray-300">
                      Engaging user interactions that create memorable
                      experiences
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Optimized Performance
                    </h3>
                    <p className="text-gray-300">
                      Smooth animations and fast loading times across all
                      devices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 perspective-1000">
                <div
                  ref={cubeRef}
                  className="w-full h-full relative transform-gpu preserve-3d"
                >
                  {/* Cube faces */}
                  <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm transform translate-z-32"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-sm transform rotate-y-90 translate-z-32"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-sm transform rotate-y-180 translate-z-32"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 backdrop-blur-sm transform rotate-y-270 translate-z-32"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-sm transform rotate-x-90 translate-z-32"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 backdrop-blur-sm transform rotate-x-270 translate-z-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            id="services-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Focus
              </span>{" "}
              <span className="text-white">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating digital solutions that combine
              cutting-edge technology with exceptional design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  id={`service-${index}`}
                  data-animate
                  className={`group relative backdrop-blur bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isVisible[`service-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActiveService(index)}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#111]/80">
        <div className="max-w-7xl mx-auto px-6">
          <div
            id="features-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["features-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
                TackleTools
              </span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and
              meticulous attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  id={`feature-${index}`}
                  data-animate
                  className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                    isVisible[`feature-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*  Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-row md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 md:p-12 backdrop-blur border border-white/10">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: CheckCircle,
              },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Team Members", icon: Users },
              { number: "24/7", label: "Support", icon: Zap },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  id={`stat-${index}`}
                  data-animate
                  className={`group text-center flex-1 transition-all duration-1000 ${
                    isVisible[`stat-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-125 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#111]/80">
        <div className="max-w-7xl mx-auto px-6">
          <div
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["testimonials-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Client</span>{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Success
              </span>{" "}
              <span className="text-white">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the businesses we've helped transform their digital
              presence
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`group relative backdrop-blur bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-1 ${
                  isVisible[`testimonial-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="text-6xl font-bold text-purple-400">"</div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-purple-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-base leading-relaxed italic">
                  {testimonial.text}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-[#111] via-purple-900/10 to-[#111] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div
            id="process-header"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["process-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Streamlined Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">How We</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build
              </span>{" "}
              <span className="text-white">Success</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our proven 5-step methodology delivers exceptional results on time
              and within budget
            </p>
          </div>

          {/* Main Process Container */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="flex justify-between items-center">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative z-10 cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        index <= activeStep
                          ? `bg-gradient-to-r ${step.color} shadow-lg scale-110`
                          : "bg-white/10 border border-white/20"
                      }`}
                    >
                      {index <= activeStep ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <span className="text-gray-400 font-bold">
                          {index + 1}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Progress Line */}
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-1000 ease-out"
                  style={{
                    width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Step Details */}
              <div
                id="step-content"
                data-animate
                className={`transition-all duration-700 ${
                  isVisible["step-content"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${processSteps[activeStep].color} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(processSteps[activeStep].icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {processSteps[activeStep].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{processSteps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  {processSteps[activeStep].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Steps Overview */}
              <div
                id="steps-overview"
                data-animate
                className={`transition-all duration-700 ${
                  isVisible["steps-overview"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                        index === activeStep
                          ? "bg-white/10 border border-white/20 shadow-lg"
                          : "bg-white/[0.02] border border-white/5 hover:bg-white/5"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          index === activeStep
                            ? `bg-gradient-to-r ${step.color} shadow-lg`
                            : "bg-white/10"
                        }`}
                      >
                        {React.createElement(step.icon, {
                          className: `w-5 h-5 ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400"
                          }`,
                        })}
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold transition-colors ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-500 truncate">
                          {step.description}
                        </p>
                      </div>
                      {index === activeStep && (
                        <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
