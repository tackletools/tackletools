import React, { useState } from "react";
import {
  ChevronRight,
  Car,
  Wrench,
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
} from "lucide-react";
import { HelmetTags } from "../../utils/HelmetMetaTags";

const Automotive = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Used Car Marketplace",
      description:
        "Complete platform with VIN scanning, price comparison, and dealer management",
      icon: <Car className="w-5 h-5" />,
      features: ["VIN Decoder", "Price Analytics", "Dealer CRM"],
    },
    {
      title: "Service Booking Apps",
      description:
        "Mobile-first booking system with real-time scheduling and parts inventory",
      icon: <Calendar className="w-5 h-5" />,
      features: ["Real-time Booking", "Parts Tracking", "Service History"],
    },
    {
      title: "Car Rental Platforms",
      description:
        "End-to-end rental solution with fleet management and customer portal",
      icon: <Globe className="w-5 h-5" />,
      features: ["Fleet Management", "Customer Portal", "Payment Gateway"],
    },
    {
      title: "Garage CRM Systems",
      description:
        "Comprehensive workshop management with inventory and customer relations",
      icon: <Wrench className="w-5 h-5" />,
      features: [
        "Workshop Management",
        "Inventory Control",
        "Customer Database",
      ],
    },
    {
      title: "Digital Dashboards",
      description: "IoT-enabled vehicle monitoring with real-time diagnostics",
      icon: <Smartphone className="w-5 h-5" />,
      features: [
        "Real-time Monitoring",
        "Diagnostics",
        "Performance Analytics",
      ],
    },
    {
      title: "Parts Management",
      description:
        "Supply chain optimization with automated ordering and tracking",
      icon: <Database className="w-5 h-5" />,
      features: ["Supply Chain", "Auto Ordering", "Tracking System"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your automotive business requirements and current systems",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Custom architecture design with 3D visualization and user experience mapping",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Agile development with real-time progress tracking and API integrations",
      icon: <Wrench className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description:
        "Comprehensive testing including load testing and security audits",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "Go-live support with ongoing maintenance and feature updates",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Tailwind", category: "CSS" },
    { name: "PHP", category: "Backend" },
    { name: "Firebase", category: "Database" },
    { name: "Node.js", category: "Runtime" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, AutoMax",
      company: "AutoMax",
      quote:
        "TackleTools transformed our operations. The custom CRM increased our sales by 40%.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Manager",
      company: "QuickFix",
      quote:
        "The service booking app revolutionized our appointments. Customer satisfaction is at an all-time high.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Founder",
      company: "CarShare Pro",
      quote:
        "Their platform helped us scale from 50 to 500 vehicles. The analytics dashboard is incredibly powerful.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What automotive solutions do you specialize in?",
      answer:
        "We specialize in dealership management systems, service booking platforms, car rental solutions, garage CRM systems, and IoT-enabled vehicle monitoring dashboards.",
    },
    {
      question: "How do you integrate 3D models and visualizations?",
      answer:
        "We use Three.js, WebGL, and modern browsers' capabilities to create interactive 3D car models, parts visualizations, and animated dashboards.",
    },
    {
      question: "What's your typical project timeline?",
      answer:
        "Projects typically range from 8-16 weeks depending on complexity. We follow agile methodology with 2-week sprints and regular feedback.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive support including regular updates, security patches, feature enhancements, and 24/7 technical support.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely. We have experience integrating with major automotive APIs, dealership management systems, and third-party services.",
    },
  ];

  return (
    <>
    {HelmetTags.Automotive}
    
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-purple-900 to-orange-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Drive Innovation in the
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text">
                  {" "}
                  Automotive Industry
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Transform your automotive business with cutting-edge digital
                solutions. From dealership management to IoT-enabled vehicle
                monitoring.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-purple-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative pt-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">3D Car Model Integration</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Three.js / glTF Model<br />
                      Interactive 360° Rotation
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
              Digital Transformation in Automotive
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The automotive industry is rapidly evolving with digital
              innovation. Modern consumers expect seamless online experiences,
              from virtual car tours to instant service bookings. Our solutions
              bridge traditional automotive practices with cutting-edge
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Automotive Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for the automotive industry
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg mb-3 sm:mb-4 group-hover:from-purple-500 group-hover:to-orange-500 transition-all">
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
                      <ChevronRight className="w-3 h-3 text-purple-400" />
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Industry Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of automotive workflows, compliance
                      requirements, and industry standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full p-1.5 flex-shrink-0">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Latest technologies including 3D visualization, IoT
                      integration, and real-time analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Built to grow with your business, from small garages to
                      large dealership networks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full p-1.5 flex-shrink-0">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Rapid Deployment
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fast implementation with minimal disruption to your
                      existing operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-orange-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Wrench className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">3D Engine Animation</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Interactive Parts Visualization
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
              A proven methodology for delivering automotive solutions
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  AutoMax Dealership: 300% ROI in 6 Months
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We transformed AutoMax's outdated systems into a modern,
                  integrated platform featuring real-time inventory management,
                  customer CRM, and interactive vehicle showcases.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text mb-1">
                      40%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Increase in Sales
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text mb-1">
                      60%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Faster Processing
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text mb-1">
                      25%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text mb-1">
                      95%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Customer Satisfaction
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Car className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Interactive 3D Preview
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Configuration Tool
                        <br />
                        Real-time Pricing
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
              Cutting-edge technologies powering our solutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-purple-500 group-hover:to-orange-500 transition-all text-sm">
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
              Real results from real automotive businesses
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
                  <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
                    <div className="text-xs text-purple-400">
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
              Common questions about our automotive solutions
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
    </>
  );
};

export default Automotive;