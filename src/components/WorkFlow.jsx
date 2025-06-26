// import React from "react";
// import { CheckCircle2 } from "lucide-react";
// import codeImg from "../assets/code.jpg";
// import { checklistItems } from "../utils/utils";
// import { styles } from "../../styles";

// const WorkFlow = () => {
//   return (
//     <div className={`${styles.padding} border-b border-neutral-700`}>
//       <div className="text-center">
//         <span className="text-orange-500 h-6 text-sm font-medium py-1 uppercase tracking-[0.50em]">
//           Efficiency
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-10 tracking-tight font-semibold">
//           accelerate your
//           <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
//             {" "}
//             workflow
//           </span>
//         </h2>
//       </div>
//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={codeImg} alt="work-flow Image" />
//         </div>
//         <div className="p-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-6">
//               <div className="text-green-400 mx-6 bg-transparent h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkFlow;

import React, { useState, useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  Play, 
  Code, 
  Zap, 
  GitBranch, 
  Database, 
  Shield, 
  Rocket,
  ArrowRight,
  Sparkles
} from "lucide-react";

// Sample checklist items - replace with your actual data
const checklistItems = [
  {
    title: "Smart Code Generation",
    description: "AI-powered code completion and generation that understands your project context and coding patterns.",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Lightning Fast Builds",
    description: "Optimized build pipeline that reduces deployment time by 80% with intelligent caching.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools and services through our extensive API ecosystem.",
    icon: <GitBranch className="w-5 h-5" />
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time with live editing and instant synchronization.",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with SOC2, GDPR, and other security standards.",
    icon: <Shield className="w-5 h-5" />
  }
];

const FloatingElement = ({ delay = 0, children, className = "" }) => (
  <div 
    className={`animate-float ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${3 + delay}s`
    }}
  >
    {children}
  </div>
);

