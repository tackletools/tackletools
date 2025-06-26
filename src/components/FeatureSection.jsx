// import React from "react";
// import { features } from "../utils/utils.js";
// import { PanelLeft } from "lucide-react";
// import { styles } from "../../styles.js";

// const FeatureSection = () => {
//   return (
//     <section className={`${styles.padding} border-b border-neutral-700`}>
//       <div className="text-center">
//         <span className="text-orange-500 h-6 text-sm font-medium py-1 uppercase tracking-[0.50em]">
//           Features
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-10 tracking-tight font-semibold">
//           that empower
//           <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
//             {" "}
//             your growth
//           </span>
//         </h2>
//       </div>
//       <div className="flex flex-wrap mt-6 lg:mt-10 mx-2">
//         {features.map((feature, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
//             <div className="flex">
//               <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-800 text-orange-800 justify-center items-center rounded-full">
//                 <PanelLeft/>
//                 {/* {feature.icon} */}
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-6 text-xl tracking-tighter">
//                   {feature.text}
//                 </h5>
//                 <p className="text-md p-2 mb-16 sm:mb-6 text-neutral-500">{feature.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

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
    icon: <Zap className="w-5 h-5" />,
    text: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure that scales with your needs."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "Enterprise Security",
    description: "Bank-grade security protocols protect your data with advanced encryption and monitoring."
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    text: "Rapid Deployment",
    description: "Deploy your applications in seconds with our streamlined CI/CD pipeline and automation tools."
  },
  {
    icon: <Brain className="w-5 h-5" />,
    text: "AI-Powered Insights",
    description: "Leverage machine learning algorithms to gain actionable insights from your data."
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Precision Targeting",
    description: "Reach your ideal audience with advanced targeting capabilities and real-time optimization."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Global Scale",
    description: "Expand worldwide with our distributed infrastructure and multi-region support."
  }
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full">
      <div 
        className="relative h-full min-h-[280px] group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main card container */}
        <div className={`
          relative h-full w-full p-6 rounded-xl
          bg-gradient-to-br from-neutral-900/90 to-neutral-800/50
          border border-neutral-700/50
          backdrop-blur-sm
          transition-all duration-500 ease-out
          ${isHovered 
            ? 'transform -translate-y-1 scale-[1.02] border-orange-500/30 shadow-xl shadow-orange-500/10' 
            : 'hover:border-neutral-600/50'
          }
        `}>
          
          {/* Glow effect overlay */}
          <div className={`
            absolute inset-0 rounded-xl
            bg-gradient-to-br from-purple-500/5 to-orange-500/5
            opacity-0 transition-opacity duration-500
            ${isHovered ? 'opacity-100' : ''}
          `} />

          {/* Content container */}
          <div className="relative z-10 h-full flex flex-col">
            
            {/* Icon section */}
            <div className="flex-shrink-0 mb-4">
              <div className={`
                inline-flex items-center justify-center
                w-12 h-12 rounded-lg
                transition-all duration-300
                ${isHovered 
                  ? 'bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg shadow-orange-500/20' 
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
            </div>

            {/* Text content */}
            <div className="flex-grow flex flex-col">
              <h3 className={`
                text-lg font-semibold mb-3 leading-tight
                transition-colors duration-300
                ${isHovered ? 'text-white' : 'text-neutral-200'}
              `}>
                {feature.text}
              </h3>
              
              <p className={`
                text-sm leading-relaxed flex-grow
                transition-colors duration-300
                ${isHovered ? 'text-neutral-300' : 'text-neutral-400'}
              `}>
                {feature.description}
              </p>
            </div>

            {/* Hover indicator */}
            {isHovered && (
              <div className="flex-shrink-0 mt-4 flex items-center text-orange-400 text-xs font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.documentElement.getBoundingClientRect();
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
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(249, 115, 22, 0.4) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header section */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-orange-500/20 bg-orange-500/5">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              Features
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white block lg:inline">Powers that </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
              amplify growth
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Unlock your potential with cutting-edge features designed to accelerate your success
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-purple-500/10 hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 group">
            <Lock className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-medium text-sm">Explore All Features</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;