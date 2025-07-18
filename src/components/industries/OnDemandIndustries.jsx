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
  Smartphone,
  CheckCircle,
  Database,
  MapPin,
  Shield,
  Clock,
  ShieldCheck,
  Rocket,
  Users,
  Settings,
  FileText,
  Globe,
  Car,
  PieChart,
  Lock,
  Cloud,
  Truck,
  Home,
  ShoppingCart,
  Calendar,
  CreditCard,
  MessageSquare,
  Navigation,
  Bell,
} from "lucide-react";

const OnDemandIndustries = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Ride-Sharing & Transportation",
      description:
        "Complete ride-sharing platforms with driver-rider matching, real-time tracking, dynamic pricing, payment integration, and route optimization for seamless transportation experiences",
      icon: <Car className="w-5 h-5" />,
      features: [
        "Driver-Rider Matching",
        "Real-time GPS Tracking",
        "Dynamic Pricing",
      ],
    },
    {
      title: "Food Delivery Services",
      description:
        "End-to-end food delivery solutions with restaurant partnerships, order management, delivery tracking, payment processing, and customer feedback systems",
      icon: <Truck className="w-5 h-5" />,
      features: [
        "Restaurant Integration",
        "Order Management",
        "Delivery Tracking",
      ],
    },
    {
      title: "Home Services Platform",
      description:
        "Comprehensive home services marketplace connecting customers with verified professionals for cleaning, repairs, maintenance, and specialized services",
      icon: <Home className="w-5 h-5" />,
      features: [
        "Professional Verification",
        "Service Scheduling",
        "Quality Assurance",
      ],
    },
    {
      title: "Grocery & Shopping Apps",
      description:
        "On-demand grocery and shopping platforms with inventory management, personal shopping services, scheduled deliveries, and loyalty programs",
      icon: <ShoppingCart className="w-5 h-5" />,
      features: [
        "Inventory Management",
        "Personal Shopping",
        "Scheduled Delivery",
      ],
    },
    {
      title: "Healthcare On-Demand",
      description:
        "Telemedicine and healthcare delivery platforms with doctor consultations, prescription delivery, health monitoring, and emergency response services",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Doctor Consultations",
        "Prescription Delivery",
        "Health Monitoring",
      ],
    },
    {
      title: "Beauty & Wellness Services",
      description:
        "On-demand beauty and wellness platforms with appointment booking, service provider matching, in-home treatments, and customer management",
      icon: <Calendar className="w-5 h-5" />,
      features: [
        "Appointment Booking",
        "Provider Matching",
        "In-Home Services",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Market Research & Analysis",
      description:
        "Analyze target market demographics, competitor landscape, demand patterns, and user behavior to design on-demand solutions that meet specific market needs",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Multi-Platform Development",
      description:
        "Build native mobile apps for iOS and Android, web applications, and service provider dashboards with real-time synchronization and cross-platform compatibility",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Integration & Automation",
      description:
        "Integrate payment gateways, mapping services, notification systems, and third-party APIs while implementing automated workflows for seamless operations",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Real-Time Features",
      description:
        "Implement GPS tracking, live chat, push notifications, real-time updates, and dynamic pricing algorithms for enhanced user experience and operational efficiency",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Scale",
      description:
        "Deploy with comprehensive testing, performance monitoring, user onboarding, marketing integration, and continuous optimization for rapid market penetration",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Socket.io", category: "Real-time" },
    { name: "Stripe", category: "Payments" },
    { name: "Google Maps", category: "Location" },
    { name: "Firebase", category: "Push Notifications" },
  ];

  const testimonials = [
    {
      name: "Alex Martinez",
      role: "CEO",
      company: "QuickRide Solutions",
      quote:
        "TackleTools built our ride-sharing platform that now serves 50,000+ users daily with 95% customer satisfaction and reduced operational costs by 40%.",
      rating: 5,
    },
    {
      name: "Jessica Chen",
      role: "Founder",
      company: "FreshDoor Delivery",
      quote:
        "The food delivery platform increased our order volume by 300% and improved delivery efficiency by 60% with intelligent route optimization.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "HomeHelp Services",
      quote:
        "Our home services marketplace processed 10,000+ bookings in the first month with seamless payment integration and real-time service tracking.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What on-demand services do you develop?",
      answer:
        "We develop comprehensive on-demand platforms including ride-sharing, food delivery, home services, grocery delivery, healthcare, beauty services, and custom on-demand solutions tailored to specific industry needs and market requirements.",
    },
    {
      question: "How do you handle real-time tracking and notifications?",
      answer:
        "We implement GPS tracking, WebSocket connections, and push notification systems using technologies like Socket.io, Firebase, and native mobile APIs to provide real-time updates, live tracking, and instant notifications across all platforms.",
    },
    {
      question: "What payment solutions do you integrate?",
      answer:
        "We integrate multiple payment gateways including Stripe, PayPal, Square, and regional payment processors. Our solutions support credit cards, digital wallets, in-app payments, and cash-on-delivery options with secure transaction processing.",
    },
    {
      question: "How do you ensure service quality and safety?",
      answer:
        "We implement comprehensive verification systems, rating and review mechanisms, background checks for service providers, real-time monitoring, customer support integration, and quality assurance protocols to maintain high service standards.",
    },
    {
      question: "Can you scale the platform for high demand?",
      answer:
        "Yes, we build scalable architectures using cloud services, microservices, load balancing, and auto-scaling features. Our platforms can handle thousands of concurrent users and rapid growth with minimal downtime and optimal performance.",
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
                  On-Demand Services
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools revolutionizes on-demand industries with
                cutting-edge platforms for ride-sharing, food delivery, home
                services, and marketplace solutions that connect customers with
                service providers through intuitive mobile apps, real-time
                tracking, and seamless payment integration.
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
                    <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">On-Demand App</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Real-time Tracking
                      <br />
                      Instant Bookings
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
              The On-Demand Economy Revolution
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The on-demand economy is reshaping how consumers access services,
              with mobile-first platforms enabling instant access to
              transportation, food, healthcare, and professional services.
              Modern consumers expect convenience, speed, and transparency in
              service delivery. On-demand platforms leverage GPS technology,
              real-time communication, and automated matching algorithms to
              create seamless experiences that connect service providers with
              customers instantly. TackleTools develops innovative on-demand
              solutions that combine intuitive user interfaces with robust
              backend systems, enabling businesses to capture market share in
              the rapidly growing on-demand economy through technology-driven
              service delivery and customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our On-Demand Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive platforms for every on-demand service industry
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
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Real-Time Everything
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Live tracking, instant notifications, real-time chat, and
                      dynamic updates that keep users engaged and informed
                      throughout their service experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Smart Matching & Routing
                    </h3>
                    <p className="text-gray-400 text-sm">
                      AI-powered algorithms for optimal service provider
                      matching, intelligent routing, and dynamic pricing based
                      on demand patterns and availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Seamless Payment Integration
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Multiple payment options including digital wallets, cards,
                      and cash-on-delivery with secure processing and automated
                      payouts to service providers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Trust & Safety Features
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Comprehensive verification systems, rating mechanisms,
                      background checks, and safety protocols to ensure secure
                      and reliable service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Live Tracking</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Real-time Location
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
              From concept to launch: building successful on-demand platforms
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
                  QuickRide: Urban Mobility Revolution
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive ride-sharing platform for
                  QuickRide that transformed urban transportation with
                  intelligent matching, real-time tracking, and seamless payment
                  processing across multiple cities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      50K+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Daily Active Users
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      95%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      3 Min
                    </div>
                    <div className="text-gray-400 text-xs">Avg Wait Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      40%
                    </div>
                    <div className="text-gray-400 text-xs">Cost Reduction</div>
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
                      <Car className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Ride Tracking</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Live Location
                        <br />
                        ETA Updates
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
              Cutting-edge technologies powering on-demand platforms
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
              Success stories from on-demand service entrepreneurs
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
              Common questions about on-demand platform development
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

export default OnDemandIndustries;