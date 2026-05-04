'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Download } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-transparent text-slate-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      
      {/* Header - Added viewport margin to prevent reload jump */}
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
        {/* Left Side: Image with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="absolute -inset-4 "></div>

          <div className="relative w-64 h-75 md:w-80 md:h-90 lg:w-[400px] lg:h-[500px]  overflow-hidden ">
            <img
              src="/about-avatar.png"
              alt="Md. Naimul Islam Jitu"
              className="w-full h-full object-cover"
              style={{
        // Mask image diye nicher dikta fade kora hoyeche
        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
      }}
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <AboutCard
              icon={<Award size={24} className="text-blue-600 dark:text-blue-400" />}
              title="Experience"
              desc="Learning & Projects"
            />
            <AboutCard
              icon={<Briefcase size={24} className="text-blue-600 dark:text-blue-400" />}
              title="Completed"
              desc="10+ Projects"
            />
            <AboutCard
              icon={<Headphones size={24} className="text-blue-600 dark:text-blue-400" />}
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
            <button className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-all rounded-2xl font-semibold shadow-lg group">
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