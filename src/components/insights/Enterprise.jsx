import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Users,
  Zap,
  BarChart3,
  Lock,
  Cloud,
  CheckCircle,
  Star,
  Globe,
  Rocket,
  Award,
  Target,
  TrendingUp,
  Layers,
  Quote,
  Code,
  Lightbulb,
  Heart,
  Trophy,
  Coffee,
  Eye,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import { HelmetTags } from "../../utils/HelmetMetaTags";
import Logo from "../../assets/logo-dark.png";
import Amit from "../../assets/Amit.jpg";
import Pawan from "../../assets/pawan.jpg";

const Enterprise = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description:
        "Enterprise-grade encryption and compliance with zero-trust architecture",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Management",
      description:
        "Centralized user control with granular permissions and role-based access",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Suite",
      description: "Real-time insights with AI-powered predictive analytics",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless multi-cloud deployment with automatic scaling",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Lightning-fast processing with global CDN delivery",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Multi-region support with 99.99% uptime guarantee",
    },
  ];

  const FloatingOrb = ({ className, delay = 0 }) => (
    <div
      className={`absolute w-32 h-32 rounded-full opacity-20 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${mousePosition.x * 0.01}px, ${
          mousePosition.y * 0.01
        }px)`,
      }}
    />
  );

  return (
    <>
    {HelmetTags.Enterprise}

     <div className="bg-black text-gray-100 min-h-screen overflow-hidden">
      {/* Subtle Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingOrb
          className="bg-gradient-to-br from-purple-500/5 to-orange-500/5 top-20 left-10"
          delay={0}
        />
        <FloatingOrb
          className="bg-gradient-to-br from-orange-500/5 to-red-500/5 top-40 right-20"
          delay={1}
        />
        <FloatingOrb
          className="bg-gradient-to-br from-purple-600/5 to-pink-500/5 bottom-40 left-1/4"
          delay={2}
        />
        <FloatingOrb
          className="bg-gradient-to-br from-orange-400/5 to-yellow-500/5 bottom-20 right-10"
          delay={3}
        />
      </div>

      {/* Hero Section */}
      <section
        className="pt-20 sm:pt-32 px-6 relative h-screen flex items-center justify-center"
        ref={heroRef}
      >
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 relative">
              {/* Floating particles */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-20 -right-5 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-5 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />

              {/* Animated logo section */}
              <div className="inline-block relative">
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-0 transform hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-2xl group">
                  <Zap className="w-8 h-8 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Orbiting micro elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
              </div>

              {/* Enhanced title section */}
              <div className="space-y-4 sm:space-y-6 relative">
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                      Meet{" "}
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300 relative">
                      Tackle Tools
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 rounded-full opacity-30 animate-pulse" />
                    </span>
                    <br />
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                      Your Friendly{" "}
                    </span>
                    <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300 relative">
                      Tech Partner
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}} />
                    </span>
                  </h1>
                  {/* Background glow for text */}
                  <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-10 blur-2xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent -z-10">
                    Meet Tackle Tools Your Friendly Tech Partner
                  </div>
                </div>

                {/* Enhanced description with typing effect styling */}
                <div className="relative">
                  <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed relative z-10">
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">Tackle</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">your</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-purple-300">business</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-orange-300">challenges</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">with</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">ease</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">using</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">our</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-purple-300">smart</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">set</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">of</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-orange-300">tools</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">—</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">built</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">to</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">help</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">your</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-purple-300">team</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-orange-300">grow</span>,{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">work</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">better</span>,{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">and</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">stay</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">ahead</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">with</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-purple-300">reliable</span>,{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200 text-orange-300">innovative</span>{" "}
                    <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">solutions</span>.
                  </p>
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-2xl blur-xl -z-10" />
                </div>

                {/* Interactive stats/badges */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="group flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-sm text-gray-300">Enterprise Ready</span>
                  </div>
                  <div className="group flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-green-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                    <span className="text-sm text-gray-300">Trusted by 500+</span>
                  </div>
                  <div className="group flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-600/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <Rocket className="w-4 h-4 text-purple-400 animate-pulse" style={{animationDelay: '1s'}} />
                    <span className="text-sm text-gray-300">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Central 3D Cube */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative transform-gpu animate-spin-slow">
                    <div className="w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-purple-500/30 to-orange-500/30 rounded-3xl backdrop-blur-sm border border-purple-500/30 transform rotate-12 hover:rotate-0 transition-transform duration-1000" />
                    <div className="absolute inset-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl backdrop-blur-sm border border-orange-500/30 transform -rotate-12 hover:rotate-0 transition-transform duration-1000" />
                    <div className="absolute inset-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-purple-600/30 to-pink-500/30 rounded-3xl backdrop-blur-sm border border-purple-600/30 transform rotate-45 hover:rotate-0 transition-transform duration-1000" />

                    {/* Logo in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20 transform hover:scale-110 transition-all duration-300">
                        <img src={Logo} alt="Logo" className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[Shield, Users, BarChart3, Cloud].map((Icon, index) => (
                  <div
                    key={index}
                    className="absolute w-16 sm:w-20 h-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                    style={{
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Meet The{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Two brilliant minds who came together to revolutionize enterprise
              technology and make it accessible to businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CEO - Amit Gusain */}
            <div className="group relative bg-gradient-to-br from-purple-900/40 to-orange-900/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 rounded-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-full transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full transform -translate-x-12 translate-y-12" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Large Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden transform group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-gradient-to-r from-purple-500 to-orange-500">
                      <img
                        src={Amit}
                        alt="Amit Gusain"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30 mb-3">
                        Founder & CEO
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Amit Gusain
                      </h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>New Delhi, India</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 italic">
                      "Technology should empower people, not overwhelm them.
                      We're building the future where enterprise tools are as
                      intuitive as they are powerful."
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-gray-300">
                          5+ years building enterprise solutions
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-orange-400" />
                        <span className="text-sm text-gray-300">
                          MCA from IGNOU, MDCA Computer Science
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-gray-300">
                          3 successful exits, 2 patents
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                        <Mail className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                        <Linkedin className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder - Pawan Singh Shah */}
            <div className="group relative bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full transform -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full transform translate-x-12 translate-y-12" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Large Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden transform group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-gradient-to-r from-orange-500 to-red-500">
                      <img
                        src={Pawan}
                        alt="Pawan Singh Shah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-sm text-orange-300 border border-orange-500/30 mb-3">
                        Co-Founder & CTO
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Pawan Singh Shah
                      </h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>New Delhi, India</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 italic">
                      "The best architecture is invisible to the user but
                      powerful enough to scale mountains. We're building systems
                      that just work, beautifully."
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-orange-400" />
                        <span className="text-sm text-gray-300">
                          Former Lead Developer at RB CORP
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-red-400" />
                        <span className="text-sm text-gray-300">
                          MBA from DU, MDCA Computer Science
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-orange-400" />
                        <span className="text-sm text-gray-300">
                          2 patents, Open source contributor
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                        <Mail className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                        <Linkedin className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driven by purpose, powered by innovation, and committed to
              transforming how businesses operate in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full transform translate-x-16 -translate-y-16" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-all duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Our Mission
                    </h3>
                    <p className="text-purple-300 text-sm">
                      What drives us every day
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize enterprise technology by creating intuitive,
                  powerful tools that enable businesses of all sizes to compete
                  at the highest level. We believe that great technology should
                  amplify human potential, not replace it.
                </p>

                <div className="space-y-4">
                  {[
                    "Simplify complex enterprise processes",
                    "Empower teams with intelligent automation",
                    "Bridge the gap between innovation and implementation",
                    "Create lasting value for our clients",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full transform -translate-x-16 translate-y-16" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-all duration-500">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Our Vision
                    </h3>
                    <p className="text-orange-300 text-sm">
                      Where we're heading
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To become the global standard for enterprise software
                  solutions, creating a world where every business has access to
                  Fortune 500-level technology capabilities, regardless of size
                  or budget.
                </p>

                <div className="space-y-4">
                  {[
                    "Lead the next generation of enterprise tools",
                    "Expand globally with localized solutions",
                    "Pioneer AI-driven business automation",
                    "Foster a community of innovation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TackleTools Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-orange-900/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why{" "}
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  TackleTools?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just build software – we craft experiences that drive
                real business transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Lightbulb className="w-10 h-10" />,
                  title: "Innovation First",
                  description:
                    "Cutting-edge technology meets practical business solutions",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  icon: <Heart className="w-10 h-10" />,
                  title: "Client-Centric",
                  description:
                    "Your success is our mission, every step of the way",
                  color: "from-pink-400 to-red-500",
                },
                {
                  icon: <Trophy className="w-10 h-10" />,
                  title: "Proven Results",
                  description:
                    "Track record of delivering measurable business outcomes",
                  color: "from-purple-400 to-blue-500",
                },
                {
                  icon: <Rocket className="w-10 h-10" />,
                  title: "Future-Ready",
                  description:
                    "Solutions that scale and adapt to tomorrow's challenges",
                  color: "from-orange-400 to-red-500",
                },
              ].map((reason, index) => (
                <div key={index} className="group text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}
                  >
                    <div className="text-white">{reason.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse group of passionate professionals dedicated to building
              the future of enterprise technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Developer",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
                specialty: "Full-stack Development",
                icon: <Code className="w-5 h-5" />,
              },
              {
                name: "Michael Chen",
                role: "DevOps Engineer",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
                specialty: "Cloud Infrastructure",
                icon: <Cloud className="w-5 h-5" />,
              },
              {
                name: "Emily Rodriguez",
                role: "UI/UX Designer",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format",
                specialty: "User Experience",
                icon: <Star className="w-5 h-5" />,
              },
              {
                name: "David Park",
                role: "Data Scientist",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format",
                specialty: "Machine Learning",
                icon: <BarChart3 className="w-5 h-5" />,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-500 text-center"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="text-white">{member.icon}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-300 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.specialty}</p>

                <div className="mt-4 flex justify-center">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-xs text-gray-300 border border-white/10">
                    <Coffee className="w-3 h-3 inline mr-1" />
                    Team Player
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Everything you need to scale your business efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-orange-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-purple-400 mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-8 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-orange-900/30 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Enterprise-Grade{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    Security
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Your data is protected with military-grade encryption and
                  comprehensive compliance standards that exceed industry
                  requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      icon: <Shield className="w-6 h-6" />,
                      text: "SOC 2 Type II",
                      desc: "Audited annually",
                    },
                    {
                      icon: <Lock className="w-6 h-6" />,
                      text: "GDPR Compliant",
                      desc: "Full compliance",
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: "ISO 27001",
                      desc: "Certified security",
                    },
                    {
                      icon: <Cloud className="w-6 h-6" />,
                      text: "Zero Trust",
                      desc: "Architecture",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-purple-400 mt-1">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">
                          {item.text}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/10">
                    <Shield className="w-24 h-24 sm:w-32 sm:h-32 text-purple-400" />
                  </div>
                  <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-8 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Real results from companies that chose TackleTools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Fortune 500 Company",
                metric: "78%",
                description: "Reduction in processing time",
                color: "from-purple-500 to-orange-500",
              },
              {
                icon: <Target className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Tech Startup",
                metric: "3x",
                description: "Faster deployment cycles",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Healthcare Provider",
                metric: "$2.5M",
                description: "Annual cost savings",
                color: "from-purple-600 to-pink-500",
              },
              {
                icon: <Layers className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Financial Services",
                metric: "99.9%",
                description: "Compliance score achieved",
                color: "from-orange-400 to-yellow-500",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-500 text-center"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <div className="text-white">{story.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {story.title}
                </h3>
                <div
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent mb-2`}
                >
                  {story.metric}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Enterprise;