'use client';
import React, { useEffect, useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const frontendSkills = [
  { name: 'HTML5', level: 'Expert' },
  { name: 'Next.JS', level: 'Expert' },
  { name: 'CSS3', level: 'Expert' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'React.JS', level: 'Expert' },
];

const backendSkills = [
  { name: 'Node.JS', level: 'Expert' },
  { name: 'Express.JS', level: 'Expert' },
  { name: 'MongoDB', level: 'Expert' },
];

const SkillCard = ({ title, skills, cardDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={cardDelay}
      className="relative group p-6 md:p-8 rounded-[2rem] bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl flex-1 max-w-sm w-full overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Liquid Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 
        data-aos="fade-down"
        data-aos-delay={cardDelay + 100}
        className="text-xl font-semibold text-center mb-8 text-slate-800 dark:text-slate-100"
      >
        {title}
      </h3>

      {/* Inner Container Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            data-aos="fade-up"
            data-aos-delay={cardDelay + 150 + (index * 50)}
            className="flex items-start gap-2.5 group/item"
          >
            <BadgeCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0 transition-transform duration-200 group-hover/item:scale-110 group-hover/item:rotate-6" />
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-200 group-hover/item:text-blue-500">
                {skill.name}
              </h4>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                {skill.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="skills">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white uppercase tracking-tight">
          Skills
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-[10px] font-semibold">
          My Technical Level
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-stretch">
        <SkillCard title="Frontend Developer" skills={frontendSkills} cardDelay={100} />
        <SkillCard title="Backend Developer" skills={backendSkills} cardDelay={200} />
      </div>
    </section>
  );
};

export default Skills;