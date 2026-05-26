'use client';
import React, { useState } from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import SpiderNetBg from "@/components/SpiderNetBg"; 
import WelcomeLoader from "@/components/WelcomeLoader"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <WelcomeLoader onComplete={() => setIsLoading(false)} />}

      <main className={`relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        
        <SpiderNetBg />

        {/* --- GLOBAL BACKGROUND GLOWS --- */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          
          {/* Top Left Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-400/30 dark:bg-blue-400/20 blur-[100px] md:blur-[150px] rounded-full" />
          
          {/* Middle Right Glow */}
          <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-600/20 dark:bg-purple-600/10 blur-[90px] md:blur-[140px] rounded-full" />
          
          {/* Bottom Left Glow */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-400/20 dark:bg-blue-500/15 blur-[100px] md:blur-[150px] rounded-full" />
        </div>

        {/* --- SECTIONS --- */}
        <div className="relative" style={{ zIndex: 10 }}>
          <Hero />
          <About />
          <TechStack />
          <Skills />
          <Qualification />
          <Projects />
          <Achievements />
          <Services />
          <ContactSection />
          <Footer />
        </div>
        
      </main>
    </>
  );
}