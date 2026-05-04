'use client';
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Framer Motion', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' },
  { name: 'HeroUI', icon: 'https://avatars.githubusercontent.com/u/159396348?s=200&v=4' },
  { name: 'Lucide React', icon: 'https://lucide.dev/logo.light.svg' },
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-transparent flex flex-col items-center">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase">
          Technologies
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.3em] uppercase text-sm font-medium">
          My Tech Stack
        </p>
      </motion.div>

      {/* Icons Grid */}
      <div className="max-w-5xl w-full flex flex-wrap justify-center gap-8 md:gap-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false }}
  transition={{ 
    duration: 0.4,
    delay: index * 0.05,
    ease: "easeOut" 
  }}
  whileHover={{ 
    y: -8, 
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeInOut" } 
  }}
            className="flex flex-col items-center gap-4 group"
          >
            {/* Circular Icon Container with Glass Effect */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl group-hover:border-blue-500/50 transition-all duration-300">
              
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition-all duration-300" />
              
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={`w-10 h-10 md:w-12 md:h-12 object-contain group-hover:grayscale-0 transition-all duration-300 ${tech.name === 'Next.js' ? 'dark:invert' : ''}`} 
              />
            </div>
            
            <span className="text-sm md:text-base font-semibold text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;