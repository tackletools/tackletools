import React, { useState } from "react";
import {
  Monitor,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  ArrowRight,
  Zap,
  Shield,
  CreditCard,
  BarChart3,
  Brain,
  TrendingUp,
  ChevronRight,
  Wallet,
  CheckCircle,
  Database,
  Smartphone,
  Landmark,
  HandCoins,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const Fintech = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Digital Banking Platforms",
      description:
        "Next-generation banking solutions with real-time transactions, AI-powered insights, and seamless user experiences",
      icon: <Landmark className="w-5 h-5" />,
      features: [
        "Real-time Payments",
        "Account Management",
        "Digital Onboarding",
      ],
    },
    {
      title: "Payment Processing Systems",
      description:
        "Secure, scalable payment infrastructure with multi-currency support, fraud detection, and instant settlements",
      icon: <CreditCard className="w-5 h-5" />,
      features: [
        "Multi-currency Support",
        "Fraud Detection",
        "Instant Settlements",
      ],
    },
    {
      title: "Wealth Management Tools",
      description:
        "Comprehensive investment platforms with portfolio analytics, risk assessment, and automated trading capabilities",
      icon: <TrendingUp className="w-5 h-5" />,
      features: ["Portfolio Analytics", "Risk Assessment", "Automated Trading"],
    },
    {
      title: "Lending & Credit Solutions",
      description:
        "Smart lending platforms with AI-driven credit scoring, automated underwriting, and risk management tools",
      icon: <HandCoins className="w-5 h-5" />,
      features: [
        "AI Credit Scoring",
        "Automated Underwriting",
        "Risk Management",
      ],
    },
    {
      title: "Mobile Banking Apps",
      description:
        "Feature-rich mobile applications with biometric authentication, push notifications, and offline capabilities",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Biometric Auth", "Push Notifications", "Offline Mode"],
    },
    {
      title: "RegTech & Compliance",
      description:
        "Regulatory technology solutions with automated compliance monitoring, AML/KYC verification, and audit trails",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: [
        "Compliance Monitoring",
        "AML/KYC Verification",
        "Audit Trails",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Financial Analysis & Strategy",
      description:
        "We analyze your business model, regulatory requirements, and market positioning to design optimal fintech solutions",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Security-First Architecture",
      description:
        "Bank-grade security architecture with encryption, tokenization, and multi-layer authentication protocols",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Integration & Data Migration",
      description:
        "Seamless integration with core banking systems, payment networks, and third-party financial services",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Compliance",
      description:
        "Rigorous testing including penetration testing, regulatory compliance validation, and performance optimization",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Monitoring",
      description:
        "Secure deployment with real-time monitoring, 24/7 support, and continuous security updates",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Blockchain", category: "Ledger" },
    { name: "AWS", category: "Cloud" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Kafka", category: "Streaming" },
    { name: "Docker", category: "Container" },
  ];

  const testimonials = [
    {
      name: "David Kumar",
      role: "CTO",
      company: "NextGen Bank",
      quote:
        "TackleTools revolutionized our digital banking platform. Transaction processing speed increased by 300% and customer satisfaction improved by 90% with their seamless UX design.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "Head of Operations",
      company: "PayFlow Solutions",
      quote:
        "The payment processing system reduced transaction failures by 95% and improved our compliance posture significantly. Outstanding technical expertise.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Director",
      company: "WealthTech Pro",
      quote:
        "Their wealth management platform helped us launch robo-advisory services 6 months ahead of schedule. The AI-powered insights are game-changing.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What fintech solutions do you specialize in?",
      answer:
        "We specialize in digital banking platforms, payment processing systems, wealth management tools, lending solutions, mobile banking apps, and RegTech compliance solutions for financial institutions of all sizes.",
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer:
        "We implement comprehensive compliance frameworks including PCI DSS, SOX, GDPR, and regional banking regulations. Our solutions include automated compliance monitoring, audit trails, and regulatory reporting capabilities.",
    },
    {
      question:
        "What's your typical development timeline for fintech projects?",
      answer:
        "Fintech projects typically range from 16-32 weeks depending on complexity and regulatory requirements. We use agile methodology with continuous security reviews and compliance checkpoints.",
    },
    {
      question: "Can you integrate with existing banking infrastructure?",
      answer:
        "Yes, we have extensive experience integrating with core banking systems, payment networks, clearing houses, and various financial service providers through secure APIs and industry-standard protocols.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer:
        "We implement bank-grade security with end-to-end encryption, tokenization, multi-factor authentication, and zero-trust architecture. All solutions are designed with privacy-by-design principles and regular security audits.",
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
                Transform
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                  {" "}
                  Financial Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools empowers financial institutions with cutting-edge
                digital banking solutions, secure payment processing, and
                intelligent wealth management platforms that drive innovation
                and enhance customer experiences.
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
                    <Landmark className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Digital Banking Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      AI-Powered Insights
                      <br />
                      Real-time Transactions
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
              The Future of Financial Services
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Financial technology is revolutionizing how we bank, invest, and
              manage money with digital-first experiences, blockchain
              innovation, and AI-powered personalization. Modern financial
              institutions need integrated platforms that deliver seamless
              customer journeys while maintaining the highest security
              standards. TackleTools creates innovative solutions that bridge
              traditional banking with digital transformation, enabling
              financial services to compete in the modern marketplace with
              advanced analytics, automated compliance, and customer-centric
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Fintech Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern financial institutions
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
                    <Landmark className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Financial Services Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of banking operations, regulatory
                      requirements, and financial markets across all service
                      verticals and business models.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Bank-Grade Security
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Military-grade encryption, zero-trust architecture, and
                      comprehensive compliance with PCI DSS, SOX, and global
                      banking regulations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      AI-Powered Analytics
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Advanced machine learning for fraud detection, credit
                      scoring, risk assessment, and personalized financial
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Real-time Processing
                    </h3>
                    <p className="text-gray-400 text-sm">
                      High-performance architecture supporting millions of
                      transactions per second with sub-second response times and
                      99.99% uptime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Wallet className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Smart Wallet</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Secure Transactions
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
              A proven methodology for financial technology transformation
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
                  NextGen Bank: Digital Transformation Success
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive digital banking platform for
                  NextGen Bank that revolutionized their customer experience
                  with AI-powered insights, real-time transactions, and seamless
                  mobile banking.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      300%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Transaction Speed
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      90%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      95%
                    </div>
                    <div className="text-gray-400 text-xs">Fraud Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-1">
                      60%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Efficiency</div>
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
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Banking Dashboard</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Real-time Analytics
                        <br />
                        Transaction Monitoring
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
              Modern technologies powering financial innovation
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
              Real results from financial institutions worldwide
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
              Common questions about our fintech technology solutions
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

export default Fintech;
