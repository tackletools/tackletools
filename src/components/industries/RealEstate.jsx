import React, { useState } from "react";
import {
  Monitor,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  ArrowRight,
  Zap,
  Search,
  BarChart3,
  Brain,
  TrendingUp,
  ChevronRight,
  Home,
  CheckCircle,
  Database,
  Smartphone,
  Building,
  MapPin,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";

const RealEstate = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Property Management Systems",
      description:
        "Comprehensive property management platforms with tenant screening, lease management, maintenance tracking, and automated rent collection",
      icon: <Building className="w-5 h-5" />,
      features: [
        "Tenant Screening",
        "Lease Management",
        "Maintenance Tracking",
      ],
    },
    {
      title: "Real Estate CRM & Sales",
      description:
        "Advanced CRM solutions with lead management, deal tracking, automated follow-ups, and commission management for real estate professionals",
      icon: <Users className="w-5 h-5" />,
      features: [
        "Lead Management",
        "Deal Tracking",
        "Commission Management",
      ],
    },
    {
      title: "Property Search & Listings",
      description:
        "Intelligent property search platforms with advanced filtering, virtual tours, neighborhood insights, and personalized recommendations",
      icon: <Search className="w-5 h-5" />,
      features: ["Advanced Search", "Virtual Tours", "Neighborhood Data"],
    },
    {
      title: "Investment Analysis Tools",
      description:
        "Professional investment analysis platforms with ROI calculators, market analytics, cash flow projections, and risk assessments",
      icon: <TrendingUp className="w-5 h-5" />,
      features: [
        "ROI Calculators",
        "Market Analytics",
        "Cash Flow Analysis",
      ],
    },
    {
      title: "Mobile Real Estate Apps",
      description:
        "Feature-rich mobile applications with property alerts, document signing, photo management, and client communication tools",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Property Alerts", "Document Signing", "Photo Management"],
    },
    {
      title: "PropTech & IoT Solutions",
      description:
        "Smart property technology with IoT sensors, automated lighting, security systems, and energy management for modern buildings",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: [
        "IoT Integration",
        "Smart Security",
        "Energy Management",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Market Research & Analysis",
      description:
        "We analyze local real estate markets, user behavior patterns, and industry trends to design optimal property technology solutions",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Data-Driven Architecture",
      description:
        "Build robust data architecture with MLS integration, property databases, and real-time market data synchronization",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Platform Development",
      description:
        "Develop custom platforms with advanced search capabilities, virtual tour integration, and seamless user experiences",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Comprehensive testing including user experience optimization, performance tuning, and mobile responsiveness validation",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "Strategic launch with ongoing support, analytics monitoring, and continuous feature enhancements based on user feedback",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Maps API", category: "Mapping" },
    { name: "Redis", category: "Cache" },
    { name: "Elasticsearch", category: "Search" },
    { name: "WebRTC", category: "Video" },
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      role: "CEO",
      company: "Premier Properties",
      quote:
        "TackleTools transformed our property management operations. Our tenant satisfaction increased by 85% and maintenance response time improved by 70% with their intelligent platform.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Broker",
      company: "Urban Realty Group",
      quote:
        "The CRM system increased our lead conversion rate by 60% and automated follow-ups saved us 20 hours per week. Exceptional real estate technology expertise.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Investment Manager",
      company: "Capital Real Estate",
      quote:
        "Their investment analysis tools helped us identify profitable opportunities 3x faster. The ROI calculators and market insights are incredibly accurate and valuable.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What real estate solutions do you specialize in?",
      answer:
        "We specialize in property management systems, real estate CRM platforms, property search portals, investment analysis tools, mobile apps, and PropTech solutions for real estate professionals, investors, and property management companies.",
    },
    {
      question: "How do you integrate with MLS and property databases?",
      answer:
        "We have extensive experience integrating with major MLS systems, property databases, and real estate APIs. Our solutions support real-time data synchronization, automated listing updates, and seamless data flow between platforms.",
    },
    {
      question: "What's your typical development timeline for real estate projects?",
      answer:
        "Real estate projects typically range from 12-24 weeks depending on complexity and integrations required. We use agile methodology with regular demos and client feedback sessions throughout development.",
    },
    {
      question: "Can you create custom property search and filtering features?",
      answer:
        "Yes, we develop advanced search capabilities with custom filters, map-based search, neighborhood insights, price predictions, and personalized recommendations using machine learning algorithms.",
    },
    {
      question: "Do you provide mobile app development for real estate?",
      answer:
        "We create native and cross-platform mobile apps with features like property alerts, document signing, virtual tours, lead management, and offline capabilities for real estate professionals and clients.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-orange-900 to-red-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Revolutionize
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  {" "}
                  Real Estate Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools empowers real estate professionals with cutting-edge
                property management systems, intelligent search platforms, and
                comprehensive CRM solutions that streamline operations and
                enhance client experiences.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-4 sm:p-6 border border-orange-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Property Management Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Smart Analytics
                      <br />
                      Automated Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-8 sm:py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              The Future of Real Estate Technology
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Real estate technology is transforming how properties are bought,
              sold, and managed with AI-powered valuations, virtual reality
              tours, and intelligent property management systems. Modern real
              estate professionals need integrated platforms that deliver
              seamless client experiences while optimizing operational
              efficiency. TackleTools creates innovative PropTech solutions
              that bridge traditional real estate practices with digital
              transformation, enabling professionals to compete in the modern
              marketplace with advanced analytics, automated workflows, and
              data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Real Estate Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern real estate professionals
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg mb-3 sm:mb-4 group-hover:from-orange-500 group-hover:to-red-500 transition-all">
                  {solution.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm">
                  {solution.description}
                </p>
                <ul className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-1.5 flex-shrink-0">
                    <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Real Estate Industry Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of real estate operations, market
                      dynamics, and industry regulations across residential,
                      commercial, and investment properties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-1.5 flex-shrink-0">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Advanced Location Intelligence
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Sophisticated mapping and location analytics with
                      neighborhood insights, demographic data, and property
                      valuation models.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      AI-Powered Property Analytics
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Machine learning algorithms for property valuations, market
                      predictions, investment analysis, and personalized property
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Seamless Integrations
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Smooth integration with MLS systems, property databases,
                      CRM platforms, and third-party real estate services for
                      unified operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-4 sm:p-6 border border-orange-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Search className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Property Search</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Advanced Filtering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Development Process
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              A proven methodology for real estate technology transformation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-1.5">
                      {step.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="bg-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div>
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Premier Properties: Management Platform Success
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive property management platform for
                  Premier Properties that streamlined their operations with
                  automated rent collection, intelligent maintenance scheduling,
                  and tenant communication tools.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-1">
                      85%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Tenant Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-1">
                      70%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Faster Maintenance
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-1">
                      40%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-1">
                      95%
                    </div>
                    <div className="text-gray-400 text-xs">Rent Collection</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-4 sm:p-6 border border-orange-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Management Dashboard</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Property Analytics
                        <br />
                        Tenant Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Modern technologies powering real estate innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-orange-500 group-hover:to-red-500 transition-all text-sm">
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-sm font-semibold mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Real results from real estate professionals worldwide
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black rounded-lg p-4 sm:p-6 border border-gray-800"
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-orange-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Common questions about our real estate technology solutions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-800"
              >
                <button
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm sm:text-base font-semibold pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 py-2">
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;