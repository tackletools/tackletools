import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  Target,
  Sparkles,
  Globe,
  Lock,
  ArrowRight
} from "lucide-react";

// Sample features data - replace with your actual features
const features = [
  {
    icon: <Zap className="w-4 h-4" />,
    text: "Lightning Fast",
    description: "Blazing-fast performance with optimized infrastructure."
  },
  {
    icon: <Shield className="w-4 h-4" />,
    text: "Enterprise Security",
    description: "Bank-grade security with advanced encryption."
  },
  {
    icon: <Rocket className="w-4 h-4" />,
    text: "Rapid Deployment",
    description: "Deploy applications in seconds with automation."
  },
  {
    icon: <Brain className="w-4 h-4" />,
    text: "AI-Powered Insights",
    description: "Machine learning for actionable insights."
  },
  {
    icon: <Target className="w-4 h-4" />,
    text: "Precision Targeting",
    description: "Advanced targeting with real-time optimization."
  },
  {
    icon: <Globe className="w-4 h-4" />,
    text: "Global Scale",
    description: "Distributed infrastructure and multi-region support."
  }
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative p-3 sm:p-4 rounded-lg
        bg-gradient-to-br from-neutral-900/90 to-neutral-800/50
        border border-neutral-700/50
        backdrop-blur-sm
        transition-all duration-300 ease-out
        ${isHovered 
          ? 'transform -translate-y-0.5 scale-[1.01] border-orange-500/30 shadow-lg shadow-orange-500/5' 
          : 'hover:border-neutral-600/50'
        }
      `}>
        
        {/* Glow effect */}
        <div className={`
          absolute inset-0 rounded-lg
          bg-gradient-to-br from-purple-500/5 to-orange-500/5
          opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `} />

        {/* Content */}
        <div className="relative z-10">
          
          {/* Icon */}
          <div className={`
            inline-flex items-center justify-center
            w-8 h-8 sm:w-10 sm:h-10 rounded-md mb-2 sm:mb-3
            transition-all duration-300
            ${isHovered 
              ? 'bg-gradient-to-br from-orange-500 to-purple-600 shadow-md shadow-orange-500/20' 
              : 'bg-neutral-800 border border-neutral-700'
            }
          `}>
            <div className={`
              transition-all duration-300
              ${isHovered ? 'text-white scale-110' : 'text-orange-400'}
            `}>
              {feature.icon}
            </div>
          </div>

          {/* Text content */}
          <h3 className={`
            text-sm sm:text-base font-semibold mb-1 sm:mb-2 leading-tight
            transition-colors duration-300
            ${isHovered ? 'text-white' : 'text-neutral-200'}
          `}>
            {feature.text}
          </h3>
          
          <p className={`
            text-xs sm:text-sm leading-relaxed
            transition-colors duration-300
            ${isHovered ? 'text-neutral-300' : 'text-neutral-400'}
          `}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full bg-black border-b border-neutral-700">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated gradient */}
        <div 
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(249, 115, 22, 0.4) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Header section */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 sm:mb-4 rounded-full border border-orange-500/20 bg-orange-500/5">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span className="text-orange-400 text-xs font-medium uppercase tracking-wider">
              Features
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
            <span className="text-white">Powers that </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
              amplify growth
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Cutting-edge features designed to accelerate your success
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-purple-500/10 hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 group">
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-xs sm:text-sm">Explore All Features</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;