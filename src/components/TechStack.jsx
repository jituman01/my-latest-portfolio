'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Categorized Tech Stack Data Model
const techCategories = [
  {
    title: 'Frontend Architecture',
    description: 'Building clean, fast, and interactive user interfaces.',
    borderGlow: 'hover:border-blue-500/30',
    textGlow: 'text-blue-500 dark:text-blue-400',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      
      { name: 'HeroUI', icon: 'https://avatars.githubusercontent.com/u/159396348?s=200&v=4' },
      { name: 'Lucide React', icon: 'https://lucide.dev/logo.light.svg' },
      { name: 'daisyUI', icon: 'https://i.ibb.co.com/zT6PWZwD/images-removebg-preview.png' },
      { name: 'Lottie React', icon: 'https://i.ibb.co.com/p6SmmFgQ/1-Ne-VWPYVuurc41-Qt4-Vv46g-Q.jpg' },
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Developing secure, scalable API networks and server systems.',
    borderGlow: 'hover:border-emerald-500/30',
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
    borderGlow: 'hover:border-purple-500/30',
    textGlow: 'text-purple-500 dark:text-purple-400',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
      { name: 'Better Auth', icon: 'https://i.ibb.co.com/Kct0J5SX/betterauth.jpg' },
      { name: 'Google Auth', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Netlify', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/netlify/netlify-original.svg' },
      
    ],
  },
];

const TechStack = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="py-24 px-4 md:px-10 bg-transparent flex flex-col items-center overflow-hidden"
      id="tech"
    >
      {/* Header Section */}
      <div className="text-center mb-20" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-tight">
          Technologies
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.3em] uppercase text-sm font-semibold">
          My Tech Stack
        </p>
      </div>

      {/* Boxed Bento Grid Layout */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-8">
        {techCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            data-aos="fade-up"
            data-aos-delay={catIndex * 150}
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

            {/* Inside Content Grid (Clean Flexible Flexbox) */}
            <div className="flex flex-wrap gap-6 md:gap-8 justify-start items-center">
              {category.skills.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 cursor-pointer group/icon transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Glassmorphic Icon Wrapper (Hardware Accelerated Hover) */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group-hover/icon:border-slate-400/40 dark:group-hover/icon:border-white/20 shadow-md transition-all duration-300 transform group-hover/icon:scale-105">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-9 h-9 md:w-11 md:h-11 object-contain transition-all duration-300 ${
                        tech.name === 'Next.js' ? 'dark:invert' : ''
                      }`}
                    />
                  </div>

                  {/* Icon Mini Label */}
                  <span className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-gray-400 group-hover/icon:text-slate-900 dark:group-hover/icon:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;