import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const mountRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Three.js Background Effect
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 0.02,
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does it take to respond?",
      answer: "We typically respond within 24 hours during business days. For urgent matters, please call us directly."
    },
    {
      question: "Can I book a demo or consultation?",
      answer: "Yes! We offer free consultations to discuss your project requirements. Just mention it in your message."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various industries including tech, healthcare, finance, e-commerce, and more."
    },
    {
      question: "Do you work internationally?",
      answer: "Absolutely! We serve clients globally and have experience working across different time zones."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Get in Touch with <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">TackleTools</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Let's build your next big idea together. Reach out to us for inquiries, collaborations, or support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Send us a Message</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-purple-500 focus:bg-white/10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-purple-500 focus:bg-white/10"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-purple-500 focus:bg-white/10"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-purple-500 focus:bg-white/10"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message / Project Description *"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-purple-500 focus:bg-white/10 resize-none"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Please fill in all required fields.
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Direct Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">contact@tackletools.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">WhatsApp: +1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">123 Tech Street, Innovation City, IC 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Mon-Fri: 9AM-6PM PST</span>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Our Location</h2>
              <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-gray-400 text-sm">
                <MapPin className="w-6 h-6 mr-2" />
                Google Maps Integration
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5 text-purple-400" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Twitter className="w-5 h-5 text-purple-400" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Facebook className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-6 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-white hover:text-purple-400 transition-colors"
                >
                  {faq.question}
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="mt-3 text-sm text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-white/10">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Have a project in mind? Let's make it <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">real</span>.
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Talk to our experts today and transform your ideas into reality.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Contact;