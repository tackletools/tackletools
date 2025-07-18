import React, { useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
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
  Shield,
  BarChart3,
  CreditCard,
  Search,
  Zap,
  Truck,
} from "lucide-react";
import { HelmetTags } from "../../utils/HelmetMetaTags";

const EcommerceIndustries = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Multi-Vendor Marketplace",
      description:
        "Complete marketplace platform with vendor management, commission tracking, and advanced analytics",
      icon: <Globe className="w-5 h-5" />,
      features: ["Vendor Dashboard", "Commission System", "Multi-Store Management"],
    },
    {
      title: "Mobile Commerce Apps",
      description:
        "Native mobile apps with push notifications, offline browsing, and seamless checkout",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Push Notifications", "Offline Mode", "Mobile Payments"],
    },
    {
      title: "B2B eCommerce Platforms",
      description:
        "Enterprise-grade solutions with bulk ordering, custom pricing, and procurement tools",
      icon: <Users className="w-5 h-5" />,
      features: ["Bulk Orders", "Custom Pricing", "Procurement Tools"],
    },
    {
      title: "Inventory Management",
      description:
        "Real-time stock tracking with automated reordering and warehouse integration",
      icon: <Package className="w-5 h-5" />,
      features: ["Real-time Tracking", "Auto Reorder", "Warehouse Integration"],
    },
    {
      title: "Payment Solutions",
      description:
        "Secure payment gateways with multiple options, fraud detection, and PCI compliance",
      icon: <CreditCard className="w-5 h-5" />,
      features: ["Multiple Gateways", "Fraud Detection", "PCI Compliance"],
    },
    {
      title: "Analytics Dashboard",
      description:
        "Advanced analytics with sales insights, customer behavior, and performance metrics",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Sales Analytics", "Customer Insights", "Performance Metrics"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Analysis",
      description:
        "We analyze your business model, target audience, and competitive landscape",
      icon: <Search className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Platform Design",
      description:
        "Custom UX/UI design with conversion optimization and brand alignment",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Agile development with payment gateway integration and third-party APIs",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Security",
      description:
        "Comprehensive testing including security audits and performance optimization",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Optimization",
      description:
        "Go-live support with ongoing optimization and feature enhancements",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Shopify", category: "Platform" },
    { name: "Stripe", category: "Payments" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Redis", category: "Cache" },
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CEO, FashionHub",
      company: "FashionHub",
      quote:
        "TackleTools built us a marketplace that handles 10K+ daily orders. Revenue increased 250% in first year.",
      rating: 5,
    },
    {
      name: "Lisa Zhang",
      role: "Founder",
      company: "TechGadgets",
      quote:
        "The mobile app they developed has a 4.8 star rating and 60% of our sales now come from mobile.",
      rating: 5,
    },
    {
      name: "Mark Johnson",
      role: "Operations Director",
      company: "B2B Solutions",
      quote:
        "Their B2B platform streamlined our wholesale operations. Order processing time reduced by 70%.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What eCommerce platforms do you work with?",
      answer:
        "We work with all major platforms including Shopify, WooCommerce, Magento, and custom solutions. We also build headless commerce solutions using modern frameworks.",
    },
    {
      question: "How do you handle payment security?",
      answer:
        "We implement PCI DSS compliance, use secure payment gateways like Stripe and PayPal, and employ advanced fraud detection systems to protect transactions.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Yes, we specialize in integrations with ERP systems, CRM platforms, inventory management tools, and third-party APIs for seamless operations.",
    },
    {
      question: "What's included in ongoing support?",
      answer:
        "Our support includes security updates, performance monitoring, feature enhancements, payment gateway maintenance, and 24/7 technical support.",
    },
    {
      question: "How do you optimize for conversions?",
      answer:
        "We use A/B testing, heat mapping, conversion funnel analysis, and UX optimization techniques to maximize your store's conversion rates.",
    },
  ];

  return (
    <>
    {HelmetTags.EcommerceIndustries}
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-green-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                  {" "}
                  Next-Gen eCommerce
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Build powerful online stores that convert visitors into customers. 
                From marketplaces to mobile apps, we create eCommerce experiences that drive sales.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> View Demo
                </button>
              </div>
            </div>
            <div className="relative pt-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Interactive Store Preview</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Real-time Product Configurator<br />
                      Advanced Filtering & Search
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
              The Future of Online Commerce
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              eCommerce is evolving rapidly with new technologies and consumer expectations. 
              Modern shoppers demand seamless experiences across all devices, personalized recommendations, 
              and instant gratification. Our solutions combine cutting-edge technology with proven conversion strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our eCommerce Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Complete digital commerce solutions for modern businesses
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
                      Conversion Optimization
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Data-driven approach to maximize conversions with A/B testing, 
                      user behavior analysis, and proven UX patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Bank-level security with PCI compliance, fraud detection, 
                      and advanced encryption to protect customer data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Modern Technology
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Latest frameworks and tools including headless commerce, 
                      PWAs, and AI-powered personalization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      End-to-End Solutions
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Complete ecosystem including payments, logistics, inventory, 
                      and customer service integrations.
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
                    <p className="text-gray-400 text-sm">3D Product Visualization</p>
                    <p className="text-xs text-gray-500 mt-1">
                      360° Product Views
                      <br />
                      AR Try-On Features
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
              A proven methodology for launching successful online stores
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
                  FashionHub: From Startup to $10M Revenue
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We built FashionHub's multi-vendor marketplace from scratch, 
                  featuring advanced search, vendor management, and mobile-first design 
                  that now processes over 10,000 daily orders.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      250%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Revenue Growth
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      85%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Mobile Conversion
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      500+
                    </div>
                    <div className="text-gray-400 text-xs">Active Vendors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      4.9
                    </div>
                    <div className="text-gray-400 text-xs">
                      App Store Rating
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
                      <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Multi-Vendor Dashboard
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Real-time Analytics
                        <br />
                        Automated Payouts
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
              Modern technologies for scalable eCommerce solutions
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
              Real success stories from thriving online businesses
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
              Common questions about our eCommerce solutions
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

export default EcommerceIndustries;