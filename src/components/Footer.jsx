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

const FloatingOrb = ({ delay = 0, size = "w-2 h-2" }) => (
  <div 
    className={`absolute ${size} rounded-full bg-gradient-to-r from-purple-400 to-orange-400 opacity-10 animate-float-3d`}
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

const ServiceItem = ({ icon: Icon, title, href = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    // You can replace this with your actual navigation logic
    // For example: router.push(href) for Next.js or navigate(href) for React Router
    console.log(`Navigating to: ${href}`);
    
    // For demonstration, we'll show an alert
    alert(`Would navigate to: ${href}`);
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer block"
    >
      <div className={`
        flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm
        transition-all duration-300 text-sm
        ${isHovered 
          ? 'bg-gradient-to-r from-purple-900/20 to-orange-900/20 border-purple-500/40 text-white transform scale-105' 
          : 'bg-neutral-900/30 border-neutral-700/40 text-neutral-400 hover:text-neutral-300'
        }
      `}>
        <Icon className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'text-purple-400 scale-110' : ''}`} />
        <span className="font-medium">{title}</span>
      </div>
    </a>
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
        relative w-8 h-8 rounded-full border border-neutral-700/50 
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${hoverColor}
        ${isHovered 
          ? 'transform -translate-y-1 scale-110 border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-orange-900/30' 
          : 'bg-neutral-900/30 hover:border-neutral-600'
        }
      `}
      title={platform}
    >
      <Icon className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
    </a>
  );
};

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { icon: Globe, title: "Website", href: "./components/services/WebDevelopment" },
    { icon: Zap, title: "Application", href: "./components/services/AppDevelopment" },
    { icon: Palette, title: "Multimedia", href: "./components/services/Multimedia" },
    { icon: Database, title: "Database", href: "./components/services/Database" },
    { icon: Target, title: "Marketing", href: "./components/services/DigitalMarketing" },
    { icon: Lock, title: "Security", href: "./components/services/CyberSecurity" }
  ];

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Minimal animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-black to-orange-900/5" />
        {[...Array(15)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.5} />
        ))}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main CTA Section - Compact */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/20 bg-purple-500/5">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400 text-xs font-medium uppercase tracking-wide">
                Transform Your Business
              </span>
            </div>
            
            {/* Main heading - Smaller */}
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              <span className="text-white">Ready to take your business to the </span>
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 text-transparent bg-clip-text">
                next level?
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-neutral-400 mb-6 leading-relaxed max-w-xl mx-auto">
              Empowering businesses through technology and innovation. 
              Providing Website, Application, and eCommerce solutions tailored to your needs.
            </p>
            
            {/* CTA Button - Smaller */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <button className="relative bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform group-hover:scale-105">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Get Started</span>
                  <Zap className="w-3 h-3" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section - Compact */}
        <div className="container mx-auto px-4 py-4">
          <div className="relative bg-gradient-to-r from-neutral-900/20 via-neutral-800/10 to-neutral-900/20 backdrop-blur-sm rounded-lg p-3 border border-neutral-700/20">
            {/* Services Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact */}
        <div className="border-t border-neutral-800/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              
              {/* Left side - Copyright and links */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <p className="text-neutral-400 text-sm">
                  © {new Date().getFullYear()} tackletools. All rights reserved.
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Terms
                  </a>
                  <span className="text-neutral-600">|</span>
                  <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Privacy
                  </a>
                </div>
              </div>

              {/* Right side - Social icons */}
              <div className="flex items-center gap-2">
                <SocialIcon 
                  icon={Facebook} 
                  href="https://www.facebook.com/share/19zHYoBuuT/"
                  hoverColor="hover:text-blue-500" 
                  platform="Facebook"
                />
                <SocialIcon 
                  icon={Instagram} 
                  href="https://www.instagram.com/tackletools.tech/"
                  hoverColor="hover:text-pink-500" 
                  platform="Instagram"
                />
                <SocialIcon 
                  icon={MessageCircle} 
                  href="https://wa.me/your-number"
                  hoverColor="hover:text-green-500" 
                  platform="WhatsApp"
                />
                <SocialIcon 
                  icon={Linkedin} 
                  href="https://linkedin.com/company/tackletools"
                  hoverColor="hover:text-blue-600" 
                  platform="LinkedIn"
                />
                <SocialIcon 
                  icon={Twitter} 
                  href="https://twitter.com/tackletools"
                  hoverColor="hover:text-sky-400" 
                  platform="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button - Smaller */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 w-10 h-10 rounded-full
          bg-gradient-to-r from-purple-500 to-orange-500
          text-white shadow-lg
          transition-all duration-300 ease-out z-50
          ${showBackToTop 
            ? 'transform translate-y-0 opacity-100 scale-100' 
            : 'transform translate-y-12 opacity-0 scale-50 pointer-events-none'
          }
          hover:scale-110 hover:shadow-purple-500/25
        `}
      >
        <ArrowUp className="w-4 h-4 mx-auto" />
      </button>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
          }
          50% { 
            transform: translateY(-15px) translateX(5px) scale(1.1); 
          }
        }
        
        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;