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

const checklistItems = [
  {
    title: "Smart Code Generation",
    description: "AI-powered code completion that understands your project context.",
    icon: <Code className="w-4 h-4" />
  },
  {
    title: "Lightning Fast Builds",
    description: "Optimized build pipeline reducing deployment time by 80%.",
    icon: <Zap className="w-4 h-4" />
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools through extensive APIs.",
    icon: <GitBranch className="w-4 h-4" />
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with live editing and instant sync.",
    icon: <Database className="w-4 h-4" />
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance standards.",
    icon: <Shield className="w-4 h-4" />
  }
];

const ChecklistItem = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        group relative mb-3 transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-4'
        }
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative flex items-start gap-3 p-3 rounded-lg
        transition-all duration-300 ease-out
        ${isHovered 
          ? 'bg-gradient-to-r from-neutral-900/60 to-neutral-800/30 border border-green-500/20' 
          : 'bg-transparent border border-transparent'
        }
      `}>
        
        {/* Icon container */}
        <div className={`
          relative flex-shrink-0 w-8 h-8 rounded-lg
          flex items-center justify-center
          transition-all duration-300
          ${isHovered 
            ? 'bg-gradient-to-br from-green-400 to-emerald-600 shadow-md shadow-green-500/20 scale-105' 
            : 'bg-gradient-to-br from-neutral-800 to-neutral-700'
          }
        `}>
          <div className={`
            transition-all duration-300
            ${isHovered ? 'text-white' : 'text-green-400'}
          `}>
            {item.icon}
          </div>
          
          {/* Checkmark */}
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`
            text-sm sm:text-base font-semibold mb-1 transition-colors duration-300
            ${isHovered ? 'text-white' : 'text-neutral-200'}
          `}>
            {item.title}
          </h3>
          
          <p className={`
            text-xs sm:text-sm leading-tight transition-colors duration-300
            ${isHovered ? 'text-neutral-300' : 'text-neutral-400'}
          `}>
            {item.description}
          </p>
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
        const lineToAdd = Math.floor(Math.random() * 8);
        if (!newLines.includes(lineToAdd)) {
          newLines.push(lineToAdd);
        }
        if (newLines.length > 2) {
          newLines.shift();
        }
        return newLines;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    "// AI Workflow Engine",
    "const workflow = new SmartEngine({",
    "  mode: 'production',",
    "  features: ['ai_assist'],",
    "});",
    "",
    "workflow.on('complete', () => {",
    "  console.log('✨ Done');",
    "});",
    "",
    "// Deploy workflow",
    "await workflow.deploy();"
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] rounded-lg overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 p-2 sm:p-3 border-b border-neutral-700/50 bg-neutral-800/50 flex-shrink-0">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <span className="text-neutral-400 text-xs ml-2">workflow.js</span>
        <div className="ml-auto flex items-center gap-1">
          <Play className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 hidden sm:inline">Running</span>
        </div>
      </div>
      
      {/* Code */}
      <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm leading-relaxed flex-1">
        {codeLines.map((line, index) => (
          <div 
            key={index}
            className={`
              transition-all duration-500 py-0.5
              ${activeLines.includes(index) 
                ? 'bg-gradient-to-r from-purple-500/10 to-orange-500/10 text-white border-l-2 border-orange-400 pl-2' 
                : 'text-neutral-400'
              }
            `}
          >
            <span className="text-neutral-600 select-none mr-2 w-4 inline-block text-right">{line ? (index + 1) : ''}</span>
            {line}
          </div>
        ))}
      </div>
      
      {/* Progress */}
      <div className="p-2 sm:p-3 flex-shrink-0">
        <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" style={{ width: '75%' }} />
        </div>
        <div className="flex justify-between text-xs text-neutral-500 mt-1">
          <span className="hidden sm:inline">Progress</span>
          <span>75%</span>
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black border-b border-neutral-700 overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full border border-green-500/20 bg-green-500/5">
            <Rocket className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs font-medium uppercase tracking-wider">
              Efficiency
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            <span className="text-white">Accelerate your </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-green-400 text-transparent bg-clip-text">
              workflow
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Transform your development process with AI-powered tools
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Code visualization */}
          <div className={`
            transition-all duration-700 ease-out order-2 lg:order-1 flex
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
          `}>
            <CodeVisualization />
          </div>

          {/* Checklist */}
          <div className="space-y-1 order-1 lg:order-2 flex flex-col justify-center">
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

        {/* CTA buttons */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group shadow-lg shadow-green-500/25">
              <Play className="w-3 h-3 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium text-xs">Start Workflow</span>
            </button>
            
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-neutral-600 hover:border-green-500/30 transition-all duration-300 group">
              <Sparkles className="w-3 h-3 text-green-400" />
              <span className="text-neutral-300 font-medium text-xs">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;