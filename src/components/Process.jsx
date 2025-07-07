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

const Process = () => {
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
    <div className="min-h-screen bg-black text-gray-300 overflow-hidden font-sans">
      {/* Process Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-pink-600/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            id="process-header"
            data-animate
            className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 ${
              isVisible["process-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1.5 mb-3 sm:mb-4 border border-gray-700/50">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-gray-300">
                Streamlined Process
              </span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              <span className="text-white">How We</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build
              </span>{" "}
              <span className="text-white">Success</span>
            </h2>
            <p className="text-sm sm:text-base md:text-md lg:text-lg text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
              Our proven 5-step methodology delivers exceptional results on time
              and within budget
            </p>
          </div>

          {/* Main Process Container */}
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-800/50 p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
            {/* Progress Bar */}
            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <div className="flex justify-between items-center px-2 sm:px-0">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative z-10 cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        index <= activeStep
                          ? `bg-gradient-to-r ${step.color} shadow-lg shadow-purple-500/25 scale-110`
                          : "bg-gray-800/80 border border-gray-700/50 group-hover:bg-gray-700/80"
                      }`}
                    >
                      {index <= activeStep ? (
                        <CheckCircle className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                      ) : (
                        <span className="text-gray-400 font-bold text-xs sm:text-sm md:text-base">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    {/* Step label for larger screens */}
                    <div className="hidden md:block absolute top-full mt-2 left-1/2 transform -translate-x-1/2">
                      <span className={`text-xs lg:text-sm font-medium whitespace-nowrap ${
                        index <= activeStep ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Progress Line */}
              <div className="absolute top-3 xs:top-3.5 sm:top-4 md:top-5 lg:top-6 left-5 xs:left-6 sm:left-8 md:left-10 lg:left-12 right-5 xs:right-6 sm:right-8 md:right-10 lg:right-12 h-0.5 bg-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
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
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${processSteps[activeStep].color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    {React.createElement(processSteps[activeStep].icon, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white",
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {processSteps[activeStep].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-gray-400">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{processSteps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm md:text-base font-semibold text-purple-300 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 text-gray-300 text-sm sm:text-base"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
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
                      className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-500 cursor-pointer group ${
                        index === activeStep
                          ? "bg-gray-800/60 border border-gray-700/60 shadow-lg"
                          : "bg-gray-900/20 border border-gray-800/30 hover:bg-gray-800/30 hover:border-gray-700/50"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:scale-110 ${
                          index === activeStep
                            ? `bg-gradient-to-r ${step.color} shadow-lg`
                            : "bg-gray-800/60 border border-gray-700/50"
                        }`}
                      >
                        {React.createElement(step.icon, {
                          className: `w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400"
                          }`,
                        })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-semibold text-sm sm:text-base md:text-lg transition-colors ${
                            index === activeStep
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-500 line-clamp-2 sm:line-clamp-1">
                          {step.description}
                        </p>
                      </div>
                      {index === activeStep && (
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-gray-800/50 text-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
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

export default Process;