const ChecklistItem = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        group relative mb-8 transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'
        }
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <div className={`
        absolute inset-0 rounded-2xl transition-all duration-500
        ${isHovered 
          ? 'bg-gradient-to-r from-green-500/5 to-emerald-500/5 blur-xl scale-110' 
          : 'bg-transparent'
        }
      `} />
      
      {/* Main content container */}
      <div className={`
        relative flex items-start gap-6 p-6 rounded-2xl
        transition-all duration-500 ease-out
        ${isHovered 
          ? 'bg-gradient-to-r from-neutral-900/80 to-neutral-800/40 border border-green-500/20 transform translate-x-2' 
          : 'bg-transparent border border-transparent'
        }
      `}>
        
        {/* Icon container */}
        <div className={`
          relative flex-shrink-0 w-14 h-14 rounded-xl
          flex items-center justify-center
          transition-all duration-500
          ${isHovered 
            ? 'bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/25 transform rotate-3 scale-110' 
            : 'bg-gradient-to-br from-neutral-800 to-neutral-700'
          }
        `}>
          {/* Icon glow */}
          <div className={`
            absolute inset-0 rounded-xl transition-opacity duration-500
            ${isHovered ? 'bg-green-400/20 blur-lg opacity-100' : 'opacity-0'}
          `} />
          
          <div className={`
            relative transition-all duration-500
            ${isHovered ? 'text-white scale-110' : 'text-green-400'}
          `}>
            {item.icon}
          </div>
          
          {/* Checkmark overlay */}
          <div className={`
            absolute -top-1 -right-1 w-6 h-6 rounded-full
            bg-gradient-to-br from-green-400 to-emerald-500
            flex items-center justify-center
            transition-all duration-500
            ${isHovered ? 'scale-110 shadow-lg shadow-green-500/30' : 'scale-100'}
          `}>
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`
            text-xl font-bold mb-3 transition-all duration-500
            ${isHovered ? 'text-white' : 'text-neutral-200'}
          `}>
            {item.title}
          </h3>
          
          <p className={`
            text-sm leading-relaxed transition-all duration-500
            ${isHovered ? 'text-neutral-300' : 'text-neutral-400'}
          `}>
            {item.description}
          </p>
          
          {/* Hover indicator */}
          {isHovered && (
            <div className="flex items-center mt-3 text-green-400 text-xs font-medium">
              <span>Explore feature</span>
              <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CodeVisualization = () => {
  const [activeLines, setActiveLines] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLines(prev => {
        const newLines = [...prev];
        const lineToAdd = Math.floor(Math.random() * 12);
        if (!newLines.includes(lineToAdd)) {
          newLines.push(lineToAdd);
        }
        if (newLines.length > 3) {
          newLines.shift();
        }
        return newLines;
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50">
      {/* Header bar */}
      <div className="flex items-center gap-2 p-4 border-b border-neutral-700/50 bg-neutral-800/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-neutral-400 text-sm ml-3">workflow.js</span>
        <div className="ml-auto flex items-center gap-2">
          <Play className="w-4 h-4 text-green-400" />
          <span className="text-xs text-green-400">Running</span>
        </div>
      </div>
      
      {/* Code content */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        {[
          "// AI-Powered Workflow Engine",
          "const workflow = new SmartEngine({",
          "  mode: 'production',",
          "  features: ['ai_assist', 'auto_deploy'],",
          "  performance: 'optimized'",
          "});",
          "",
          "workflow.on('code_complete', () => {",
          "  console.log('✨ Code generated');",
          "});",
          "",
          "await workflow.deploy();"
        ].map((line, index) => (
          <div 
            key={index}
            className={`
              transition-all duration-500 py-0.5
              ${activeLines.includes(index) 
                ? 'bg-gradient-to-r from-purple-500/10 to-orange-500/10 text-white border-l-2 border-orange-400 pl-4' 
                : 'text-neutral-400'
              }
            `}
          >
            <span className="text-neutral-600 select-none mr-4">{(index + 1).toString().padStart(2, '0')}</span>
            {line}
          </div>
        ))}
      </div>
      
      {/* Floating elements */}
      <FloatingElement delay={0} className="absolute top-1/4 right-8">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 opacity-20 blur-sm" />
      </FloatingElement>
      
      <FloatingElement delay={1} className="absolute bottom-1/4 right-16">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-30" />
      </FloatingElement>
      
      {/* Progress indicator */}
      <div className="absolute bottom-4 left-6 right-6">
        <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" style={{ width: '75%' }} />
        </div>
        <div className="flex justify-between text-xs text-neutral-500 mt-2">
          <span>Workflow Progress</span>
          <span>75% Complete</span>
        </div>
      </div>
    </div>
  );
};

const WorkFlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black border-b border-neutral-700 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Gradient orbs */}
        <FloatingElement delay={0} className="absolute top-20 left-1/4">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green-400/10 to-emerald-600/10 blur-3xl" />
        </FloatingElement>
        
        <FloatingElement delay={2} className="absolute bottom-20 right-1/4">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400/10 to-orange-400/10 blur-3xl" />
        </FloatingElement>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/5">
            <Rocket className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium uppercase tracking-wider">
              Efficiency
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">Accelerate your </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-green-400 text-transparent bg-clip-text">
              workflow
            </span>
          </h2>
          
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Transform your development process with AI-powered tools that understand your needs
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Code visualization */}
          <div className={`
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}>
            <div className="relative">
              {/* 3D container effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl transform rotate-1 scale-105 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl transform -rotate-1 scale-105 opacity-10" />
              
              <div className="relative">
                <CodeVisualization />
              </div>
            </div>
          </div>

          {/* Right side - Checklist */}
          <div className="space-y-2">
            {checklistItems.map((item, index) => (
              <ChecklistItem 
                key={index} 
                item={item} 
                index={index} 
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group shadow-lg shadow-green-500/25">
              <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-semibold">Start Your Workflow</span>
            </button>
            
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-600 hover:border-green-500/30 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-neutral-300 font-medium">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkFlow;