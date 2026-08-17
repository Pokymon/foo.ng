/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ViewType } from "./types";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import MiniPricingBlock from "./components/MiniPricingBlock";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HomepageCTA from "./components/HomepageCTA";
import ServicePage from "./components/ServicePage";
import { FallingPattern } from "./components/ui/falling-pattern";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  // Custom view scrolling function - behave like separate standalone pages
  const handleSetView = (view: ViewType) => {
    setCurrentView(view);
    
    // Automatically reset scroll offset so transition looks pristine
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 select-none relative scroll-smooth selection:bg-brand/10 selection:text-brand">
      
      {/* Dynamic Animated Brand Background Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FallingPattern
          className="w-full h-full opacity-65"
          color="#33c07a"
          backgroundColor="#ffffff"
          duration={140}
          blurIntensity="1px"
          density={1.2}
        />
      </div>

      {/* Absolute brand header navigation */}
      <Header currentView={currentView} setView={handleSetView} />

      {/* Main interactive portal frame canvas */}
      <main id="portal-frame-canvas" className="relative z-10 overflow-hidden">
        
        {/* 1. Render Home Page / Landing View */}
        {currentView === "home" && (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Hero setView={handleSetView} />
            <Services setView={handleSetView} />
            <About setView={handleSetView} />
            <MiniPricingBlock setView={handleSetView} />
            <FAQ />
            <HomepageCTA setView={handleSetView} />
          </motion.div>
        )}

        {/* 3. Render Stand-alone About view */}
        {currentView === "about" && (
          <motion.div
            key="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="pt-8"
          >
            <About setView={handleSetView} />
            <MiniPricingBlock setView={handleSetView} />
            <FAQ />
            <HomepageCTA setView={handleSetView} />
          </motion.div>
        )}

        {/* 4. Render Stand-alone Pricing view */}
        {currentView === "pricing" && (
          <motion.div
            key="pricing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="pt-8"
          >
            <Pricing />
            <FAQ />
            <HomepageCTA setView={handleSetView} />
          </motion.div>
        )}

        {/* 6. Render Stand-alone Contact Us Page */}
        {currentView === "contact" && (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="pt-0 bg-transparent"
          >
            <ContactForm setView={handleSetView} />
          </motion.div>
        )}

        {/* 7. Render Service specific sub-pages */}
        {currentView.startsWith("service-") && (
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ServicePage
              serviceId={currentView.replace("service-", "") as any}
              setView={handleSetView}
            />
          </motion.div>
        )}

      </main>

      {/* Structured Footer quick links */}
      <Footer setView={handleSetView} />

    </div>
  );
}
