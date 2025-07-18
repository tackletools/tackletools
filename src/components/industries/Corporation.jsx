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
  Building,
  CheckCircle,
  Database,
  Smartphone,
  Shield,
  MapPin,
  ShieldCheck,
  Rocket,
  Users,
  Settings,
  FileText,
  Globe,
  Briefcase,
  PieChart,
  Lock,
  Cloud,
} from "lucide-react";

const Corporation = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Enterprise Resource Planning",
      description:
        "Comprehensive ERP solutions with integrated modules for finance, HR, supply chain, and operations management to streamline business processes and improve efficiency",
      icon: <Settings className="w-5 h-5" />,
      features: [
        "Financial Management",
        "HR Integration",
        "Supply Chain",
      ],
    },
    {
      title: "Customer Relationship Management",
      description:
        "Advanced CRM platforms with lead management, sales pipeline automation, customer analytics, and multi-channel communication for enhanced customer relationships",
      icon: <Users className="w-5 h-5" />,
      features: [
        "Lead Management",
        "Sales Automation",
        "Customer Analytics",
      ],
    },
    {
      title: "Business Intelligence & Analytics",
      description:
        "Data-driven insights with real-time dashboards, predictive analytics, reporting tools, and KPI tracking to support strategic decision-making processes",
      icon: <PieChart className="w-5 h-5" />,
      features: ["Real-time Dashboards", "Predictive Analytics", "KPI Tracking"],
    },
    {
      title: "Document Management Systems",
      description:
        "Secure document repositories with version control, collaboration tools, workflow automation, and compliance management for efficient document handling",
      icon: <FileText className="w-5 h-5" />,
      features: [
        "Version Control",
        "Workflow Automation",
        "Compliance Management",
      ],
    },
    {
      title: "Corporate Portals & Intranets",
      description:
        "Employee-centric portals with knowledge management, internal communication tools, directory services, and self-service capabilities for improved productivity",
      icon: <Globe className="w-5 h-5" />,
      features: [
        "Knowledge Management",
        "Internal Communication",
        "Self-Service Portal",
      ],
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Enterprise-grade security with threat detection, access management, compliance monitoring, and incident response systems to protect corporate assets",
      icon: <Lock className="w-5 h-5" />,
      features: [
        "Threat Detection",
        "Access Management",
        "Compliance Monitoring",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Requirements Analysis",
      description:
        "We conduct comprehensive analysis of business processes, organizational structure, and technology requirements to design solutions that align with corporate objectives",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Enterprise Architecture Design",
      description:
        "Build scalable enterprise architecture with microservices, API integration, and cloud-native solutions that support business growth and operational efficiency",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Solution Development",
      description:
        "Develop robust corporate solutions with user-friendly interfaces, workflow automation, and integration capabilities using industry best practices",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Quality Assurance & Testing",
      description:
        "Comprehensive testing including security audits, performance testing, user acceptance testing, and compliance validation to ensure enterprise-grade quality",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Deployment & Support",
      description:
        "Strategic deployment with change management, user training, ongoing support, and continuous monitoring to ensure successful adoption and ROI",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Azure", category: "Cloud" },
    { name: "Kubernetes", category: "Container" },
    { name: "Redis", category: "Cache" },
    { name: "Docker", category: "DevOps" },
    { name: "Power BI", category: "Analytics" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "GlobalTech Corporation",
      quote:
        "TackleTools transformed our enterprise operations with a comprehensive ERP solution that increased productivity by 180% and reduced operational costs by 45%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "InnovateCore Industries",
      quote:
        "The business intelligence platform provided real-time insights that improved our decision-making process and increased quarterly revenue by 35%.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Information Officer",
      company: "Enterprise Solutions Inc.",
      quote:
        "Their cybersecurity implementation protected our corporate assets and achieved 100% compliance with industry regulations while improving system performance.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What corporate solutions do you specialize in?",
      answer:
        "We specialize in ERP systems, CRM platforms, business intelligence tools, document management systems, corporate portals, and cybersecurity solutions for enterprises, corporations, and large organizations across all industries.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement enterprise-grade security measures including encryption, access controls, audit trails, and compliance frameworks like GDPR, HIPAA, and SOX. Our solutions undergo rigorous security testing and regular compliance audits.",
    },
    {
      question: "What's your typical timeline for corporate projects?",
      answer:
        "Corporate projects typically range from 20-36 weeks depending on complexity and scale. We use agile methodology with phased delivery, regular stakeholder reviews, and iterative development to ensure alignment with business objectives.",
    },
    {
      question: "Can you integrate with existing corporate systems?",
      answer:
        "Yes, we have extensive experience integrating with legacy systems, third-party applications, and enterprise software like SAP, Oracle, Microsoft 365, Salesforce, and other corporate platforms through APIs and middleware solutions.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, performance optimization, user training, and dedicated support teams to ensure continuous business operations.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-cyan-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Empower
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  {" "}
                  Corporate Excellence
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools drives corporate transformation with enterprise-grade
                solutions including ERP systems, business intelligence platforms,
                and digital workflows that optimize operations, enhance productivity,
                and accelerate business growth across all organizational levels.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Enterprise Dashboard
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Real-time Analytics
                      <br />
                      Global Operations
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
              The Future of Corporate Technology
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Corporate technology is evolving rapidly with AI-powered automation,
              cloud-native architectures, and data-driven decision making that
              transforms how organizations operate and compete in the digital
              economy. Modern corporations need integrated solutions that provide
              real-time insights, streamline operations, and enable agile
              responses to market changes. TackleTools creates innovative
              corporate solutions that merge cutting-edge technology with
              business intelligence, enabling organizations to achieve operational
              excellence, drive growth, and maintain competitive advantage
              through digital transformation and strategic technology adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Corporate Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for enterprise transformation
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mb-3 sm:mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-1.5 flex-shrink-0">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Enterprise-Grade Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of corporate processes, enterprise
                      architecture, compliance requirements, and business
                      transformation strategies across all industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-1.5 flex-shrink-0">
                    <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Cloud-Native Architecture
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Modern cloud solutions with microservices architecture,
                      API-first design, and containerized deployments for
                      maximum scalability and flexibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      AI-Powered Business Intelligence
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Advanced analytics with machine learning algorithms for
                      predictive insights, automated reporting, and intelligent
                      decision support systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Enterprise Security & Compliance
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Bank-grade security with multi-factor authentication,
                      encryption, audit trails, and compliance frameworks
                      for regulated industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Business Analytics</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Real-time Insights
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
              A proven methodology for corporate digital transformation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  GlobalTech: Enterprise Transformation
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive ERP and business intelligence
                  platform for GlobalTech Corporation that streamlined operations
                  across 15 countries and improved decision-making with real-time
                  analytics.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
                      180%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Productivity Increase
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
                      $2M+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Annual Cost Savings
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-xs">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
                      45%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Reduction</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">ERP Dashboard</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Financial Analytics
                        <br />
                        Operational Metrics
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
              Enterprise-grade technologies powering corporate innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all text-sm">
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
              Real results from corporate leaders and enterprise organizations
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
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
              Common questions about our corporate technology solutions
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

export default Corporation;