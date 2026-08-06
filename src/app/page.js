'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpiderNetBg from "@/components/SpiderNetBg"; 
import WelcomeLoader from "@/components/WelcomeLoader"; 

const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    if (isLoading) {
      // Stop Lenis scrolling
      if (window.lenis) window.lenis.stop();
      
      const preventDefault = (e) => e.preventDefault();
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
      
      return () => {
        window.removeEventListener("wheel", preventDefault);
        window.removeEventListener("touchmove", preventDefault);
      };
    } else {
      // Resume Lenis scrolling
      if (window.lenis) window.lenis.start();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <WelcomeLoader onComplete={() => setIsLoading(false)} />}

      <main className={`relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        
        {/* <SpiderNetBg /> */}
  
        {/* --- GLOBAL BACKGROUND GLOWS --- */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
  <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-400/20 dark:bg-blue-500/10 blur-[100px] md:blur-[150px] rounded-full" />
  <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-600/15 dark:bg-purple-600/10 blur-[90px] md:blur-[140px] rounded-full" />

  <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-400/15 dark:bg-blue-500/10 blur-[100px] md:blur-[150px] rounded-full" />
        </div>

        {/* --- SECTIONS --- */}
        <div className="relative" style={{ zIndex: 10 }}>
          <Hero isLoaded={!isLoading} />
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