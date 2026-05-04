'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const frontendSkills = [
  { name: 'HTML5', level: 'Expert' },
  { name: 'Next.JS', level: 'Expert' },
  { name: 'CSS3', level: 'Expert' },
  { name: 'Tailwind Css', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'React.JS', level: 'Expert' },
];

const backendSkills = [
  { name: 'Node.JS', level: 'Expert' },
  {  },
  { name: 'Express.JS', level: 'Expert' },
  {  },
  { name: 'MongoDB', level: 'Expert' },
  {  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.3 } 
  },
};

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} 
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="relative group p-6 md:p-8 rounded-[2rem] bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl flex-1 max-w-sm w-full overflow-hidden"
  >
    {/* Liquid Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <h3 className="text-xl font-semibold text-center mb-8 text-slate-800 dark:text-slate-100">
      {title}
    </h3>

    {/* Inner Container with variants */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-2 gap-x-4 gap-y-8"
    >
      {skills.map((skill, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          className="flex items-start gap-2.5"
        >
          <BadgeCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              {skill.name}
            </h4>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              {skill.level}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white uppercase">
          Skills
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-[10px] font-semibold">
          My Technical Level
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-stretch">
        <SkillCard title="Frontend Developer" skills={frontendSkills} />
        <SkillCard title="Backend Developer" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;