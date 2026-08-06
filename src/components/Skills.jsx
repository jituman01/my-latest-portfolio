'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: "frontend",
    icon: "Code",
    label: "FRONTEND DEVELOPMENT",
    skills: [
      { name: "HTML5", percent: 97 },
      // { name: "CSS3", percent: 95 },
      { name: "TAILWIND CSS", percent: 90 },
      { name: "JAVASCRIPT", percent: 85 },
      { name: "TYPESCRIPT", percent: 75 },
      { name: "REACT.JS", percent: 85 },
      { name: "NEXT.JS", percent: 85 },
    ],
  },
 
  {
    id: "backend",
    icon: "Database",
    label: "BACKEND & DATABASE",
    skills: [
      { name: "Express.js", percent: 75 },
      { name: "NODE.JS", percent: 75 },
      { name: "MongoDB", percent: 75 },
      { name: "FIREBASE", percent: 80 },
      { name: "JWT Authentication", percent: 80 },
      { name: "REST APIs", percent: 80 },
    ],
  },
   {
    id: "uiux",
    icon: "Palette",
    label: "UI/UX & ANIMATION",
    skills: [
      { name: "FIGMA", percent: 75 },
      { name: "FIGMA TO CODE", percent: 90 },
      { name: "RESPONSIVE DESIGN", percent: 90 },
      { name: "GSAP", percent: 70 },
      { name: "CROSS-BROWSER COMPATIBILITY", percent: 85 },
      { name: "UI IMPLEMENTATION", percent: 90 },
    ],
  },
  {
    id: "tools",
    icon: "Terminal",
    label: "TOOLS & DEPLOYMENT",
    skills: [
      { name: "GIT & GITHUB", percent: 85 },
      { name: "VERCEL", percent: 85 },
      { name: "NETLIFY", percent: 85 },
      { name: "Render", percent: 80 },
      { name: "NPM", percent: 85 },
      { name: "DEVTOOLS", percent: 85 },
    ],
  },
];

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Code':
      return <Code className="w-5 h-5 text-purple-600 " />;
    case 'Palette':
      return <Palette className="w-5 h-5 text-purple-600 " />;
    case 'Database':
      return <Database className="w-5 h-5 text-purple-600 " />;
    case 'Terminal':
      return <Terminal className="w-5 h-5 text-purple-600 " />;
    default:
      return <Code className="w-5 h-5 text-purple-600 " />;
  }
};

const AnimatedNumber = ({ value, isInView, delay }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1200; // matches transition duration
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = (end - start) / totalSteps;

    let timer;
    const startTimeout = setTimeout(() => {
      let currentStep = 0;
      const counter = () => {
        currentStep++;
        if (currentStep >= totalSteps) {
          setDisplay(end);
        } else {
          setDisplay(Math.round(start + increment * currentStep));
          timer = setTimeout(counter, stepTime);
        }
      };
      counter();
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timer);
    };
  }, [isInView, value, delay]);

  return <>{display}</>;
};

const SkillBar = ({ skill, isInView, delay }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 text-xs font-bold select-none">
        <span className="text-slate-700 dark:text-neutral-300 uppercase tracking-wider text-[10px] md:text-[11px]">
          {skill.name}
        </span>
        <span className="text-blue-600  font-mono">
          <AnimatedNumber value={skill.percent} isInView={isInView} delay={delay} />%
        </span>
      </div>
      <div className="w-full h-1.5 bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-900 to-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category, cardIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.08, ease: "easeOut" }}
      className="p-6 md:p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 backdrop-blur-3xl border border-slate-200/50 dark:border-white/5  flex flex-col justify-between overflow-hidden relative group hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500"
    >
      <div>
        {/* Card Icon */}
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/10 mb-4 group-hover:scale-105 transition-transform duration-300">
          {getCategoryIcon(category.icon)}
        </div>
        
        {/* Category Label */}
        <h3 className="text-xs font-black tracking-widest text-slate-800 dark:text-white uppercase mb-4">
          {category.label}
        </h3>
        
        <hr className="border-slate-200 dark:border-white/5 mb-6" />

        {/* Skill Rows */}
        <div className="flex flex-col gap-5">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              isInView={isInView}
              delay={i * 0.06 + 0.1} // staggered cascade
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className=''>
      <div className="py-10 px-6 md:px-12 max-w-7xl mx-auto bg-transparent overflow-hidden " id="skills">

      {/* Header section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 md:mb-24">
        {/* Left Header Title */}
        <div className="md:col-span-8 flex flex-col items-start">
          <span className="text-gray-600 dark:text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block animate-pulse">
            MY DIGITAL TOOLKIT / 04
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none select-none">
            <span className="dark:text-white text-black">THE</span><br />
            <span className="text-blue-500">ENGINE.</span>
          </h2>
        </div>
        
        {/* Right Header Description */}
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm md:text-right">
            I focus on the most reliable technologies to ship products
            that actually work and look amazing.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard 
            key={category.id} 
            category={category} 
            cardIndex={index} 
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;