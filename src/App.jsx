import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';

// Import page components
import Home from './pages/Home'

// Import service components
import WebDevelopment from './components/services/WebDevelopment'
import UIUXDesign from './components/services/UIUXDesign'
import Database from './components/services/Database'
import AppDevelopment from './components/services/AppDevelopment'
import EcommerceService from './components/services/EcommerceService'
import CyberSecurity from './components/services/CyberSecurity'
import GameDevelopment from './components/services/GameDevelopment'
import DigitalMarketing from './components/services/DigitalMarketing'
import OnDemandService from './components/services/OnDemandService'
import SensorsCreation from './components/services/SensorsCreation'
import Multimedia from './components/services/Multimedia'
import AISolutions from './components/services/AISolutions'

// Import industry components
import Automotive from './components/industries/Automotive'
import Education from './components/industries/Education'
import Retail from './components/industries/Retail'
import Logistics from './components/industries/Logistics'
import Healthcare from './components/industries/Healthcare'
import EcommerceIndustries from './components/industries/EcommerceIndustries';
import Entertainment from './components/industries/Entertainment'
import SAAS from './components/industries/SAAS'
import RealEstate from './components/industries/RealEstate'
import Corporation from './components/industries/Corporation'
import Fintech from './components/industries/Fintech'
import OnDemandIndustries from './components/industries/OnDemandIndustries'

// Import insights components (create these files as needed)
import Enterprise from './components/insights/Enterprise'
import Collaboration from './components/insights/Collaboration'
import Customers from './components/insights/Customers'
import Security from './components/insights/Security'

// Import support components (create these files as needed)
import Help from './components/support/Help'
import Community from './components/support/Community'
import Emergency from './components/support/Emergency'

const App = () => {
    useEffect(() => {
      // Disable right-click
      const handleContextMenu = (e) => e.preventDefault();
      document.addEventListener('contextmenu', handleContextMenu);
  
      // Disable text selection
      const handleSelectStart = (e) => e.preventDefault();
      document.addEventListener('selectstart', handleSelectStart);
  
      // Block certain key combinations
      const handleKeyDown = (e) => {
        const blockedKeys = ['c', 'u', 's', 'p', 'x'];
        if (e.ctrlKey && blockedKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
        if (e.key === 'F12') {
          e.preventDefault();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('selectstart', handleSelectStart);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  return (
    <HelmetProvider>
    <Router>
      <div className="App">
        <Navbar />
        {/* Scroll to top on route change */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
          
          {/* Services Routes */}
          <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/services/UIUXDesign" element={<UIUXDesign />} />
          <Route path="/services/Database" element={<Database />} />
          <Route path="/services/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/services/EcommerceService" element={<EcommerceService />} />
          <Route path="/services/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/services/GameDevelopment" element={<GameDevelopment />} />
          <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/services/OnDemandService" element={<OnDemandService />} />
          <Route path="/services/SensorsCreation" element={<SensorsCreation />} />
          <Route path="/services/Multimedia" element={<Multimedia />} />
          <Route path="/services/AISolutions" element={<AISolutions />} />

          {/* Industries Routes */}
          <Route path="/industries/Automotive" element={<Automotive />} />
          <Route path="/industries/Education" element={<Education />} />
          <Route path="/industries/RealEstate" element={<RealEstate />} />
          <Route path="/industries/Logistics" element={<Logistics />} />
          <Route path="/industries/Healthcare" element={<Healthcare />} />
          <Route path="/industries/Entertainment" element={<Entertainment />} />
          <Route path="/industries/SAAS" element={<SAAS />} />
          <Route path="/industries/Retail" element={<Retail />} />
          <Route path="/industries/Corporation" element={<Corporation />} />
          <Route path="/industries/EcommerceIndustries" element={<EcommerceIndustries />} />
          <Route path="/industries/Fintech" element={<Fintech />} />
          <Route path="/industries/OnDemandIndustries" element={<OnDemandIndustries />} />

          {/* Insights Routes */}
          <Route path="/insights/Enterprise" element={<Enterprise />} />
          <Route path="/insights/Collaboration" element={<Collaboration />} />
          <Route path="/insights/Customers" element={<Customers />} />
          <Route path="/insights/Security" element={<Security />} />

          {/* Support Routes */}
          <Route path="/support/Help" element={<Help />} />
          <Route path="/support/Community" element={<Community />} />
          <Route path="/support/Emergency" element={<Emergency />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App
