'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Download } from 'lucide-react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';

import lightAnimation from '../animations/light.json';
import darkAnimation from '../animations/dark2.json';

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className=" px-6 bg-transparent text-slate-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">About</h2>

        <p className="text-slate-500 dark:text-gray-500 tracking-widest uppercase text-sm font-medium">
          My Introduction
        </p>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="absolute -inset-4"></div>

          <Lottie
            animationData={
              theme === 'dark'
                ? darkAnimation
                : lightAnimation
            }
            loop={true}
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">
            <AboutCard
              icon={
                <Award
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              }
              title="Experience"
              desc="Learning & Projects"
            />

            <AboutCard
              icon={
                <Briefcase
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              }
              title="Completed"
              desc="20+ Projects"
            />

            <AboutCard
              icon={
                <Headphones
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              }
              title="Support"
              desc="Online 24/7"
            />
          </div>

          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            I am a{' '}
            <span className="text-slate-900 dark:text-white font-semibold">
              Frontend Developer
            </span>{' '}
            dedicated to building sleek web interfaces. My focus is on{' '}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Next.js and Tailwind CSS
            </span>{' '}
            to create seamless user experiences.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-all rounded-2xl font-semibold shadow-lg group cursor-pointer">
              Download Resume

              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, desc }) => (
  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center text-center gap-2 hover:scale-105 transition-all">
    {icon}

    <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
      {title}
    </h4>

    <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400">
      {desc}
    </p>
  </div>
);

export default About;