'use client';
import React, { useEffect, useState } from 'react';
import {
  Award,
  Briefcase,
  Headphones,
  Download,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="px-6 bg-transparent text-slate-900 dark:text-white min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
      id="about"
    >
      <ScrollReveal className="text-center mb-16" effect="fade-up">
        <h2 className="text-4xl font-bold mb-2 tracking-tight">About</h2>
        <p className="text-slate-500 dark:text-gray-500 tracking-widest uppercase text-sm font-medium">
          My Introduction
        </p>
      </ScrollReveal>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Personal Details, Education, and Interests */}
        <ScrollReveal
          className="bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col gap-8 shadow-sm"
          effect="fade-right"
        >
          {/* Section: Details and Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Details
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200/50 dark:border-white/10">
                <MapPin
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                  Location
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                  Natore, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200/50 dark:border-white/10">
                <GraduationCap
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                  Education
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-snug max-w-xs">
                  Bachelor of Social Science
                </p>
              </div>
            </div>
          </div>

          {/* Section: Interests with Rounded Pills */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
              Interests
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Frontend Development',
                'Web Applications',
                'Responsive UI/UX',
                'E-Commerce Solutions',
                'Financial Apps Logic',
              ].map(interest => (
                <span
                  key={interest}
                  className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-800 dark:text-white border border-slate-200/50 dark:border-white/10 transition-colors hover:border-blue-500/50 dark:hover:border-blue-400/50"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Original About Cards and Text */}
        <ScrollReveal className="flex flex-col gap-8" effect="fade-left">
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            <AboutCard
              icon={
                <Award size={24} className="text-blue-600 dark:text-blue-400" />
              }
              title="Experience"
              desc="Learning & Projects"
            />
            <AboutCard
              icon={
                <Briefcase
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              }
              title="Completed"
              desc="20+ Projects"
            />
            <AboutCard
              icon={
                <Headphones
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              }
              title="Support"
              desc="Online 24/7"
            />
          </div>

          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            I am a{' '}
            <span className="text-slate-900 dark:text-white font-semibold">
              Full Stack Developer
            </span>{' '}
            dedicated to building sleek web interfaces. My focus is on{' '}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Next.js and Express Js
            </span>{' '}
            to create seamless user experiences.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              href={
                'https://drive.google.com/file/d/1yTlVUgGP9svfO9-7h6kABXWYkoWBSqWC/view?usp=sharing'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-full group cursor-pointer">
                Download Resume
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Clean UI Card with Hover Effect
const AboutCard = ({ icon, title, desc }) => (
  <div className="bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center text-center gap-2 transition-all duration-300 transform hover:scale-105 hover:bg-white/80 dark:hover:bg-white/10 shadow-sm hover:shadow-md">
    {icon}
    <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
      {title}
    </h4>
    <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400">
      {desc}
    </p>
  </div>
);

export default About;
