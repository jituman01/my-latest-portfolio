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

  // Animation Variants
  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-16 px-6 overflow-hidden">
      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] md:top-[20%] -left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 dark:bg-blue-600/10 blur-[80px] md:blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/10 dark:bg-purple-600/5 blur-[70px] md:blur-[120px] rounded-full" />
      </div>

      {/* --- SOCIAL BAR --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-5 z-40"
      >
        <SocialIcon custom={0} variants={iconVariants} icon={<LogoLinkedin size={20} />} href="#" />
        <SocialIcon custom={1} variants={iconVariants} icon={<LogoGithub size={20} />} href="#" />
        <SocialIcon custom={2} variants={iconVariants} icon={<Xmark size={20} />} href="#" />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-[1px] h-12 md:h-16 bg-gray-300 dark:bg-gray-700 mx-auto mt-1 md:mt-2 opacity-50 origin-top" 
        />
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-medium"
            >
              Hey, I'm
            </motion.h3>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tight leading-tight"
            >
              Md. Naimul Islam{' '}
              <motion.span 
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-block text-3xl md:text-5xl"
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-semibold"
            >
              I am a{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Frontend Developer
              </span>
            </motion.h2>

            {/* Dynamic Word Swapper */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start items-center gap-2 max-w-md mx-auto lg:mx-0 text-gray-500 dark:text-gray-500 text-base md:text-lg mt-2 font-medium"
            >
              🚀 Turning ideas into{' '}
              <div className="h-[30px] overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-600 dark:text-blue-400 font-bold block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="hidden md:inline">💻</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-md mx-auto lg:mx-0 text-gray-400 dark:text-gray-600 leading-relaxed text-sm md:text-base italic"
            >
              | Available for projects and collaborations 🌟
            </motion.p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all rounded-full font-bold text-sm md:text-base group shadow-2xl"
              >
                Say Hello{' '}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image & Stats */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-2 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-black/5 dark:border-white/10 p-3 bg-white/5 backdrop-blur-sm shadow-2xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] border-4 border-white/10 shadow-inner">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* --- STAT CARDS --- */}
            <StatCard
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.8 }}
              icon="🎓"
              label="Freshman"
              sub="Sociology Student"
              className="-left-[43%] sm:-left-[30%] top-[25%] origin-right"
            />
            <StatCard
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 1.0 }}
              icon="🎯"
              label="10+"
              sub="Finished Projects"
              className="-right-[30%] sm:-right-[20%] top-[10%] origin-left"
            />
            <StatCard
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 1.2 }}
              icon="⚡"
              label="Exp"
              sub="Frontend Dev"
              className="left-[10%] sm:left-[20%] -bottom-[8%] sm:-bottom-[12%] origin-top"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 text-sm hidden sm:flex">
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </div>
        Scroll Down
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href, variants, custom }) => (
  <motion.a
    custom={custom}
    variants={variants}
    whileHover={{ scale: 1.2, x: 5, rotate: 8 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1a1a1a]/80 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg backdrop-blur-md"
  >
    {icon}
  </motion.a>
);

const StatCard = ({ icon, label, sub, className, variants, initial, animate, custom }) => (
  <motion.div
    variants={variants}
    initial={initial}
    animate={animate}
    custom={custom}
    whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
    className={`absolute flex items-center gap-2.5 px-3 py-2 md:px-5 md:py-3 bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl z-50 whitespace-nowrap ${className}`}
  >
    <span className="text-base md:text-xl">{icon}</span>
    <div className="text-left">
      <p className="text-black dark:text-white font-bold text-[10px] sm:text-xs md:text-sm leading-none">{label}</p>
      <p className="text-gray-500 dark:text-gray-400 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider mt-1">{sub}</p>
    </div>
  </motion.div>
);

export default Hero;