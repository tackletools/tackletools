// HelmetMetaTags.jsx

import { Helmet } from 'react-helmet-async';

const ogDefaults = {
  image: 'https://tackletools.tech/og-image.jpg',
  url: 'https://tackletools.tech',
  twitterCard: 'summary_large_image'
};

export const HelmetTags = {
  // --- Main Pages ---
  Home: (
    <Helmet>
      <title>Crafting Tomorrow's Tech, Today — with TackleTools</title>
      <meta name="description" content="TackleTools is your digital partner for web & app development, enterprise solutions, UI/UX design, cybersecurity, and more." />
      <meta property="og:title" content="Crafting Tomorrow's Tech, Today — with TackleTools" />
      <meta property="og:description" content="TackleTools is your digital partner for web & app development, enterprise solutions, UI/UX design, cybersecurity, and more." />
      <meta property="og:image" content={ogDefaults.image} />
      <meta property="og:url" content={ogDefaults.url} />
      <meta name="twitter:card" content={ogDefaults.twitterCard} />
    </Helmet>
  ),
  // --- Services ---
  WebDevelopment: (
    <Helmet>
      <title>Web Development Services</title>
      <meta name="description" content="Get responsive, high-performance websites tailored to your business goals." />
      <meta name="keywords" content="TackleTools, web development, UI UX, enterprise IT, app development" />
    </Helmet>
  ),
  UIUXDesign: (
    <Helmet>
      <title>UI/UX Design by TackleTools</title>
      <meta name="description" content="Create intuitive, engaging digital experiences with our expert UI/UX design team." />
      <meta name="keywords" content="TackleTools, UI UX design, user experience, user interface, digital design" />
    </Helmet>
  ),
  Database: (
    <Helmet>
      <title>Database Development Solutions</title>
      <meta name="description" content="Secure, scalable, and optimized database architecture for modern applications." />
      <meta name="keywords" content="TackleTools, database solutions, data management, SQL, NoSQL" />
    </Helmet>
  ),
  AppDevelopment: (
    <Helmet>
      <title>Mobile & Web App Development</title>
      <meta name="description" content="Custom Android, iOS & web apps designed to drive engagement and performance." />
      <meta name="keywords" content="TackleTools, app development, mobile apps, web apps, software development" />
    </Helmet>
  ),
  EcommerceService: (
    <Helmet>
      <title>eCommerce Website & App Development</title>
      <meta name="description" content="Build robust online stores with secure payment gateways and modern UI." />
      <meta name="keywords" content="TackleTools, e-commerce, online store, shopping cart, payment gateway" />
    </Helmet>
  ),
  CyberSecurity: (
    <Helmet>
      <title>Cybersecurity Services</title>
      <meta name="description" content="Protect your digital assets with our end-to-end cybersecurity solutions." />
      <meta name="keywords" content="TackleTools, cybersecurity, data protection, network security, IT security" />
    </Helmet>
  ),
  GameDevelopment: (   
    <Helmet>
      <title>Game Development Services</title>
      <meta name="description" content="Innovative game design and development for mobile, web, and AR/VR." />
      <meta name="keywords" content="TackleTools, game development, video games, mobile games, AR/VR" />
    </Helmet>
  ),
  DigitalMarketing: (
    <Helmet>
      <title>Digital Marketing Services</title>
      <meta name="description" content="Boost your online presence with our digital marketing strategies." />
      <meta name="keywords" content="TackleTools, digital marketing, SEO, social media, content marketing" />
    </Helmet>
  ),
  SensorsCreation: (
    <Helmet>
      <title>TackleTools Sensors Creation Services</title>
      <meta name="description" content="Innovative sensor solutions for IoT and smart applications." />
      <meta name="keywords" content="TackleTools, sensors creation, IoT, smart applications, sensor technology" />
    </Helmet>
  ),
  Multimedia: (
    <Helmet>
      <title>TackleTools Multimedia Services</title>
      <meta name="description" content="Engaging multimedia solutions for your digital content needs." />
      <meta name="keywords" content="TackleTools, multimedia, video production, animation, audio production" />
    </Helmet>
  ),
  AISolutions: (  
    <Helmet>
      <title>TackleTools AI Solutions</title>
      <meta name="description" content="Leverage AI to enhance your business processes and decision-making." />
      <meta name="keywords" content="TackleTools, AI solutions, artificial intelligence, machine learning, data analytics" />
    </Helmet>
  ),
  OnDemandService: (
    <Helmet>
      <title>TackleTools On-Demand Services</title>
      <meta name="description" content="Flexible on-demand solutions tailored to your business requirements." />
      <meta name="keywords" content="TackleTools, on-demand services, flexible solutions, business solutions" />
    </Helmet>
  ),
  // --- Industries ---
  Automotive: (
    <Helmet>
      <title>TackleTools Automotive Industry Solutions</title>
      <meta name="description" content="Transforming the automotive industry with innovative IT solutions." />
      <meta name="keywords" content="TackleTools, automotive, industry solutions, IT solutions, digital transformation" />
    </Helmet>
  ),
  Education: (
    <Helmet>
      <title>TackleTools Education Industry Solutions</title>
      <meta name="description" content="Empowering educational institutions with technology-driven solutions." />
      <meta name="keywords" content="TackleTools, education, industry solutions, e-learning, digital education" />
    </Helmet>
  ),
  RealEstate: (
    <Helmet>
      <title>TackleTools Real Estate Industry Solutions</title>
      <meta name="description" content="Innovative IT solutions for the real estate sector." />
      <meta name="keywords" content="TackleTools, real estate, industry solutions, property management, digital real estate" />
    </Helmet>
  ),
  Logistics: (
    <Helmet>
      <title>TackleTools Logistics Industry Solutions</title>
      <meta name="description" content="Streamlining logistics operations with advanced IT solutions." />
      <meta name="keywords" content="TackleTools, logistics, industry solutions, supply chain, digital logistics" />
    </Helmet>
  ),
  Healthcare: (
    <Helmet>
      <title>TackleTools Healthcare Industry Solutions</title>
      <meta name="description" content="Enhancing healthcare services with innovative IT solutions." />
      <meta name="keywords" content="TackleTools, healthcare, industry solutions, health tech, digital healthcare" />
    </Helmet>
  ),
  Entertainment: (
    <Helmet>
      <title>TackleTools Entertainment Industry Solutions</title>
      <meta name="description" content="Revolutionizing the entertainment industry with cutting-edge IT solutions." />
      <meta name="keywords" content="TackleTools, entertainment, industry solutions, media, digital entertainment" />
    </Helmet>
  ),
  SAAS: (
    <Helmet>
      <title>TackleTools SAAS Industry Solutions</title>
      <meta name="description" content="Providing scalable SAAS solutions for various industries." />
      <meta name="keywords" content="TackleTools, SAAS, industry solutions, software as a service, cloud solutions" />
    </Helmet>
  ),
  Retail: (
    <Helmet>
      <title>TackleTools Retail Industry Solutions</title>
      <meta name="description" content="Transforming retail operations with innovative IT solutions." />
      <meta name="keywords" content="TackleTools, retail, industry solutions, e-commerce, digital retail" />
    </Helmet>
  ),
  Corporation: (
    <Helmet>
      <title>TackleTools Corporate Solutions</title>
      <meta name="description" content="Comprehensive IT solutions for corporate enterprises." />
      <meta name="keywords" content="TackleTools, corporate, industry solutions, enterprise IT, business solutions" />
    </Helmet>
  ),
  EcommerceIndustries:(
    <Helmet>
      <title>	eCommerce Industry Solutions TackleTools</title>
      <meta name="description" content="Tailored eCommerce platforms with multivendor, logistics & marketing." />
      <meta name="keywords" content="TackleTools, eCommerce platforms with multivendor, logistics & marketing." />
    </Helmet>
  ),
  Fintech: (
    <Helmet>
      <title>TackleTools Fintech Industry Solutions</title>
      <meta name="description" content="Innovative IT solutions for the fintech industry." />
      <meta name="keywords" content="TackleTools, fintech, industry solutions, financial technology, digital finance" />
    </Helmet>
  ),
  OnDemandIndustries: (
    <Helmet>
      <title>TackleTools On-Demand Industries</title>
      <meta name="description" content="Explore our on-demand services tailored to various industries." />
      <meta name="keywords" content="TackleTools, on-demand industries, flexible solutions, business solutions" />
    </Helmet>
  ),
  // --- Insights ---
  Enterprise: (
    <Helmet>
      <title>TackleTools Enterprise Insights</title>
      <meta name="description" content="Insights and strategies for enterprise-level IT solutions." />
      <meta name="keywords" content="TackleTools, enterprise, insights, IT solutions, business strategies" />
    </Helmet>
  ),
  Collaboration: (
    <Helmet>
      <title>TackleTools Collaboration Insights</title>
      <meta name="description" content="Enhancing collaboration through innovative IT solutions." />
      <meta name="keywords" content="TackleTools, collaboration, insights, teamwork, digital collaboration" />
    </Helmet>
  ),
  Customers: (
    <Helmet>
      <title>TackleTools Customer Insights</title>
      <meta name="description" content="Understanding customer needs and enhancing user experience." />
      <meta name="keywords" content="TackleTools, customers, insights, user experience, customer satisfaction" />
    </Helmet>
  ),
  Security: (
    <Helmet>
      <title>TackleTools Security Insights</title>
      <meta name="description" content="Ensuring security in digital solutions and IT infrastructure." />
      <meta name="keywords" content="TackleTools, security, insights, cybersecurity, data protection" />
    </Helmet>
  ),
  // --- Support ---
  Help: (
    <Helmet>
      <title>TackleTools Support - Help Center</title>
      <meta name="description" content="Get assistance and support for TackleTools services." />
      <meta name="keywords" content="TackleTools, support, help center, customer service, assistance" />
    </Helmet>
  ),
  Community: (
    <Helmet>
      <title>TackleTools Community Support</title>
      <meta name="description" content="Join the TackleTools community for support and collaboration." />
      <meta name="keywords" content="TackleTools, community, support, collaboration, user community" />
    </Helmet>
  ),
  Emergency: (
    <Helmet>
      <title>TackleTools Emergency Support</title>
      <meta name="description" content="Emergency support services for critical issues." />
      <meta name="keywords" content="TackleTools, emergency support, critical issues, urgent assistance" />
    </Helmet>
  )
};
