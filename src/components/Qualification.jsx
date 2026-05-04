'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const qualificationData = [
  {
    title: 'Bachelor of Social Science',
    subtitle: 'Bilchalan Shahid Shamsuzzoha Govt. College',
    date: '2025 - Present',
    type: 'education',
  },
  {
    title: 'Higher Secondary Certificate',
    subtitle: 'Bilchalan Shahid Shamsuzzoha Govt. College',
    date: '2022 - 2024',
    type: 'education',
  },
  {
    title: 'Secondary School Certificate',
    subtitle: 'Gurudaspur Govt. Pilot Model High School',
    date: '2016 - 2021',
    type: 'education',
  },
  {
    title: 'Frontend Developer (Aspiring)',
    subtitle: 'Self-taught & Project Based',
    date: 'Nov 2025 - Present',
    type: 'experience',
  },
  {
    title: 'Full Stack Development',
    subtitle: 'Node.js, ExpressJs & MongoDB Integration',
    date: 'May 2026 - Present',
    type: 'experience',
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase"
          >
            Qualification
          </motion.h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            My Personal Journey
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 text-xl font-medium transition-all ${
              activeTab === 'education' ? 'text-purple-500 border-b-2 border-purple-400' : 'text-slate-400'
            }`}
          >
            <GraduationCap size={24} /> Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 text-xl font-medium transition-all ${
              activeTab === 'experience' ? 'text-blue-500 border-b-2 border-blue-400' : 'text-slate-400'
            }`}
          >
            <Briefcase size={24} /> Experience
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {qualificationData
            .filter((item) => item.type === activeTab)
            .map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 mb-10">
                
                {/* Left Side (Even Index) */}
                {index % 2 === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-right"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</span>
                    <div className="flex items-center justify-end gap-2 mt-2 text-xs text-slate-400">
                      <Calendar size={14} /> {item.date}
                    </div>
                  </motion.div>
                ) : <div />}

                {/* Center Line & Dots */}
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${activeTab === 'education' ? 'bg-purple-500' : 'bg-blue-500'} shadow-[0_0_10px_rgba(168,85,247,0.5)]`} />
                  <div className="w-[2px] h-full bg-slate-200 dark:bg-white/10" />
                </div>

                {/* Right Side (Odd Index) */}
                {index % 2 !== 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-left"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</span>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                      <Calendar size={14} /> {item.date}
                    </div>
                  </motion.div>
                ) : <div />}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;