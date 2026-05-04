'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { LogoGithub, LogoLinkedin, Xmark } from '@gravity-ui/icons';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const words = ['Stunning Websites', 'Creative UI', 'Fast Apps'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    }),
  };

  return (
    // bg-transparent kora hoyeche jate global background dekha jay
    <section className="relative bg-transparent text-slate-900 dark:text-white min-h-screen flex items-center justify-center pt-20 md:pt-0 px-6 overflow-hidden">
      
      {/* SOCIAL BAR - Mobile e niche jabe, Desktop e bame */}
      <motion.div 
        initial="hidden"
        animate="visible"
        className="fixed left-3 md:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-40"
      >
        <SocialIcon custom={0} variants={iconVariants} icon={<LogoLinkedin size={20} />} href="#" />
        <SocialIcon custom={1} variants={iconVariants} icon={<LogoGithub size={20} />} href="#" />
        <SocialIcon custom={2} variants={iconVariants} icon={<Xmark size={20} />} href="#" />
        <div className="w-[1px] h-16 bg-gray-300 dark:bg-gray-700 mx-auto mt-2 opacity-50" />
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Content Side */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h3 className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-medium mb-2">Hey, I'm</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight leading-tight">
            Md. Naimul Islam <span className="inline-block animate-bounce">👋</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-semibold mt-2">
            I am a <span className="text-blue-600 dark:text-blue-400">Frontend Developer</span>
          </h2>

          <div className="flex justify-center lg:justify-start items-center gap-2 text-gray-500 text-base md:text-lg mt-4">
            🚀 Turning ideas into 
            <div className="h-[30px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-blue-600 dark:text-blue-400 font-bold block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <button className="mt-8 flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-all group">
            Say Hello <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] rounded-full border border-black/5 dark:border-white/10 p-2 bg-white/5 backdrop-blur-sm shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] border-4 border-white/10">
              <img src="/profile.png" alt="Naimul" className="w-full h-full object-cover" />
            </div>

            {/* Responsive Stat Cards */}
            <StatCard
              variants={statCardVariants}
              custom={{ delay: 0.8 }}
              icon="🎓"
              label="Freshman"
              sub="Sociology"
              className="-left-10 top-10 sm:-left-20"
            />
            <StatCard
              variants={statCardVariants}
              custom={{ delay: 1.0 }}
              icon="🎯"
              label="10+"
              sub="Projects"
              className="-right-5 top-0 sm:-right-10"
            />
            <StatCard
              variants={statCardVariants}
              custom={{ delay: 1.2 }}
              icon="⚡"
              label="Exp"
              sub="Frontend"
              className="left-1/2 -bottom-5 -translate-x-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href, variants, custom }) => (
  <motion.a
    custom={custom}
    variants={variants}
    whileHover={{ scale: 1.2, x: 5 }}
    href={href}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md"
  >
    {icon}
  </motion.a>
);

const StatCard = ({ icon, label, sub, className, variants, custom }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    custom={custom}
    className={`absolute flex items-center gap-2 px-3 py-2 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-xl z-50 ${className}`}
  >
    <span className="text-lg">{icon}</span>
    <div className="text-left">
      <p className="text-black dark:text-white font-bold text-xs leading-none">{label}</p>
      <p className="text-gray-500 text-[10px] uppercase mt-1">{sub}</p>
    </div>
  </motion.div>
);

export default Hero;