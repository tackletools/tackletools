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
  Film,
  CheckCircle,
  Database,
  Smartphone,
  Music,
  MapPin,
  ShieldCheck,
  Rocket,
  Users,
  Camera,
  Headphones,
  Gamepad2,
  Tv,
  Mic,
  Calendar,
} from "lucide-react";

const Entertainment = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Streaming Platforms",
      description:
        "Custom streaming solutions with adaptive bitrate streaming, content delivery networks, user management, and advanced analytics for optimal viewing experiences",
      icon: <Tv className="w-5 h-5" />,
      features: [
        "Adaptive Streaming",
        "Content Delivery",
        "User Analytics",
      ],
    },
    {
      title: "Music & Audio Platforms",
      description:
        "Comprehensive music streaming platforms with playlist management, audio processing, recommendation engines, and social features for music discovery",
      icon: <Headphones className="w-5 h-5" />,
      features: [
        "Audio Processing",
        "Playlist Management",
        "Music Discovery",
      ],
    },
    {
      title: "Gaming Solutions",
      description:
        "Interactive gaming platforms with real-time multiplayer, leaderboards, in-game purchases, and cross-platform compatibility for engaging experiences",
      icon: <Gamepad2 className="w-5 h-5" />,
      features: ["Multiplayer Gaming", "Leaderboards", "Cross-Platform"],
    },
    {
      title: "Content Management Systems",
      description:
        "Advanced CMS for entertainment content with metadata management, digital rights management, content scheduling, and automated distribution",
      icon: <Film className="w-5 h-5" />,
      features: [
        "Digital Rights",
        "Content Scheduling",
        "Automated Distribution",
      ],
    },
    {
      title: "Event & Ticketing Platforms",
      description:
        "Complete event management solutions with ticket sales, seating management, venue mapping, and real-time analytics for entertainment events",
      icon: <Calendar className="w-5 h-5" />,
      features: ["Ticket Sales", "Venue Mapping", "Event Analytics"],
    },
    {
      title: "Social Media & Community",
      description:
        "Interactive social platforms with live streaming, fan engagement tools, content sharing, and community building features for entertainment brands",
      icon: <Users className="w-5 h-5" />,
      features: [
        "Live Streaming",
        "Fan Engagement",
        "Community Building",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Entertainment Market Analysis",
      description:
        "We analyze entertainment trends, audience behavior, and industry dynamics to create compelling digital experiences that resonate with target demographics",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Content Architecture Design",
      description:
        "Build scalable content delivery systems with CDN integration, media processing pipelines, and real-time streaming capabilities",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Platform Development",
      description:
        "Develop engaging platforms with interactive features, social integration, and personalized content recommendations using AI algorithms",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Performance Optimization",
      description:
        "Comprehensive testing including load testing, streaming quality optimization, and cross-device compatibility validation",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Engagement",
      description:
        "Strategic launch with audience engagement strategies, analytics monitoring, and continuous feature updates based on user feedback",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "WebRTC", category: "Streaming" },
    { name: "AWS", category: "Cloud" },
    { name: "FFmpeg", category: "Media" },
    { name: "Redis", category: "Cache" },
    { name: "Socket.io", category: "Real-time" },
    { name: "TensorFlow", category: "AI/ML" },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CEO",
      company: "StreamVibe Entertainment",
      quote:
        "TackleTools revolutionized our streaming platform. User engagement increased by 150% and streaming quality improved dramatically with their advanced CDN implementation.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "CTO",
      company: "MusicFlow Studios",
      quote:
        "The music recommendation engine increased playlist engagement by 200% and the social features created a thriving community of 500K+ active users.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Product Director",
      company: "GameHub Interactive",
      quote:
        "Their gaming platform supported 1M+ concurrent users flawlessly. The real-time multiplayer features and leaderboards drove incredible user retention.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What entertainment solutions do you specialize in?",
      answer:
        "We specialize in streaming platforms, music applications, gaming solutions, content management systems, event ticketing platforms, and social media tools for entertainment companies, content creators, and media organizations.",
    },
    {
      question: "How do you handle high-traffic streaming and content delivery?",
      answer:
        "We implement robust CDN solutions, adaptive bitrate streaming, load balancing, and edge computing to ensure smooth content delivery even during peak traffic periods. Our systems are designed to scale automatically based on demand.",
    },
    {
      question: "What's your typical development timeline for entertainment projects?",
      answer:
        "Entertainment projects typically range from 16-28 weeks depending on complexity and features required. We use agile methodology with regular demos and stakeholder feedback sessions throughout development.",
    },
    {
      question: "Can you integrate with existing entertainment industry tools?",
      answer:
        "Yes, we have extensive experience integrating with industry-standard tools like digital rights management systems, content delivery networks, payment processors, and analytics platforms used in entertainment.",
    },
    {
      question: "Do you provide mobile app development for entertainment platforms?",
      answer:
        "We create native and cross-platform mobile apps with features like offline content, push notifications, social sharing, live streaming, and seamless synchronization across devices for entertainment platforms.",
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
                  Entertainment Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools powers the entertainment industry with cutting-edge
                streaming platforms, interactive gaming solutions, and immersive
                content management systems that captivate audiences and drive
                engagement across all digital channels.
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
                    <Film className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Streaming Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Live Content
                      <br />
                      Global Audience
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
              The Future of Entertainment Technology
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Entertainment technology is evolving rapidly with AI-powered content
              recommendations, immersive streaming experiences, and interactive
              social features that transform how audiences consume and engage with
              content. Modern entertainment companies need scalable platforms that
              deliver seamless experiences across all devices while providing
              deep insights into audience behavior. TackleTools creates innovative
              entertainment solutions that merge cutting-edge technology with
              creative vision, enabling content creators and media companies to
              captivate global audiences with personalized, engaging, and
              technically superior digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Entertainment Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern entertainment experiences
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
                    <Music className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Entertainment Industry Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of entertainment workflows, content
                      distribution, audience engagement, and monetization
                      strategies across all entertainment verticals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Advanced Media Processing
                    </h3>
                    <p className="text-gray-400 text-sm">
                      State-of-the-art media processing pipelines with
                      transcoding, compression, and adaptive streaming
                      technologies for optimal content delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      AI-Powered Personalization
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Machine learning algorithms for content recommendations,
                      audience segmentation, predictive analytics, and
                      personalized entertainment experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1.5 flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Scalable Architecture
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Cloud-native solutions that scale automatically to handle
                      millions of concurrent users, viral content, and global
                      entertainment events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Mic className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Live Streaming</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Interactive Features
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
              A proven methodology for entertainment technology transformation
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
                  StreamVibe: Next-Gen Entertainment Platform
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive entertainment streaming platform
                  for StreamVibe that revolutionized content discovery with
                  AI-powered recommendations, social features, and immersive
                  viewing experiences.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      150%
                    </div>
                    <div className="text-gray-400 text-xs">
                      User Engagement
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      2M+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Active Users
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                      300%
                    </div>
                    <div className="text-gray-400 text-xs">Revenue Growth</div>
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
                      <p className="text-gray-400 text-sm">Streaming Dashboard</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Content Analytics
                        <br />
                        Audience Insights
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
              Modern technologies powering entertainment innovation
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
              Real results from entertainment industry leaders worldwide
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
              Common questions about our entertainment technology solutions
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

export default Entertainment;