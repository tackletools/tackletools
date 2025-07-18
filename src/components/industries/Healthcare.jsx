import React, { useState } from "react";
import {
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
  Stethoscope,
  BarChart3,
  Video,
  Brain,
  Activity,
  FileText,
  UserCheck,
  Pill,
  Microscope,
  Hospital,
  Ambulance,
  Lock,
  CloudRain,
  Heart,
  ChevronRight,
} from "lucide-react";

const Healthcare = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const solutions = [
    {
      title: "Electronic Health Records (EHR)",
      description:
        "Comprehensive patient data management with secure storage, real-time updates, and seamless provider access",
      icon: <FileText className="w-5 h-5" />,
      features: ["Patient Records", "Clinical Documentation", "Interoperability"],
    },
    {
      title: "Telemedicine Platforms",
      description:
        "Virtual care delivery with video consultations, remote monitoring, and digital prescriptions",
      icon: <Video className="w-5 h-5" />,
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions"],
    },
    {
      title: "Patient Management Systems",
      description:
        "Complete patient lifecycle management from registration to discharge and follow-up care",
      icon: <UserCheck className="w-5 h-5" />,
      features: [
        "Appointment Scheduling",
        "Patient Portal",
        "Care Coordination",
      ],
    },
    {
      title: "Medical Imaging Solutions",
      description:
        "Advanced DICOM-compliant imaging systems with AI-powered diagnostics and cloud storage",
      icon: <Microscope className="w-5 h-5" />,
      features: [
        "DICOM Compliance",
        "AI Diagnostics",
        "Cloud Storage",
      ],
    },
    {
      title: "Healthcare Mobile Apps",
      description:
        "Patient-centric mobile applications with health tracking, medication reminders, and provider communication",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Health Tracking", "Medication Alerts", "Provider Messaging"],
    },
    {
      title: "Clinical Analytics",
      description:
        "Data-driven insights with population health analytics, predictive modeling, and quality metrics",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Population Health", "Predictive Analytics", "Quality Metrics"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Healthcare Requirements Analysis",
      description:
        "We assess your clinical workflows, compliance needs, and patient care objectives to identify optimal solutions",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      step: "02",
      title: "System Architecture Design",
      description:
        "HIPAA-compliant architecture with scalable infrastructure, security protocols, and interoperability standards",
      icon: <Code className="w-4 h-4" />,
    },
    {
      step: "03",
      title: "Integration & Migration",
      description:
        "Seamless integration with existing systems, data migration, and third-party healthcare tool connections",
      icon: <Database className="w-4 h-4" />,
    },
    {
      step: "04",
      title: "Security & Compliance Testing",
      description:
        "Rigorous security audits, HIPAA compliance verification, and comprehensive system validation",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      step: "05",
      title: "Deployment & Training",
      description:
        "Smooth go-live with comprehensive staff training, change management, and 24/7 support",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "HL7 FHIR", category: "Standards" },
    { name: "AWS", category: "Cloud" },
    { name: "DICOM", category: "Imaging" },
    { name: "Redis", category: "Cache" },
    { name: "WebRTC", category: "Video" },
  ];

  const testimonials = [
    {
      name: "Dr. Amanda Foster",
      role: "Chief Medical Officer",
      company: "Metropolitan Health System",
      quote:
        "TackleTools revolutionized our patient care delivery. Our EHR system improved clinical efficiency by 45% and patient satisfaction scores increased by 35%.",
      rating: 5,
    },
    {
      name: "Robert Martinez",
      role: "IT Director",
      company: "Regional Medical Center",
      quote:
        "The telemedicine platform enabled us to expand care access to rural areas. We now serve 3x more patients with the same resources.",
      rating: 5,
    },
    {
      name: "Dr. Sarah Kim",
      role: "Practice Administrator",
      company: "Family Care Clinic",
      quote:
        "Their patient management system streamlined our operations. Appointment scheduling time reduced by 60% and no-shows decreased by 40%.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What healthcare solutions do you specialize in?",
      answer:
        "We specialize in Electronic Health Records (EHR), telemedicine platforms, patient management systems, medical imaging solutions, healthcare mobile apps, and clinical analytics with full HIPAA compliance.",
    },
    {
      question: "How do you ensure HIPAA compliance?",
      answer:
        "We implement comprehensive security measures including end-to-end encryption, access controls, audit trails, and regular compliance audits. Our platforms are designed with privacy-by-design principles.",
    },
    {
      question: "What's your typical development timeline for healthcare projects?",
      answer:
        "Healthcare projects typically range from 16-32 weeks depending on complexity and regulatory requirements. We follow agile methodology with regular compliance checkpoints and clinical validation.",
    },
    {
      question: "Do you support healthcare interoperability standards?",
      answer:
        "Yes, we fully support HL7 FHIR, DICOM, and other healthcare standards to ensure seamless data exchange between systems and healthcare providers.",
    },
    {
      question: "Can you integrate with existing healthcare systems?",
      answer:
        "Absolutely. We have extensive experience integrating with EMR/EHR systems, laboratory systems, imaging systems, and other healthcare infrastructure through secure APIs and standard protocols.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-emerald-900 to-teal-900 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
                  {" "}
                  Healthcare Technology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                TackleTools empowers healthcare organizations with secure, HIPAA-compliant solutions that enhance patient care, streamline clinical workflows, and drive better health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 hover:border-emerald-400 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative py-6">
              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl p-4 sm:p-6 border border-emerald-500/30 backdrop-blur-sm">
                <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Smart Healthcare Platform
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      AI-Powered Diagnostics
                      <br />
                      Real-time Patient Monitoring
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
              The Future of Digital Healthcare
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Healthcare is experiencing a digital revolution with AI-powered diagnostics, telemedicine expansion, and patient-centered care delivery. Modern healthcare organizations need secure, interoperable platforms that improve clinical outcomes while reducing costs. TackleTools delivers innovative solutions that bridge the gap between traditional healthcare and digital transformation, creating seamless experiences for providers and patients alike.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Healthcare Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comprehensive digital solutions for modern healthcare organizations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group border border-gray-800"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-3 sm:mb-4 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all">
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
                      <ChevronRight className="w-3 h-3 text-emerald-400" />
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Why Choose TackleTools?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-1.5 flex-shrink-0">
                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Clinical Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of clinical workflows, healthcare regulations, and patient care best practices across all medical specialties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-1.5 flex-shrink-0">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      HIPAA Compliance
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Full HIPAA compliance with end-to-end encryption, access controls, and comprehensive audit trails for complete data protection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-1.5 flex-shrink-0">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Interoperability
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Seamless integration with existing healthcare systems using HL7 FHIR, DICOM, and other industry standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-1.5 flex-shrink-0">
                    <Ambulance className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      24/7 Support
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Round-the-clock technical support and maintenance to ensure continuous healthcare operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
                <div className="aspect-square bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Hospital className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Smart Hospital</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Integrated Care Platform
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
              A proven methodology for healthcare technology implementation
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg p-4 sm:p-6 group-hover:bg-gray-800 transition-colors border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-1.5">
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
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  Case Study
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Metropolitan Health: 200% Efficiency Improvement
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We developed a comprehensive EHR and telemedicine platform for Metropolitan Health System that transformed their patient care delivery and operational efficiency across 15 locations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-1">
                      45%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Clinical Efficiency
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-1">
                      35%
                    </div>
                    <div className="text-gray-400 text-xs">Patient Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-1">
                      60%
                    </div>
                    <div className="text-gray-400 text-xs">Faster Documentation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-1">
                      30%
                    </div>
                    <div className="text-gray-400 text-xs">
                      Cost Reduction
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Read Full Case Study
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
                  <div className="aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        EHR Dashboard
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Real-time Patient Data
                        <br />
                        Clinical Decision Support
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
              Modern technologies powering healthcare innovation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-800 transition-colors group border border-gray-800"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all text-sm">
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
              Real results from healthcare organizations worldwide
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
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs">
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
                    <div className="text-xs text-emerald-400">
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
              Common questions about our healthcare technology solutions
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

export default Healthcare;