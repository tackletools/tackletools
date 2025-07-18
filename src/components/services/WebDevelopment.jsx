import React, { useRef, useEffect, useState } from "react";
import { HelmetTags } from "../../utils/HelmetMetaTags.jsx";

const WebDevelopment = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeLines, setCodeLines] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const heroRef = useRef(null);

  const services = [
    {
      icon: "⚛️",
      title: "React Development",
      description:
        "Modern, component-based applications with optimal performance",
      tech: ["React", "Next.js", "TypeScript"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that convert visitors to customers",
      tech: ["Figma", "Tailwind", "Framer Motion"],
    },
    {
      icon: "🚀",
      title: "Full-Stack Solutions",
      description: "End-to-end development from database to deployment",
      tech: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Seamless experience across all devices and screen sizes",
      tech: ["PWA", "Mobile-First", "Touch UI"],
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full-Stack",
      image: "🛍️",
      tech: ["React", "Node.js", "Stripe"],
      metrics: "2.5x Revenue Increase",
    },
    {
      title: "SaaS Dashboard",
      category: "Frontend",
      image: "📊",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      metrics: "98% User Satisfaction",
    },
    {
      title: "Mobile App",
      category: "React Native",
      image: "📱",
      tech: ["React Native", "Firebase", "Redux"],
      metrics: "50K+ Downloads",
    },
  ];

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

    // Animate code lines counter
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 5) + 1;
      setCodeLines(count);
      if (count >= 247) {
        setCodeLines(247);
        clearInterval(interval);
      }
    }, 100);

    // Auto-rotate services
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(serviceInterval);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <>
      {HelmetTags.WebDevelopment}

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen bg-black overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Dark Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse"
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

          {/* Floating Web Dev Service Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-20 text-blue-400/40 font-mono text-xs animate-float">
              ⚛️ React Development
            </div>
            <div
              className="absolute top-40 right-32 text-green-400/40 font-mono text-xs animate-float"
              style={{ animationDelay: "1s" }}
            >
              🚀 API Integration
            </div>
            <div
              className="absolute bottom-32 left-16 text-purple-400/40 font-mono text-xs animate-float"
              style={{ animationDelay: "2s" }}
            >
              📱 Responsive Design
            </div>
            <div
              className="absolute bottom-20 right-20 text-cyan-400/40 font-mono text-xs animate-float"
              style={{ animationDelay: "3s" }}
            >
              ⚡ Performance Optimization
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 min-h-screen flex flex-col pt-12 md:pt-20">
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 mb-6 mt-4">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Taking new projects</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="block">Build Your</span>
                      <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 text-transparent bg-clip-text animate-gradient">
                        Digital
                      </span>
                      <span className="block text-gray-300">Presence</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                      Tackle every stage of web development with the right
                      tools—from concept to deployment. We craft modern,
                      responsive websites that drive results and deliver
                      exceptional user experiences.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                      <div className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                          150+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Projects Delivered
                        </div>
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                          99%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Client Satisfaction
                        </div>
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                          48hr
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Quick Turnaround
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
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
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4L5 15l5-5a8.003 8.003 0 017-7c4.418 0 8 3.582 8 8z"
                          />
                        </svg>
                        Free Quote
                      </button>
                    </div>
                  </div>

                  {/* Right Content - Code Editor Mockup */}
                  <div
                    className={`transition-all duration-1000 delay-300 ease-out ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Code Editor Container */}
                    <div className="relative">
                      {/* Browser Window */}
                      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Browser Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-gray-700/50">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>tackletools.tech</span>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Live</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
                              <div className="w-1 h-1 bg-gray-400"></div>
                            </div>
                            <div className="w-4 h-4 border border-gray-600 rounded"></div>
                            <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center">
                              <svg
                                className="w-2 h-2 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <path d="M0 0v8l8-4z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Code Editor Tabs */}
                        <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/60 border-b border-gray-700/30">
                          <div className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 rounded-t text-xs text-white">
                            <span className="text-blue-400">⚛</span>
                            <span>App.jsx</span>
                            <span className="text-gray-500 hover:text-white cursor-pointer">
                              ×
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 text-xs text-gray-400 hover:text-white cursor-pointer">
                            <span className="text-orange-400">{}</span>
                            <span>styles.css</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 text-xs text-gray-400 hover:text-white cursor-pointer">
                            <span className="text-green-400">📄</span>
                            <span>index.html</span>
                          </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-4 font-mono text-sm leading-relaxed">
                          {/* Line numbers and code */}
                          <div className="flex">
                            <div className="text-gray-600 text-right pr-4 select-none w-8">
                              {Array.from({ length: 12 }, (_, i) => (
                                <div key={i} className="leading-6">
                                  {i + 1}
                                </div>
                              ))}
                            </div>
                            <div className="flex-1">
                              <div className="leading-6 text-purple-400">
                                import{" "}
                                <span className="text-cyan-400">React</span>{" "}
                                from{" "}
                                <span className="text-green-400">'react'</span>;
                              </div>
                              <div className="leading-6 text-purple-400">
                                import{" "}
                                <span className="text-cyan-400">
                                  {useState}
                                </span>{" "}
                                from{" "}
                                <span className="text-green-400">'react'</span>;
                              </div>
                              <div className="leading-6"></div>
                              <div className="leading-6 text-purple-400">
                                const{" "}
                                <span className="text-yellow-400">WebApp</span>{" "}
                                = <span className="text-cyan-400">()</span>{" "}
                                <span className="text-purple-400">=></span>{" "}
                                {`{`}
                              </div>
                              <div className="leading-6 pl-4 text-purple-400">
                                const <span className="text-white">[</span>
                                <span className="text-cyan-400">isLoading</span>
                                <span className="text-white">, </span>
                                <span className="text-cyan-400">
                                  setLoading
                                </span>
                                <span className="text-white">]</span> ={" "}
                                <span className="text-yellow-400">
                                  useState
                                </span>
                                <span className="text-white">(</span>
                                <span className="text-orange-400">false</span>
                                <span className="text-white">);</span>
                              </div>
                              <div className="leading-6"></div>
                              <div className="leading-6 pl-4 text-purple-400">
                                return <span className="text-white">(</span>
                              </div>
                              <div className="leading-6 pl-8 text-cyan-400">
                                &lt;<span className="text-red-400">div</span>{" "}
                                <span className="text-yellow-400">
                                  className
                                </span>
                                =
                                <span className="text-green-400">
                                  "app-container"
                                </span>
                                &gt;
                              </div>
                              <div className="leading-6 pl-12 text-cyan-400">
                                &lt;<span className="text-red-400">h1</span>&gt;
                                <span className="text-white">
                                  Welcome to TackleTools
                                </span>
                                &lt;/<span className="text-red-400">h1</span>
                                &gt;
                              </div>
                              <div className="leading-6 pl-12 text-cyan-400">
                                &lt;<span className="text-red-400">button</span>{" "}
                                <span className="text-yellow-400">onClick</span>
                                =
                                <span className="text-white">{`{handleClick}`}</span>
                                &gt;
                              </div>
                              <div className="leading-6 pl-16 text-white">
                                Get Started
                              </div>
                              <div className="leading-6 pl-12 text-cyan-400">
                                &lt;/
                                <span className="text-red-400">button</span>&gt;
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Status Bar */}
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900/60 border-t border-gray-700/30 text-xs">
                          <div className="flex items-center gap-4 text-gray-400">
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              No errors
                            </span>
                            <span>{codeLines} lines</span>
                            <span>React 18.2.0</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-400">
                            <span>UTF-8</span>
                            <span>JavaScript</span>
                            <span>⚡ Fast Refresh</span>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-xl p-3 animate-bounce">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs font-medium">
                            Build Success
                          </span>
                        </div>
                      </div>

                      <div
                        className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-xl p-3 animate-bounce"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                          <span className="text-blue-400 text-xs font-medium">
                            Responsive Design
                          </span>
                        </div>
                      </div>

                      <div
                        className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur border border-purple-500/30 rounded-xl p-3 animate-bounce"
                        style={{ animationDelay: "2s" }}
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-purple-400 text-xs font-medium">
                            Clean Code
                          </span>
                        </div>
                      </div>

                      <div
                        className="absolute top-8 -left-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur border border-orange-500/30 rounded-xl p-3 animate-bounce"
                        style={{ animationDelay: "3s" }}
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-orange-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-orange-400 text-xs font-medium">
                            Optimized
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          data-section
          className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${
                isVisible("services")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Services
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Complete web development solutions tailored to your business
                needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-300 ${
                    isVisible("services")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Simple Card */}
                  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 h-full hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                          index === 0
                            ? "bg-blue-500/10 text-blue-400"
                            : index === 1
                            ? "bg-purple-500/10 text-purple-400"
                            : index === 2
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-orange-500/10 text-orange-400"
                        }`}
                      >
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${
                              index === 0
                                ? "bg-blue-500/5 text-blue-300 border-blue-500/20 group-hover:bg-blue-500/10"
                                : index === 1
                                ? "bg-purple-500/5 text-purple-300 border-purple-500/20 group-hover:bg-purple-500/10"
                                : index === 2
                                ? "bg-emerald-500/5 text-emerald-300 border-emerald-500/20 group-hover:bg-emerald-500/10"
                                : "bg-orange-500/5 text-orange-300 border-orange-500/20 group-hover:bg-orange-500/10"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Subtle Bottom Border Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 ${
                        index === 0
                          ? "bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-blue-500/80 group-hover:to-blue-500/20"
                          : index === 1
                          ? "bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/80 group-hover:to-purple-500/20"
                          : index === 2
                          ? "bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-emerald-500/80 group-hover:to-emerald-500/20"
                          : "bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-orange-500/80 group-hover:to-orange-500/20"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Websites Section */}
        <section
          id="website-types"
          data-section
          className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible("website-types")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Types of{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  Websites
                </span>{" "}
                We Create
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                From simple landing pages to complex web applications, we build
                websites that drive results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Business Websites */}
              <div
                className={`group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🏢
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Business Websites
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Professional corporate sites that establish credibility and
                  showcase your services
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                    Corporate
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                    Professional
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                    Service-based
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Starting from $1,999
                </div>
              </div>

              {/* E-commerce Stores */}
              <div
                className={`group relative bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🛒
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  E-commerce Stores
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Feature-rich online stores with secure payment processing and
                  inventory management
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs">
                    Shopping Cart
                  </span>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs">
                    Payments
                  </span>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs">
                    Inventory
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Starting from $3,999
                </div>
              </div>

              {/* Landing Pages */}
              <div
                className={`group relative bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Landing Pages
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  High-converting single-page sites designed to capture leads
                  and drive sales
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">
                    Conversion
                  </span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">
                    Lead Gen
                  </span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">
                    A/B Testing
                  </span>
                </div>
                <div className="text-xs text-gray-500">Starting from $899</div>
              </div>

              {/* Portfolio Websites */}
              <div
                className={`group relative bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Portfolio Websites
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Stunning showcases for creatives, artists, and professionals
                  to display their work
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs">
                    Gallery
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs">
                    Showcase
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs">
                    Creative
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Starting from $1,499
                </div>
              </div>

              {/* Web Applications */}
              <div
                className={`group relative bg-gradient-to-br from-pink-900/20 to-rose-900/20 backdrop-blur border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  ⚙️
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Web Applications
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Complex, interactive applications with user authentication and
                  real-time features
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded text-xs">
                    SaaS
                  </span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded text-xs">
                    Database
                  </span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded text-xs">
                    Real-time
                  </span>
                </div>
                <div className="text-xs text-gray-500">Custom Pricing</div>
              </div>

              {/* Blog & Content Sites */}
              <div
                className={`group relative bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible("website-types")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📝
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Blog & Content Sites
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Content-focused websites with powerful CMS and SEO
                  optimization for maximum reach
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">
                    CMS
                  </span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">
                    SEO
                  </span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">
                    Publishing
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Starting from $1,299
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          data-section
          className="py-12 sm:py-16 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible("portfolio")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Recent{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                  Projects
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Showcasing our latest work and the results we've achieved for
                our clients
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur border border-gray-600/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 ${
                    isVisible("portfolio")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="text-3xl sm:text-4xl mb-4">
                      {project.image}
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-3 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium mb-3">
                      {project.metrics}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          data-section
          className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible("pricing")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Simple{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
                  Pricing
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Choose the perfect plan for your project needs. No hidden fees,
                no surprises.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Starter Plan */}
              <div
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur border border-gray-600/50 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-500 ${
                  isVisible("pricing")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Starter
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Perfect for small businesses and startups
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white">$1,999</div>
                    <div className="text-gray-400 text-sm">
                      One-time payment
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Responsive website (up to 5 pages)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Mobile-first design
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Basic SEO optimization
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Contact form integration
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      30 days support
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Professional Plan */}
              <div
                className={`relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur border-2 border-blue-500/50 rounded-2xl p-6 sm:p-8 scale-105 transition-all duration-500 ${
                  isVisible("pricing")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-medium text-white">
                    Most Popular
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl mb-4">⭐</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Professional
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Best for growing businesses
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white">$4,999</div>
                    <div className="text-gray-400 text-sm">
                      One-time payment
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Custom website (up to 10 pages)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Advanced animations & interactions
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      CMS integration
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      E-commerce functionality
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      API integrations
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      90 days support
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    Start Project
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur border border-gray-600/50 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-500 ${
                  isVisible("pricing")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Enterprise
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    For large-scale applications
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white">Custom</div>
                    <div className="text-gray-400 text-sm">
                      Based on requirements
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      Complex web applications
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      Scalable architecture
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      Advanced security features
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      Performance optimization
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      Dedicated support team
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      1 year support included
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
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
            animation: float 6s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .bg-grid-white\\/\\[0\\.02\\] {
            background-image: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            );
          }

          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </div>
    </>
  );
};

export default WebDevelopment;