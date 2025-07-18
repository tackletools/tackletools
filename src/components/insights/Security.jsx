import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, Eye, Users, Award, CheckCircle, Globe, Server, Database, Zap } from 'lucide-react';
import * as THREE from 'three';
import { HelmetTags } from '../../utils/HelmetMetaTags';

const Security = () => {
  const mountRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Three.js setup for animated security shield
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 200);
    renderer.setClearColor(0x000000, 0);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create shield geometry
    const shieldGeometry = new THREE.CylinderGeometry(0, 1.5, 2, 6);
    const shieldMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff88, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    scene.add(shield);

    // Add particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ 
      color: 0x00ff88, 
      size: 0.02,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      shield.rotation.y += 0.01;
      particles.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const securityFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and multi-layered protection protocols with advanced firewall systems and intrusion detection"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Encryption",
      description: "End-to-end AES-256 encryption for all data transmission, storage, and backup processes with military-grade security"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "24/7 Monitoring",
      description: "Real-time threat detection and instant security alerts with AI-powered anomaly detection and automated response systems"
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Secure Infrastructure",
      description: "Cloud-based architecture with 99.9% uptime guarantee, redundant servers, and distributed data centers worldwide"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Backup & Recovery",
      description: "Automated daily backups with instant recovery capabilities and geo-redundant storage across multiple locations"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "DDoS Protection",
      description: "Advanced DDoS mitigation with traffic filtering, rate limiting, and automatic scaling to handle massive attacks"
    }
  ];

  const certifications = [
    { name: "ISO 27001", desc: "Information Security Management System with comprehensive risk assessment and continuous monitoring" },
    { name: "SOC 2 Type II", desc: "Security & Availability Controls verified through independent third-party audits annually" },
    { name: "GDPR Compliant", desc: "Data Protection Regulation compliance with user consent management and data portability rights" },
    { name: "PCI DSS", desc: "Payment Card Industry Standards for secure payment processing and cardholder data protection" },
    { name: "HIPAA Ready", desc: "Healthcare data protection standards with business associate agreements and audit logging" },
    { name: "FedRAMP", desc: "Federal Risk Authorization Management Program for government cloud security requirements" }
  ];

  const trustFactors = [
    { icon: <Users className="w-4 h-4" />, stat: "500+", label: "Trusted Clients", desc: "Global enterprises and startups" },
    { icon: <Award className="w-4 h-4" />, stat: "99.9%", label: "Uptime SLA", desc: "Guaranteed service availability" },
    { icon: <Globe className="w-4 h-4" />, stat: "24/7", label: "Global Support", desc: "Round-the-clock assistance" },
    { icon: <Database className="w-4 h-4" />, stat: "Zero", label: "Data Breaches", desc: "Perfect security track record" },
    { icon: <Shield className="w-4 h-4" />, stat: "5+ Years", label: "Security Expertise", desc: "Proven cybersecurity experience" },
    { icon: <Lock className="w-4 h-4" />, stat: "256-bit", label: "Encryption Standard", desc: "Military-grade protection" }
  ];

  return (
    <>
    {HelmetTags.Security}

    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div ref={mountRef} className="w-72 h-48" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your <span className="text-green-400">Security</span> is Our Priority
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8">
            TackleTools implements industry-leading security measures to protect your digital assets and ensure complete peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
              Military-Grade Encryption
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
              SOC 2 Certified
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
              GDPR Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            <span className="text-green-400">Advanced</span> Security Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 ${
                  isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Why <span className="text-green-400">Trust</span> TackleTools?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {trustFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center hover:bg-gray-900/50 transition-all"
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-green-500/20 text-green-400 p-2 rounded-full">
                    {factor.icon}
                  </div>
                </div>
                <div className="text-lg font-bold text-green-400">{factor.stat}</div>
                <div className="text-xs text-gray-400 font-medium">{factor.label}</div>
                <div className="text-xs text-gray-500 mt-1">{factor.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Industry <span className="text-green-400">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-lg p-4 text-center hover:border-green-500/50 transition-all"
              >
                <div className="bg-green-500/20 text-green-400 p-2 rounded-full w-fit mx-auto mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Guarantees */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Our <span className="text-green-400">Security</span> Guarantees
          </h2>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Data Protection
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Zero-knowledge architecture</li>
                  <li>• Regular security audits</li>
                  <li>• Encrypted data backups</li>
                  <li>• Secure deletion policies</li>
                  <li>• Data anonymization tools</li>
                  <li>• Privacy by design principles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  Performance & Reliability
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• DDoS protection</li>
                  <li>• Load balancing</li>
                  <li>• Instant failover</li>
                  <li>• Global CDN network</li>
                  <li>• Auto-scaling infrastructure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Compliance & Monitoring
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Continuous compliance monitoring</li>
                  <li>• Automated security testing</li>
                  <li>• Incident response protocols</li>
                  <li>• Regular penetration testing</li>
                  <li>• Vulnerability assessments</li>
                  <li>• Security awareness training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Security;