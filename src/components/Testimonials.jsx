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
import Amit from "../assets/Amit.jpg";
import Pawan from "../assets/pss.jpg";
import Komal from "../assets/komal.jpg";
import Nikita from "../assets/Nikita.jpg";

const persons = [
  {
    name: "Amit Gusain",
    role: "Lead Developer",
    company: "TackleTools Inc.",
    location: "New Delhi, India",
    img: Amit,
    testimonial: "This platform revolutionized our development workflow. The AI-powered features saved us countless hours.",
    rating: 5,
    tags: ["AI Development", "Workflow"]
  },
  {
    name: "Pawan Singh Shah",
    role: "Lead Developer",
    company: "TackleTools Inc.",
    location: "New Delhi, India",
    img: Pawan,
    testimonial: "The security features are outstanding. We've deployed mission-critical applications with complete confidence.",
    rating: 5,
    tags: ["Security", "Enterprise"]
  },
  {
    name: "Prishika Simon",
    role: "Product Manager",
    company: "Innovation Labs",
    location: "Austin, TX",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    testimonial: "The collaborative features transformed how our team works together. Real-time editing makes it effortless.",
    rating: 5,
    tags: ["Collaboration", "Management"]
  },
  {
    name: "Komal Pandey",
    role: "Senior Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    img: Komal,
    testimonial: "Performance optimization features are incredible. Our applications run 3x faster with minimal changes.",
    rating: 5,
    tags: ["Performance", "Optimization"]
  },
  {
    name: "Nikita Gusain",
    role: "DevOps Lead",
    company: "CloudNative Co.",
    location: "Boston, MA",
    img: Nikita,
    testimonial: "Deployment automation saved our team weeks of manual work. The platform adapts perfectly to our needs.",
    rating: 5,
    tags: ["DevOps", "Automation"]
  }
];

const FloatingParticle = ({ delay = 0 }) => (
  <div 
    className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-20 animate-float"
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
        relative cursor-pointer transition-all duration-500 ease-out
        ${isActive 
          ? 'flex-[2] sm:flex-[2.5] lg:flex-[3]' 
          : 'flex-1 hover:flex-[1.1]'
        }
        ${isActive ? 'z-20' : 'z-10'}
      `}
      style={{
        minWidth: isActive ? '200px' : '60px',
      }}
    >
      <div className={`
        relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden
        transition-all duration-500 ease-out
        ${isActive 
          ? 'shadow-xl shadow-purple-500/20 border border-purple-500/30' 
          : 'shadow-md border border-neutral-700/50'
        }
        ${isHovered && !isActive ? 'transform scale-105 shadow-lg shadow-orange-500/10' : ''}
      `}>
        
        <img
          src={person.img}
          alt={person.name}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-500
            ${isActive 
              ? 'grayscale-0 scale-100' 
              : 'grayscale scale-110 hover:grayscale-[50%]'
            }
          `}
        />
        
        <div className={`
          absolute inset-0 transition-all duration-500
          ${isActive 
            ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' 
            : 'bg-gradient-to-t from-black/60 to-transparent'
          }
        `} />
        
        {isActive && (
          <div className="absolute inset-0 p-3 sm:p-4 lg:p-5 flex flex-col justify-end">
            <div className="mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <blockquote className="text-white text-sm sm:text-base leading-snug mb-3 font-medium">
              "{person.testimonial}"
            </blockquote>
            
            <div className="flex gap-1 mb-2">
              {[...Array(person.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {person.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 py-0.5 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-white font-bold text-base">{person.name}</h3>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-neutral-300 text-xs">
                  <User className="w-3 h-3" />
                  <span>{person.role}</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-300 text-xs">
                  <Building className="w-3 h-3" />
                  <span>{person.company}</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-300 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{person.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!isActive && (
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
            <div className="text-center">
              <h3 className="text-white font-semibold text-xs leading-tight mb-0.5">
                {person.name}
              </h3>
              <p className="text-neutral-300 text-xs leading-tight">
                {person.role}
              </p>
            </div>
          </div>
        )}
        
        {!isActive && isHovered && (
          <div className="absolute top-2 right-2">
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-white" />
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

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveItem(prev => (prev + 1) % persons.length);
      }, 4000);
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-orange-900/10" />
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-orange-500/20 bg-orange-500/5">
            <MessageCircle className="w-3 h-3 text-orange-400" />
            <span className="text-orange-400 text-xs font-medium uppercase tracking-wider">
              Stories
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight mb-2">
            <span className="text-white">Real experiences from </span>
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
              real users
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Discover how teams worldwide are transforming their workflows
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={handlePrevious}
            className="w-8 h-8 rounded-full border border-neutral-600 hover:border-purple-500/50 bg-neutral-900/50 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-400 group-hover:text-purple-400" />
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-8 h-8 rounded-full border border-neutral-600 hover:border-orange-500/50 bg-neutral-900/50 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            {isAutoPlaying ? (
              <Pause className="w-3 h-3 text-neutral-400 group-hover:text-orange-400" />
            ) : (
              <Play className="w-3 h-3 text-neutral-400 group-hover:text-orange-400" />
            )}
          </button>
          
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-neutral-600 hover:border-purple-500/50 bg-neutral-900/50 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-400" />
          </button>
        </div>

        <div className="relative">
          <div className="flex gap-2 sm:gap-3 h-64 sm:h-80 lg:h-96 overflow-hidden">
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

        <div className="flex items-center justify-center gap-1 mt-6">
          {persons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300
                ${activeItem === index 
                  ? 'bg-gradient-to-r from-purple-400 to-orange-400 w-6' 
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
          33% { transform: translateY(-15px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(8px) rotate(240deg) scale(0.9); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;