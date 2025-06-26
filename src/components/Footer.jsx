// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#18181A] text-gray-400 py-10">
//       {/* top section */}
//       <div className="container mx-auto p-4">
//         <div className="flex flex-wrap justify-center mb-4">
//           <h2 className="text-white text-2xl font-bold">
//             Ready to take your business to the next level?
//           </h2>
//           <p className="text-center">
//             Empowering businesses through technology and innovation.<br/> Providing
//             Website, Application, and eCommerce solutions tailored to your
//             needs.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center">
//           <a
//             href="#"
//             className="bg-white text-[#18181A] hover:bg-gray-200 px-4 py-2 rounded-full mr-4"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>
//       <div className="container mx-auto p-4">
//         <div className="flex flex-wrap justify-center items-center mb-4">
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Website
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Application
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Multimedia
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Database
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Marketing
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mr-4">
//             Security
//           </a>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 pt-6 text-center">
//         <div className="flex flex-row flex-wrap items-center justify-between mx-4">
//           {/* bottom left */}
//           <div className="flex flex-col md:flex-row justify-start items-center">
//             <p className="text-gray-400">
//             All Rights Reserved. {new Date().getFullYear()} tackletools &copy;
//             </p>
//             <div className="text-sm">
//               <a href="#" className="text-blue-500 hover:text-blue-400">
//                 Terms & Conditions
//               </a>
//               <span className="text-gray-400"> | </span>
//               <a href="#" className="text-blue-500 hover:text-blue-400">
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//           {/* bottom right */}
//           <div className="flex gap-2">
//             {/* Social Icons */}
//             <a href="#" className="text-gray-400 hover:text-blue-500">
//               <FaFacebookF size={16} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-pink-500">
//               <FaInstagram size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-green-500">
//               <FaWhatsapp size={20}/>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-blue-500">
//               <FaLinkedinIn size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaTwitter size={20} />
//             </a>
            
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Database,
  Palette,
  Target,
  Lock
} from "lucide-react";

