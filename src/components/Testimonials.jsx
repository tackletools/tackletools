// import { persons } from "../utils/utils.js";
// import classNames from "classnames";
// import { styles } from "../../styles.js";
// import { useState } from "react";

// const Testimonials = () => {
//   const [activeItem, setActiveItem] = useState(3);

//   return (
//     <section className={`${styles.padding} border-b border-neutral-700`}>
//       {/* Heading */}
//       <div className="text-center">
//         <span className="text-orange-500 h-6 text-sm font-medium py-1 uppercase tracking-[0.50em]">
//           Stories
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-10 tracking-tight font-semibold">
//           real experiences from
//           <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
//             {" "}
//             real users
//           </span>
//         </h2>
//       </div>
//       {/* Cards */}
//       <div className="flex h-full w-full items-center justify-center mt-10">
//         <div className="w-[1200px] max-w-full">
//           <ul className="group flex h-[640px] gap-[1.5%]">
//             {persons.map((person, index) => (
//               <li
//                 onClick={() => setActiveItem(index)}
//                 aria-current={activeItem === index}
//                 className={classNames(
//                   "relative w-[8%] bg-[#232222] transition-[width] first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[48%]",
//                   "before:absolute before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px]",
//                   "hover:w-[12%] [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]"
//                 )}
//                 key={person.name}
//               >
//                 <div className="relative w-full h-full overflow-hidden rounded-2xl">
//                   <img
//                     src={person.img}
//                     alt={person.name}
//                     className="hover:grayscale-0 absolute w-[590px] h-[640px] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover grayscale transition-all duration-300"
//                     width="590px"
//                     height="640px"
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect, useRef } from "react";
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  User,
  Building,
  MapPin,
  MessageCircle
} from "lucide-react";

// Sample testimonials data - replace with your actual data
const persons = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    testimonial: "This platform revolutionized our development workflow. The AI-powered features saved us countless hours and improved our code quality significantly.",
    rating: 5,
    tags: ["AI Development", "Workflow"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    location: "New York, NY",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    testimonial: "The security features are outstanding. We've deployed mission-critical applications with complete confidence in the platform's reliability.",
    rating: 5,
    tags: ["Security", "Enterprise"]
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovation Labs",
    location: "Austin, TX",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    testimonial: "The collaborative features transformed how our team works together. Real-time editing and seamless integration make project management effortless.",
    rating: 5,
    tags: ["Collaboration", "Management"]
  },
  {
    name: "David Park",
    role: "Senior Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    testimonial: "Performance optimization features are incredible. Our applications run 3x faster with minimal configuration changes.",
    rating: 5,
    tags: ["Performance", "Optimization"]
  },
  {
    name: "Lisa Thompson",
    role: "DevOps Lead",
    company: "CloudNative Co.",
    location: "Boston, MA",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
    testimonial: "Deployment automation saved our team weeks of manual work. The platform's intelligence adapts to our specific needs perfectly.",
    rating: 5,
    tags: ["DevOps", "Automation"]
  }
];

const FloatingParticle = ({ delay = 0 }) => (
  <div 
    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-30 animate-float"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

const TestimonialCard = ({ person, isActive, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative cursor-pointer transition-all duration-700 ease-out
        ${isActive 
          ? 'flex-[2] lg:flex-[3]' 
          : 'flex-1 hover:flex-[1.2]'
        }
        ${isActive ? 'z-20' : 'z-10'}
      `}
      style={{
        minWidth: isActive ? '300px' : '80px',
      }}
    >
      {/* Background image container with 3D effect */}
      <div className={`
        relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden
        transition-all duration-700 ease-out
        ${isActive 
          ? 'shadow-2xl shadow-purple-500/20 border-2 border-purple-500/30' 
          : 'shadow-lg border border-neutral-700/50'
        }
        ${isHovered && !isActive ? 'transform scale-105 shadow-xl shadow-orange-500/10' : ''}
      `}>
        
        {/* Image */}
        <img
          src={person.img}
          alt={person.name}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700
            ${isActive 
              ? 'grayscale-0 scale-100' 
              : 'grayscale scale-110 hover:grayscale-[50%]'
            }
          `}
        />
        
        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 transition-all duration-700
          ${isActive 
            ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' 
            : 'bg-gradient-to-t from-black/60 to-transparent'
          }
        `} />
        
        {/* Content overlay for active card */}
        {isActive && (
          <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
            {/* Quote icon */}
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Testimonial text */}
            <blockquote className="text-white text-base lg:text-lg leading-relaxed mb-6 font-medium">
              "{person.testimonial}"
            </blockquote>
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(person.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {person.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Person info */}
            <div className="space-y-2">
              <h3 className="text-white font-bold text-lg">{person.name}</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-neutral-300 text-sm">
                  <User className="w-4 h-4" />
                  <span>{person.role}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 text-sm">
                  <Building className="w-4 h-4" />
                  <span>{person.company}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{person.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Name label for inactive cards */}
        {!isActive && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="transform -rotate-90 origin-bottom-left">
              <h3 className="text-white font-semibold text-sm whitespace-nowrap">
                {person.name}
              </h3>
              <p className="text-neutral-300 text-xs">
                {person.role}
              </p>
            </div>
          </div>
        )}
        
        {/* Hover indicator */}
        {!isActive && isHovered && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveItem(prev => (prev + 1) % persons.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setActiveItem(prev => prev === 0 ? persons.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveItem(prev => (prev + 1) % persons.length);
  };

  return (
    <section className="relative w-full bg-black border-b border-neutral-700 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-orange-900/10" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-orange-500/20 bg-orange-500/5">
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">Real experiences from </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
              real users
            </span>
          </h2>
          
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Discover how teams worldwide are transforming their workflows with our platform
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border border-neutral-600 hover:border-purple-500/50 bg-neutral-900/50 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-400 group-hover:text-purple-400" />
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-12 h-12 rounded-full border border-neutral-600 hover:border-orange-500/50 bg-neutral-900/50 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-neutral-400 group-hover:text-orange-400" />
            ) : (
              <Play className="w-4 h-4 text-neutral-400 group-hover:text-orange-400" />
            )}
          </button>
          
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-neutral-600 hover:border-purple-500/50 bg-neutral-900/50 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400" />
          </button>
        </div>

        {/* Testimonials container */}
        <div className="relative">
          <div className="flex gap-4 h-[500px] lg:h-[600px] overflow-hidden">
            {persons.map((person, index) => (
              <TestimonialCard
                key={person.name}
                person={person}
                index={index}
                isActive={activeItem === index}
                onClick={() => setActiveItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {persons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeItem === index 
                  ? 'bg-gradient-to-r from-purple-400 to-orange-400 w-8' 
                  : 'bg-neutral-600 hover:bg-neutral-500'
                }
              `}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(10px) rotate(240deg) scale(0.9); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;