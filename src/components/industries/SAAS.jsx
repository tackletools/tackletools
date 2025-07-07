import React, { useState } from "react";
import {
  ChevronRight,
  Cloud,
  Users,
  Calendar,
  BarChart3,
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
  Layers,
  Settings,
  TrendingUp,
  MessageSquare,
  CreditCard,
  Lock,
  Rocket,
  Brain,
} from "lucide-react";

const SaaS = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Customer Relationship Management",
      description:
        "Complete CRM platform with lead tracking, sales pipeline, and customer analytics",
      icon: <Users className="w-5 h-5" />,
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
    },
    {
      title: "Project Management Suite",
      description:
        "Comprehensive project tracking with team collaboration and resource management",
      icon: <Calendar className="w-5 h-5" />,
      features: ["Task Management", "Team Collaboration", "Resource Planning"],
    },
    {
      title: "Business Intelligence Platform",
      description:
        "Advanced analytics and reporting with real-time data visualization",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Real-time Analytics", "Custom Dashboards", "Data Insights"],
    },
    {
      title: "Communication & Collaboration",
      description:
        "Integrated messaging, video conferencing, and team collaboration tools",
      icon: <MessageSquare className="w-5 h-5" />,
      features: ["Team Chat", "Video Calls", "File Sharing"],
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions with automated deployment and monitoring",
      icon: <Cloud className="w-5 h-5" />,
      features: ["Auto-scaling", "Monitoring", "DevOps Integration"],
    },
    {
      title: "Financial Management",
      description:
        "Complete accounting and financial tracking with invoicing and payments",
      icon: <CreditCard className="w-5 h-5" />,
      features: ["Invoicing", "Payment Processing", "Financial Reports"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "We analyze your business needs and current workflow to design the perfect SaaS solution",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Cloud-native architecture with microservices, APIs, and scalable database design",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous integration and comprehensive testing",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Security & Compliance",
      description:
        "Enterprise-grade security implementation with compliance certifications",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Deployment & Scaling",
      description:
        "Cloud deployment with auto-scaling, monitoring, and ongoing optimization",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "GraphQL", category: "API" },
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO",
      company: "TechFlow",
      quote:
        "TackleTools built our entire SaaS platform. We've scaled from 100 to 10,000 users seamlessly.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "CEO",
      company: "DataSync",
      quote:
        "The analytics dashboard they created transformed how we understand our customers. ROI was immediate.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      company: "CloudBase",
      quote:
        "Their cloud infrastructure expertise saved us months of development time. Highly recommended.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What types of SaaS applications do you build?",
      answer:
        "We build a wide range of SaaS applications including CRM systems, project management tools, business intelligence platforms, communication tools, and custom enterprise solutions.",
    },
    {
      question: "How do you ensure scalability and performance?",
      answer:
        "We use cloud-native architecture with microservices, auto-scaling infrastructure, CDN integration, and performance monitoring to ensure your SaaS can handle growth from hundreds to millions of users.",
    },
    {
      question: "What's your typical SaaS development timeline?",
      answer:
        "SaaS projects typically range from 12-24 weeks depending on complexity. We use agile methodology with 2-week sprints and provide regular demos and updates.",
    },
    {
      question: "Do you handle security and compliance?",
      answer:
        "Yes, we implement enterprise-grade security including data encryption, authentication, authorization, and help with compliance requirements like GDPR, HIPAA, and SOC 2.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely. We have extensive experience integrating with CRMs, ERPs, payment systems, and third-party APIs. We can also build custom APIs for your specific needs.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-purple-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Build Powerful
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  {" "}
                  SaaS Solutions
                </span>
                <br />
                That Scale
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Transform your business idea into a scalable SaaS platform. From MVP to enterprise-grade solutions with cloud infrastructure and modern architecture.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Cloud className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Cloud-Native Architecture</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Microservices / Kubernetes<br />
                      Auto-scaling Infrastructure
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
              The Future of Business is SaaS
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Software as a Service has revolutionized how businesses operate, offering scalability, accessibility, and cost-effectiveness. Our SaaS solutions are built with modern cloud-native architecture, ensuring your platform can grow from startup to enterprise scale while maintaining performance and security.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our SaaS Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive SaaS platforms for modern businesses
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-3 sm:mb-4 group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools for SaaS?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1.5 flex-shrink-0">
                    <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Cloud-Native Architecture
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Built for the cloud with microservices, containerization, and auto-scaling capabilities for unlimited growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Advanced security protocols, data encryption, and compliance with industry standards like SOC 2 and GDPR.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1.5 flex-shrink-0">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Scalable by Design
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Architecture that grows with your business, from MVP to millions of users without performance degradation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1.5 flex-shrink-0">
                    <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Rapid Time to Market
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Accelerated development with proven frameworks and deployment pipelines to get your SaaS to market faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Real-time Analytics</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Live Dashboard Preview
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
              Our SaaS Development Process
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              A proven methodology for building scalable SaaS platforms
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  TechFlow CRM: From Startup to 10K Users
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We built TechFlow's complete CRM platform from scratch, including customer management, sales pipeline, analytics dashboard, and mobile app. The platform now serves over 10,000 active users with 99.9% uptime.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">
                      10K+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Active Users
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Uptime
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">
                      50%
                    </div>
                    <div className="text-gray-400 text-xs">Faster Development</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">
                      $2M+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Revenue Generated
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Analytics Dashboard
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Real-time Metrics
                        <br />
                        Custom Reports
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
              Modern Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Cutting-edge technologies for scalable SaaS solutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-blue-500 group-hover:to-purple-500 transition-all text-sm">
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
              Success stories from SaaS companies we've helped build
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
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
              Common questions about our SaaS development services
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
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
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

export default SaaS;