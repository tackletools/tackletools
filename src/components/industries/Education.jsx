import React, { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  Users,
  Calendar,
  Monitor,
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
  GraduationCap,
  BarChart3,
  Video,
  Brain,
} from "lucide-react";

const Education = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Learning Management Systems",
      description:
        "Comprehensive LMS platforms with course management, student tracking, and assessment tools",
      icon: <BookOpen className="w-5 h-5" />,
      features: ["Course Management", "Student Analytics", "Assessment Tools"],
    },
    {
      title: "Virtual Classrooms",
      description:
        "Interactive online learning environments with live streaming and collaboration tools",
      icon: <Video className="w-5 h-5" />,
      features: ["Live Streaming", "Screen Sharing", "Breakout Rooms"],
    },
    {
      title: "Student Information Systems",
      description:
        "Complete student data management with enrollment, grading, and administrative tools",
      icon: <Users className="w-5 h-5" />,
      features: [
        "Student Records",
        "Grade Management",
        "Parent Portals",
      ],
    },
    {
      title: "E-Learning Platforms",
      description:
        "Self-paced learning solutions with multimedia content and progress tracking",
      icon: <Monitor className="w-5 h-5" />,
      features: [
        "Interactive Content",
        "Progress Tracking",
        "Mobile Learning",
      ],
    },
    {
      title: "Educational Apps",
      description:
        "Mobile-first learning applications with gamification and offline capabilities",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Gamification", "Offline Access", "Push Notifications"],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data-driven insights with learning analytics and performance dashboards",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Learning Analytics", "Performance Reports", "Predictive Insights"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Educational Needs Assessment",
      description:
        "We analyze your educational goals, current systems, and learning outcomes to identify opportunities",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "Platform Architecture",
      description:
        "Custom educational platform design with user-friendly interfaces and scalable infrastructure",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Content & Integration",
      description:
        "Seamless integration with existing systems and comprehensive content management solutions",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing including accessibility compliance and cross-platform compatibility",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Launch & Training",
      description:
        "Smooth deployment with comprehensive training for educators and ongoing support",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "WebRTC", category: "Video" },
    { name: "AWS", category: "Cloud" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "Socket.io", category: "Real-time" },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Academic Director",
      company: "EduTech University",
      quote:
        "TackleTools transformed our online learning experience. Student engagement increased by 60% and completion rates improved by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Principal",
      company: "Innovation High School",
      quote:
        "The LMS platform streamlined our entire educational process. Teachers save 3 hours per week on administrative tasks.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Training Manager",
      company: "SkillBoost Academy",
      quote:
        "Their e-learning platform helped us scale from 500 to 5,000 students while maintaining quality education.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What educational solutions do you specialize in?",
      answer:
        "We specialize in Learning Management Systems, virtual classrooms, student information systems, e-learning platforms, educational mobile apps, and learning analytics solutions.",
    },
    {
      question: "How do you ensure accessibility compliance?",
      answer:
        "We follow WCAG 2.1 AA standards and Section 508 compliance, ensuring our platforms are accessible to all learners including those with disabilities.",
    },
    {
      question: "What's your typical development timeline?",
      answer:
        "Development typically ranges from 12-24 weeks depending on complexity and features required. We follow agile methodology with regular demos and feedback sessions.",
    },
    {
      question: "Do you provide mobile learning solutions?",
      answer:
        "Yes, we develop responsive web applications and native mobile apps with offline capabilities, push notifications, and seamless synchronization.",
    },
    {
      question: "Can you integrate with existing school systems?",
      answer:
        "Absolutely. We have extensive experience integrating with SIS systems, grade books, authentication systems, and third-party educational tools through APIs and standards like LTI.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-purple-900 to-blue-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Revolutionize
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  {" "}
                  Education Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                "TackleTools empowers educational institutions with cutting-edge learning platforms, student management systems, and interactive digital experiences."
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-purple-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Smart Learning Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      AI-Powered Personalization
                      <br />
                      Real-time Analytics
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
              The Future of Digital Education
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              "Education is undergoing a digital transformation with AI-powered personalization, immersive virtual classrooms, and data-driven learning analytics. Modern educational institutions need scalable platforms that adapt to diverse learning styles and provide measurable outcomes. TackleTools delivers innovative solutions that bridge the gap between traditional education and digital innovation, creating engaging learning experiences for the next generation."
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Education Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern educational institutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-3 sm:mb-4 group-hover:from-purple-500 group-hover:to-blue-500 transition-all">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 flex-shrink-0">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Educational Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of pedagogical principles, learning theories, and educational best practices across all academic levels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 flex-shrink-0">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Personalized Learning
                    </h3>
                    <p className="text-gray-400 text-sm">
                      AI-driven personalization that adapts to individual learning styles, pace, and preferences for optimal educational outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 flex-shrink-0">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Secure & Compliant
                    </h3>
                    <p className="text-gray-400 text-sm">
                      FERPA-compliant platforms with robust security measures and privacy protection for student data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1.5 flex-shrink-0">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Seamless Integration
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Easy integration with existing school systems, gradebooks, and third-party educational tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Interactive Learning</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Gamified Education Platform
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
              A proven methodology for educational technology implementation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  EduTech University: 300% Engagement Growth
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive LMS platform for EduTech University with AI-powered personalization, virtual classrooms, and advanced analytics that transformed their online education experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                      60%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Higher Engagement
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                      40%
                    </div>
                    <div className="text-gray-400 text-xs">Better Completion</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                      50%
                    </div>
                    <div className="text-gray-400 text-xs">Time Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                      95%
                    </div>
                    <div className="text-gray-400 text-xs">
                      User Satisfaction
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Virtual Classroom
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Interactive Learning
                        <br />
                        Real-time Collaboration
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
              Modern technologies powering educational innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-purple-500 group-hover:to-blue-500 transition-all text-sm">
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
              Real results from educational institutions worldwide
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
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
              Common questions about our educational technology solutions
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

export default Education;