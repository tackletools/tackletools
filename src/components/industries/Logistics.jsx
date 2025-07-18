import React, { useState } from "react";
import {
  ChevronRight,
  Truck,
  Package,
  Calendar,
  Users,
  Code,
  Database,
  Smartphone,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  MapPin,
  BarChart3,
  Warehouse,
  Route,
} from "lucide-react";

const Logistics = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Fleet Management Systems",
      description:
        "Complete vehicle tracking with route optimization, fuel monitoring, and driver management",
      icon: <Truck className="w-5 h-5" />,
      features: ["Real-time Tracking", "Route Optimization", "Fuel Analytics"],
    },
    {
      title: "Warehouse Management",
      description:
        "Smart inventory control with automated picking, packing, and shipping processes",
      icon: <Warehouse className="w-5 h-5" />,
      features: ["Inventory Control", "Automated Picking", "Barcode Scanning"],
    },
    {
      title: "Supply Chain Platforms",
      description:
        "End-to-end visibility with supplier management and demand forecasting",
      icon: <Globe className="w-5 h-5" />,
      features: [
        "Supplier Management",
        "Demand Forecasting",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Last-Mile Delivery",
      description:
        "Customer-focused delivery solutions with real-time tracking and notifications",
      icon: <Package className="w-5 h-5" />,
      features: [
        "Delivery Tracking",
        "Customer Notifications",
        "Route Planning",
      ],
    },
    {
      title: "Transportation Management",
      description:
        "Comprehensive TMS with load planning and carrier management",
      icon: <Route className="w-5 h-5" />,
      features: ["Load Planning", "Carrier Management", "Shipment Tracking"],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data-driven insights with KPI dashboards and predictive analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["KPI Dashboards", "Predictive Analytics", "Custom Reports"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Supply Chain Analysis",
      description:
        "We analyze your logistics operations and identify optimization opportunities",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "System Architecture",
      description:
        "Custom logistics platform design with real-time tracking and automation",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Integration & Development",
      description:
        "Seamless integration with existing systems and third-party logistics providers",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Comprehensive testing including load testing and performance optimization",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Deployment & Training",
      description:
        "Go-live support with comprehensive training and ongoing optimization",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS IoT", category: "IoT Platform" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "Kafka", category: "Streaming" },
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Operations Director",
      company: "GlobalFreight",
      quote:
        "TackleTools revolutionized our supply chain. We reduced delivery times by 35% and cut costs by 28%.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Logistics Manager",
      company: "QuickShip",
      quote:
        "The real-time tracking system transformed our customer experience. Complaints dropped by 60%.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "LogiTech Pro",
      quote:
        "Their warehouse management system increased our efficiency by 45%. ROI was achieved in just 4 months.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What logistics solutions do you specialize in?",
      answer:
        "We specialize in fleet management systems, warehouse management solutions, supply chain platforms, last-mile delivery optimization, and transportation management systems with real-time tracking.",
    },
    {
      question: "How do you integrate with existing logistics systems?",
      answer:
        "We have extensive experience integrating with major logistics platforms, ERP systems, and third-party logistics providers through APIs, EDI, and custom connectors.",
    },
    {
      question: "What's your typical implementation timeline?",
      answer:
        "Implementation typically ranges from 10-20 weeks depending on complexity and integrations required. We follow agile methodology with regular milestones and feedback loops.",
    },
    {
      question: "Do you provide IoT and tracking solutions?",
      answer:
        "Yes, we implement IoT solutions for real-time tracking, temperature monitoring, asset management, and predictive maintenance using modern sensor technologies.",
    },
    {
      question: "Can you handle multi-modal transportation?",
      answer:
        "Absolutely. Our solutions support road, rail, air, and sea transportation with unified tracking and management across all modes of transport.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-green-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform Your
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                  {" "}
                  Logistics Operations
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                "TackleTools powers smarter logistics — from fleet management to
                real-time tracking and warehouse automation."
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Real-time Fleet Tracking
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Live GPS Monitoring
                      <br />
                      Route Optimization
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
              Digital Innovation in Logistics
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              "The logistics industry is experiencing unprecedented
              transformation with IoT, AI, and automation technologies. Modern
              supply chains demand real-time visibility, predictive analytics,
              and seamless integration across all touchpoints. TackleTools
              delivers intelligent solutions and tools that empower logistics
              companies to optimize operations and exceed customer
              expectations."
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Logistics Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern logistics operations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg mb-3 sm:mb-4 group-hover:from-blue-500 group-hover:to-green-500 transition-all">
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
                      <ChevronRight className="w-3 h-3 text-blue-400" />
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-900/20 to-green-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Supply Chain Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of logistics workflows, compliance
                      requirements, and industry best practices across all
                      transportation modes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Real-time Visibility
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Advanced tracking and monitoring solutions with IoT
                      integration, predictive analytics, and automated alerts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Cloud-native solutions that scale from small fleets to
                      enterprise-level operations with global reach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Rapid Implementation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Quick deployment with minimal operational disruption and
                      comprehensive training programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Package className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Smart Warehouse</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Automated Inventory Management
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
              Our Implementation Process
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              A proven methodology for logistics transformation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  GlobalFreight: 400% Efficiency Boost
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We transformed GlobalFreight's logistics operations with an
                  integrated platform featuring real-time tracking, automated
                  dispatch, and predictive analytics for optimal route planning.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      35%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Faster Deliveries
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      28%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      45%
                    </div>
                    <div className="text-gray-400 text-xs">Fuel Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      99%
                    </div>
                    <div className="text-gray-400 text-xs">
                      On-time Delivery
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Route Optimization
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        AI-Powered Planning
                        <br />
                        Real-time Adjustments
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
              Modern technologies powering logistics innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-blue-500 group-hover:to-green-500 transition-all text-sm">
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
              Real results from logistics industry leaders
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
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
                    <div className="text-xs text-blue-400">
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
              Common questions about our logistics solutions
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

export default Logistics;
