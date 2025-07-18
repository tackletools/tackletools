import React, { useRef, useEffect, useState } from "react";
import { HelmetTags } from '../../utils/HelmetMetaTags.jsx';

const DigitalMarketing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [conversions, setConversions] = useState(0);
  const heroRef = useRef(null);

  const metrics = [
    { label: "Revenue Generated", value: "$2.4M", change: "+347%", color: "green" },
    { label: "Click-Through Rate", value: "8.2%", change: "+156%", color: "blue" },
    { label: "Conversion Rate", value: "12.8%", change: "+289%", color: "purple" },
    { label: "ROAS", value: "4.7x", change: "+198%", color: "orange" }
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
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
    
    // Cycle through metrics
    const metricInterval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length);
    }, 3000);

    // Animate counters
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
      return timer;
    };

    const timer1 = animateCounter(setRevenue, 2400000);
    const timer2 = animateCounter(setClicks, 89234);
    const timer3 = animateCounter(setConversions, 11567);

    return () => {
      clearInterval(metricInterval);
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <>
      {HelmetTags.DigitalMarketing}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
        
        {/* Mouse Follower Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-white/10 via-white/3 to-transparent rounded-full pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 animate-float">
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-3 py-1 text-xs text-cyan-300">📈 +347% ROI</div>
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1 text-xs text-purple-300">🎯 2.4M Reach</div>
        </div>
        <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1 text-xs text-green-300">💰 $4.7 ROAS</div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '3s' }}>
          <div className="bg-gradient-to-r from-orange-400/20 to-red-400/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 py-1 text-xs text-orange-300">⚡ Real-time</div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col pt-12 md:pt-20">

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-400 mb-6 mt-4">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
                  <span>Scaling businesses worldwide</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">Grow Your</span>
                  <span className="block bg-gradient-to-r from-pink-400 via-orange-500 to-red-400 text-transparent bg-clip-text animate-gradient">
                    Digital
                  </span>
                  <span className="block text-gray-300">Empire</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                  Tackle your digital challenges with powerful tools that drive traffic, generate leads, and boost conversions. From SEO to social media, we craft strategies that deliver measurable results for your business.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">300%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Avg ROI Increase</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">2.4M+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Impressions Generated</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-500">Campaign Monitoring</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg font-medium text-white text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
                    Start Campaign
                  </button>
                  <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                    View Results
                  </button>
                  <button className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Free Audit
                  </button>
                </div>

              </div>

              {/* Right Content - Marketing Tool Stack */}
              <div className={`transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                <div className="relative space-y-4">
                  
                  {/* Tool Stack Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Our Marketing Arsenal</h3>
                    <p className="text-gray-400 text-sm">Powered by industry-leading tools</p>
                  </div>

                  {/* Main Tools Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Google Ads */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur border border-blue-500/20 rounded-xl p-4 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-blue-400 font-bold text-lg">G</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Google Ads</div>
                          <div className="text-blue-300 text-xs">PPC Management</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">Active Campaigns: 23</div>
                      <div className="bg-blue-500/20 rounded-full h-1">
                        <div className="bg-blue-400 h-1 rounded-full w-4/5"></div>
                      </div>
                    </div>

                    {/* Facebook Meta */}
                    <div className="bg-gradient-to-br from-blue-400/10 to-purple-500/10 backdrop-blur border border-blue-400/20 rounded-xl p-4 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center">
                          <span className="text-blue-300 font-bold text-lg">f</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Meta Ads</div>
                          <div className="text-blue-300 text-xs">Social Media</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">Reach: 2.4M users</div>
                      <div className="bg-blue-400/20 rounded-full h-1">
                        <div className="bg-blue-300 h-1 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    {/* HubSpot */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur border border-orange-500/20 rounded-xl p-4 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-orange-400 font-bold text-lg">H</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">HubSpot</div>
                          <div className="text-orange-300 text-xs">CRM & Email</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">Leads: 1,247 this month</div>
                      <div className="bg-orange-500/20 rounded-full h-1">
                        <div className="bg-orange-400 h-1 rounded-full w-5/6"></div>
                      </div>
                    </div>

                    {/* SEMrush */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur border border-green-500/20 rounded-xl p-4 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-green-400 font-bold text-lg">S</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">SEMrush</div>
                          <div className="text-green-300 text-xs">SEO Analytics</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">Keywords: 847 ranking</div>
                      <div className="bg-green-500/20 rounded-full h-1">
                        <div className="bg-green-400 h-1 rounded-full w-4/5"></div>
                      </div>
                    </div>

                  </div>

                  {/* Additional Tools Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-800/60 transition-all">
                      <div className="text-purple-400 text-lg mb-1">📊</div>
                      <div className="text-white text-xs font-medium">Analytics</div>
                      <div className="text-gray-400 text-xs">Google GA4</div>
                    </div>
                    <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-800/60 transition-all">
                      <div className="text-pink-400 text-lg mb-1">🎨</div>
                      <div className="text-white text-xs font-medium">Creative</div>
                      <div className="text-gray-400 text-xs">Canva Pro</div>
                    </div>
                    <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-800/60 transition-all">
                      <div className="text-cyan-400 text-lg mb-1">📧</div>
                      <div className="text-white text-xs font-medium">Email</div>
                      <div className="text-gray-400 text-xs">Mailchimp</div>
                    </div>
                  </div>

                  {/* Integration Badge */}
                  <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur border border-gray-600/30 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">All Systems Integrated</div>
                          <div className="text-gray-400 text-xs">Real-time data sync across platforms</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Floating Tool Icons */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full w-12 h-12 flex items-center justify-center animate-float">
                    <span className="text-blue-300 text-lg">⚡</span>
                  </div>

                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full w-10 h-10 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-green-300 text-sm">🚀</span>
                  </div>

                  <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full w-8 h-8 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-orange-300 text-xs">📈</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  </>
  );
};

export default DigitalMarketing;