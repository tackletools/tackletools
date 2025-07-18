import React, { useState } from "react";
import {
  Monitor,
  Code,
  Database,
  Smartphone,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  ArrowRight,
  Zap,
  Shield,
  ShoppingCart,
  BarChart3,
  Brain,
  CreditCard,
  Package,
  Store,
  TrendingUp,
  Target,
  Lock,
  ChevronRight,
  Award,
} from "lucide-react";

const Retail = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "E-commerce Platforms",
      description:
        "Scalable online stores with advanced product catalogs, secure payments, and personalized shopping experiences",
      icon: <ShoppingCart className="w-5 h-5" />,
      features: ["Multi-channel Commerce", "Payment Processing", "Inventory Management"],
    },
    {
      title: "Point of Sale (POS) Systems",
      description:
        "Modern POS solutions with real-time inventory, customer management, and integrated payment processing",
      icon: <CreditCard className="w-5 h-5" />,
      features: ["Mobile POS", "Inventory Tracking", "Customer Database"],
    },
    {
      title: "Customer Loyalty Programs",
      description:
        "Comprehensive loyalty platforms with rewards management, personalized offers, and customer engagement tools",
      icon: <Award className="w-5 h-5" />,
      features: [
        "Rewards Management",
        "Personalized Offers",
        "Customer Segmentation",
      ],
    },
    {
      title: "Inventory Management",
      description:
        "Smart inventory solutions with predictive analytics, automated reordering, and multi-location support",
      icon: <Package className="w-5 h-5" />,
      features: [
        "Predictive Analytics",
        "Automated Reordering",
        "Multi-location Tracking",
      ],
    },
    {
      title: "Mobile Shopping Apps",
      description:
        "Native mobile applications with push notifications, mobile payments, and seamless shopping experiences",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Push Notifications", "Mobile Payments", "Offline Support"],
    },
    {
      title: "Business Intelligence",
      description:
        "Advanced analytics with sales forecasting, customer insights, and performance dashboards for data-driven decisions",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Sales Forecasting", "Customer Analytics", "Performance Dashboards"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Retail Strategy Analysis",
      description:
        "We analyze your business model, target customers, and market positioning to identify optimal digital solutions",
      icon: <Target className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Platform Architecture Design",
      description:
        "Scalable architecture with omnichannel capabilities, secure payment systems, and cloud-native infrastructure",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Integration & Migration",
      description:
        "Seamless integration with existing systems, data migration, and third-party service connections",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Comprehensive testing, performance optimization, and user experience validation across all touchpoints",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "Smooth go-live with staff training, ongoing optimization, and 24/7 technical support",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Stripe", category: "Payments" },
    { name: "AWS", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Elasticsearch", category: "Search" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Forward Boutique",
      quote:
        "TackleTools transformed our online presence. Our e-commerce sales increased by 180% and customer retention improved by 65% with their loyalty platform.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      company: "TechGear Electronics",
      quote:
        "The inventory management system reduced stockouts by 75% and improved our order fulfillment speed by 40%. Game-changing technology.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Director",
      company: "Home & Garden Plus",
      quote:
        "Their customer analytics platform helped us increase conversion rates by 85% through personalized marketing campaigns.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What retail solutions do you specialize in?",
      answer:
        "We specialize in e-commerce platforms, POS systems, customer loyalty programs, inventory management, mobile shopping apps, and business intelligence solutions for retail businesses of all sizes.",
    },
    {
      question: "How do you ensure secure payment processing?",
      answer:
        "We implement PCI DSS compliant payment systems with end-to-end encryption, tokenization, and fraud detection. We integrate with trusted payment providers like Stripe, PayPal, and Square.",
    },
    {
      question: "What's your typical development timeline for retail projects?",
      answer:
        "Retail projects typically range from 12-24 weeks depending on complexity and integrations. We use agile methodology with regular demos and iterative feedback cycles.",
    },
    {
      question: "Can you integrate with existing retail systems?",
      answer:
        "Yes, we have extensive experience integrating with ERP systems, accounting software, CRM platforms, and various retail management tools through APIs and custom connectors.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Absolutely. We offer 24/7 technical support, regular system updates, performance monitoring, and continuous optimization to ensure your retail platform runs smoothly.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-purple-900 to-pink-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  {" "}
                  Retail Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools empowers retail businesses with cutting-edge e-commerce solutions, intelligent inventory management, and customer-focused platforms that drive sales and enhance shopping experiences.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-purple-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Smart Commerce Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      AI-Powered Recommendations
                      <br />
                      Real-time Inventory Sync
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
              The Future of Digital Retail
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Retail is evolving with omnichannel experiences, AI-powered personalization, and seamless mobile commerce. Modern retailers need integrated platforms that connect online and offline touchpoints while delivering exceptional customer experiences. TackleTools creates innovative solutions that bridge traditional retail with digital transformation, enabling businesses to compete in the modern marketplace with advanced analytics, automated workflows, and customer-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Retail Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern retail businesses
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-3 sm:mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Retail Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of retail operations, customer behavior, and market trends across all retail verticals and business models.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Secure Payments
                    </h3>
                    <p className="text-gray-400 text-sm">
                      PCI DSS compliant payment processing with advanced fraud detection, tokenization, and secure customer data handling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      AI-Powered Insights
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Advanced analytics and machine learning for personalized recommendations, demand forecasting, and customer segmentation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Cloud-native architecture that grows with your business, from startup to enterprise with global reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Store className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Smart Store</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Omnichannel Experience
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
              A proven methodology for retail technology transformation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Fashion Forward: 300% Online Growth
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive omnichannel platform for Fashion Forward Boutique that integrated their online store, mobile app, and physical locations into a unified customer experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      180%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Online Sales Growth
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      65%
                    </div>
                    <div className="text-gray-400 text-xs">Customer Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      50%
                    </div>
                    <div className="text-gray-400 text-xs">Faster Checkout</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      40%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Inventory Efficiency
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        E-commerce Dashboard
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Real-time Analytics
                        <br />
                        Inventory Management
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
              Modern technologies powering retail innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-purple-500 group-hover:to-pink-500 transition-all text-sm">
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
              Real results from retail businesses worldwide
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
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
              Common questions about our retail technology solutions
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

export default Retail;