const FloatingOrb = ({ delay = 0, size = "w-4 h-4" }) => (
  <div 
    className={`absolute ${size} rounded-full bg-gradient-to-r from-purple-400 to-orange-400 opacity-20 animate-float-3d`}
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group cursor-pointer
        transform transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 -translate-y-2' : ''}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`
        relative p-6 rounded-2xl border backdrop-blur-sm
        transition-all duration-500
        ${isHovered 
          ? 'bg-gradient-to-br from-purple-900/30 to-orange-900/30 border-purple-500/50 shadow-2xl shadow-purple-500/20' 
          : 'bg-neutral-900/50 border-neutral-700/50 hover:border-neutral-600/70'
        }
      `}>
        {/* Glowing background effect */}
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
          bg-gradient-to-r from-purple-500/10 via-transparent to-orange-500/10
        `} />
        
        <div className="relative z-10">
          <div className={`
            w-12 h-12 rounded-xl mb-4 flex items-center justify-center
            transition-all duration-500
            ${isHovered 
              ? 'bg-gradient-to-br from-purple-500 to-orange-500 scale-110' 
              : 'bg-neutral-800 group-hover:bg-neutral-700'
            }
          `}>
            <Icon className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-neutral-400'}`} />
          </div>
          
          <h3 className={`font-semibold mb-2 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-neutral-300'}`}>
            {title}
          </h3>
          
          <p className="text-sm text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon: Icon, href = "#", hoverColor = "hover:text-purple-400", platform }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative w-12 h-12 rounded-full border border-neutral-700 
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${hoverColor}
        ${isHovered 
          ? 'transform -translate-y-1 scale-110 border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-orange-900/30' 
          : 'bg-neutral-900/50 hover:border-neutral-600'
        }
      `}
      title={platform}
    >
      {/* Ripple effect */}
      <div className={`
        absolute inset-0 rounded-full transition-all duration-300
        ${isHovered ? 'bg-gradient-to-r from-purple-500/20 to-orange-500/20 scale-110' : ''}
      `} />
      
      <Icon className={`w-5 h-5 relative z-10 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
    </a>
  );
};

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: "Website",
      description: "Custom websites that captivate and convert visitors into customers"
    },
    {
      icon: Zap,
      title: "Application", 
      description: "Powerful applications built for performance and user experience"
    },
    {
      icon: Palette,
      title: "Multimedia",
      description: "Creative multimedia solutions that bring your brand to life"
    },
    {
      icon: Database,
      title: "Database",
      description: "Secure and scalable database solutions for your business needs"
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Strategic marketing campaigns that drive growth and engagement"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enterprise-grade security solutions to protect your digital assets"
    }
  ];

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-orange-900/10" />
        
        {/* Floating orbs */}
        {[...Array(30)].map((_, i) => (
          <FloatingOrb 
            key={i} 
            delay={i * 0.3} 
            size={Math.random() > 0.7 ? "w-6 h-6" : "w-3 h-3"}
          />
        ))}
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section - CTA */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-purple-500/20 bg-purple-500/5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Transform Your Business
              </span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Ready to take your business to the </span>
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
                next level?
              </span>
            </h2>
            
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Empowering businesses through technology and innovation. 
              Providing Website, Application, and eCommerce solutions tailored to your needs.
            </p>
            
            {/* CTA Button */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <button className="relative bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                <div className="flex items-center gap-2">
                  <span>Get Started</span>
                  <Zap className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Services Horizontal Widget */}
        <div className="container mx-auto px-6 py-12">
          <div className="relative bg-gradient-to-r from-neutral-900/30 via-neutral-800/20 to-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/30">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-purple-500/5 rounded-2xl" />
            
            {/* Services horizontal scroll */}
            <div className="relative overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-2" style={{ minWidth: 'max-content' }}>
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group flex-shrink-0 w-40 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative p-4 rounded-xl border border-neutral-700/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-orange-900/20 hover:scale-105 hover:-translate-y-1">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-neutral-800 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-orange-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <service.icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-medium text-sm text-neutral-300 group-hover:text-white transition-colors duration-300 mb-1">
                          {service.title}
                        </h3>
                        
                        {/* Mini description */}
                        <p className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-400 transition-colors duration-300 line-clamp-2">
                          {service.description.split(' ').slice(0, 6).join(' ')}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center mt-4 gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === 0 ? 'bg-purple-400 w-4' : 'bg-neutral-600'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Left side - Copyright and links */}
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <p className="text-neutral-400">
                  All Rights Reserved. {new Date().getFullYear()} tackletools &copy;
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Terms & Conditions
                  </a>
                  <span className="text-neutral-600">|</span>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* Right side - Social icons */}
              <div className="flex items-center gap-4">
                <SocialIcon 
                  icon={Facebook} 
                  hoverColor="hover:text-blue-500" 
                  platform="Facebook"
                />
                <SocialIcon 
                  icon={Instagram} 
                  hoverColor="hover:text-pink-500" 
                  platform="Instagram"
                />
                <SocialIcon 
                  icon={MessageCircle} 
                  hoverColor="hover:text-green-500" 
                  platform="WhatsApp"
                />
                <SocialIcon 
                  icon={Linkedin} 
                  hoverColor="hover:text-blue-600" 
                  platform="LinkedIn"
                />
                <SocialIcon 
                  icon={Twitter} 
                  hoverColor="hover:text-sky-400" 
                  platform="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 w-12 h-12 rounded-full
          bg-gradient-to-r from-purple-500 to-orange-500
          text-white shadow-2xl
          transition-all duration-300 ease-out z-50
          ${showBackToTop 
            ? 'transform translate-y-0 opacity-100 scale-100' 
            : 'transform translate-y-16 opacity-0 scale-50 pointer-events-none'
          }
          hover:scale-110 hover:shadow-purple-500/25
        `}
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotateY(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotateY(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-40px) translateX(-5px) rotateY(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-20px) translateX(-10px) rotateY(270deg) scale(1.05); 
          }
        }
        
        .animate-float-3d {
          animation: float-3d 12s ease-in-out infinite;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
};

export default Footer;