import React, { useState, useEffect } from "react";
import {
  Zap,
  CheckCircle,
  Clock,
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
  Eye,
  Star
} from "lucide-react";

const UIUXDesign = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});

   const processSteps = [
    {
      title: "Discovery",
      icon: Lightbulb,
      color: "from-purple-500 to-blue-500",
      duration: "1-2 days",
      description: "We analyze your requirements and create a detailed project roadmap.",
      features: ["Requirements analysis", "Technical planning", "Timeline creation"]
    },
    {
      title: "Design",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      duration: "2-3 days",
      description: "Creating intuitive designs that align with your brand and goals.",
      features: ["UI/UX design", "Prototyping", "Design review"]
    },
    {
      title: "Development",
      icon: Code,
      color: "from-cyan-500 to-green-500",
      duration: "1-2 weeks",
      description: "Building your solution with clean, scalable, and maintainable code.",
      features: ["Frontend development", "Backend integration", "Testing"]
    },
    {
      title: "Testing",
      icon: Star,
      color: "from-green-500 to-yellow-500",
      duration: "2-3 days",
      description: "Rigorous testing to ensure quality and performance across all devices.",
      features: ["Quality assurance", "Performance testing", "Bug fixes"]
    },
    {
      title: "Launch",
      icon: Rocket,
      color: "from-yellow-500 to-pink-500",
      duration: "1 day",
      description: "Deploying your project and providing ongoing support.",
      features: ["Deployment", "Launch support", "Documentation"]
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-purple-900/20 to-[#111] text-gray-300 overflow-hidden font-inter">
      {/* Process Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-[#111] via-purple-900/10 to-[#111] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div
            id="process-header"
            data-animate
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible["process-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-3">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-gray-300">
                Streamlined Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              <span className="text-white">How We</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build
              </span>{" "}
              <span className="text-white">Success</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Our proven 5-step methodology delivers exceptional results on time
              and within budget
            </p>
          </div>

          {/* Main Process Container */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl">
            {/* Progress Bar */}
            <div className="relative mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative z-10 cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        index <= activeStep
                          ? `bg-gradient-to-r ${step.color} shadow-lg scale-110`
                          : "bg-white/10 border border-white/20"
                      }`}
                    >
                      {index <= activeStep ? (
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      ) : (
                        <span className="text-gray-400 font-bold text-xs sm:text-sm">
                          {index + 1}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Progress Line */}
              <div className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-5 lg:left-6 right-4 sm:right-5 lg:right-6 h-0.5 bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-1000 ease-out"
                  style={{
                    width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start">
              {/* Left Side - Step Details */}
              <div
                id="step-content"
                data-animate
                className={`transition-all duration-700 ${
                  isVisible["step-content"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${processSteps[activeStep].color} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(processSteps[activeStep].icon, {
                      className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                      {processSteps[activeStep].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{processSteps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  {processSteps[activeStep].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Steps Overview */}
              <div
                id="steps-overview"
                data-animate
                className={`transition-all duration-700 ${
                  isVisible["steps-overview"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="space-y-2 sm:space-y-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 cursor-pointer ${
                        index === activeStep
                          ? "bg-white/10 border border-white/20 shadow-lg"
                          : "bg-white/[0.02] border border-white/5 hover:bg-white/5"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          index === activeStep
                            ? `bg-gradient-to-r ${step.color} shadow-lg`
                            : "bg-white/10"
                        }`}
                      >
                        {React.createElement(step.icon, {
                          className: `w-4 h-4 ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400"
                          }`,
                        })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-semibold text-sm sm:text-base transition-colors ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">
                          {step.description}
                        </p>
                      </div>
                      {index === activeStep && (
                        <ArrowRight className="w-4 h-4 text-purple-400 animate-pulse flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-4 sm:pt-6 border-t border-white/10 text-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;