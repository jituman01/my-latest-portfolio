'use client';
import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const [isChanging, setIsChanging] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsChanging(false);
     
      setTimeout(() => AOS.refresh(), 30);
    }, 150);
  };

  if (!mounted) return null;

  const filteredData = qualificationData.filter((item) => item.type === activeTab);

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="qualification">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-tight">
            Qualification
          </h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            My Personal Journey
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-8 mb-16" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => handleTabChange('education')}
            className={`flex items-center gap-2 text-xl font-medium transition-all duration-300 relative py-1 cursor-pointer group ${
              activeTab === 'education' ? 'text-purple-500 font-bold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap size={24} /> Education
            <span className={`absolute bottom-0 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${activeTab === 'education' ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
          </button>
          
          <button
            onClick={() => handleTabChange('experience')}
            className={`flex items-center gap-2 text-xl font-medium transition-all duration-300 relative py-1 cursor-pointer group ${
              activeTab === 'experience' ? 'text-blue-500 font-bold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase size={24} /> Experience
            <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${activeTab === 'experience' ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
          </button>
        </div>

        {/* Timeline Content */}
        <div className={`relative transition-all duration-300 ${isChanging ? 'opacity-0 scale-98 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
          {filteredData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={activeTab + '-' + index} 
                className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 mb-10"
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Left Side (Even Index) */}
                {isEven ? (
                  <div className="text-right self-center transform transition-transform duration-300 hover:-translate-x-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block mt-0.5">{item.subtitle}</span>
                    <div className="flex items-center justify-end gap-2 mt-2 text-xs text-slate-400 font-medium">
                      <Calendar size={14} /> {item.date}
                    </div>
                  </div>
                ) : <div />}

                {/* Center Line & Dots */}
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${activeTab === 'education' ? 'bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]' : 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]'}`} />
                  <div className="w-[2px] h-full bg-slate-200 dark:bg-white/10 min-h-[80px]" />
                </div>

                {/* Right Side (Odd Index) */}
                {!isEven ? (
                  <div className="text-left self-center transform transition-transform duration-300 hover:translate-x-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block mt-0.5">{item.subtitle}</span>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-400 font-medium">
                      <Calendar size={14} /> {item.date}
                    </div>
                  </div>
                ) : <div />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;