'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SiBetterauth } from 'react-icons/si';

// Categorized Tech Stack Data Model
const techCategories = [
  {
    title: 'Frontend Architecture',
    description: 'Building clean, fast, and interactive user interfaces.',
    borderGlow: 'group-hover:border-blue-500/30',
    textGlow: 'text-blue-500 dark:text-blue-400',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Framer Motion', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' },
      { name: 'HeroUI', icon: 'https://avatars.githubusercontent.com/u/159396348?s=200&v=4' },
      { name: 'Lucide React', icon: 'https://lucide.dev/logo.light.svg' },
      { name: 'daisyUI', icon: 'https://i.ibb.co.com/zT6PWZwD/images-removebg-preview.png' },
      {name: 'Lottie React',icon: 'https://i.ibb.co.com/p6SmmFgQ/1-Ne-VWPYVuurc41-Qt4-Vv46g-Q.jpg'}
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Developing secure, scalable API networks and server systems.',
    borderGlow: 'group-hover:border-emerald-500/30',
    textGlow: 'text-emerald-500 dark:text-emerald-400',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      
    ],
  },
  {
    title: 'Authentication & Tools',
    description: 'Version control and identity provider authentication flow.',
    borderGlow: 'group-hover:border-purple-500/30',
    textGlow: 'text-purple-500 dark:text-purple-400',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Better Auth', icon: 'https://i.ibb.co.com/Kct0J5SX/betterauth.jpg' },
      { 
      name: 'Google Auth', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' 
      },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Netlify', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/netlify/netlify-original.svg' },
      {name: 'GitHub',icon: 'https://skillicons.dev/icons?i=github'}
    ],
  },
];

// Stagger Animation Setup
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
};

const TechStack = () => {
  return (
    <section
      className="py-24 px-4 md:px-10 bg-transparent flex flex-col items-center overflow-hidden"
      id="tech"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-tight">
          Technologies
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.3em] uppercase text-sm font-semibold">
          My Tech Stack
        </p>
      </motion.div>

      {/* Boxed Bento Grid Layout */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-8">
        {techCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className={`group p-6 md:p-8 rounded-[32px] bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.05] hover:bg-white/[0.04] dark:hover:bg-white/[0.02] ${category.borderGlow} transition-all duration-500 shadow-xl relative overflow-hidden`}
          >
            {/* Soft Ambient Card Background Glow */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            {/* Box Header Content */}
            <div className="mb-8 max-w-xl">
              <h3 className={`text-xl font-bold uppercase tracking-wider mb-2 ${category.textGlow}`}>
                {category.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Inside Content Grid (Icons mapping) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-wrap gap-6 md:gap-8 justify-start items-center"
            >
              {category.skills.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2, ease: 'easeInOut' },
                  }}
                  className="flex flex-col items-center gap-3 cursor-pointer"
                >
                  {/* Glassmorphic Icon Wrapper */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20 shadow-md transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-9 h-9 md:w-11 md:h-11 object-contain transition-all duration-300 ${
                        tech.name === 'Next.js' ? 'dark:invert' : ''
                      }`}
                    />
                  </div>

                  {/* Icon Mini Label */}
                  <span className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;