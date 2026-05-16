'use client';
import React from 'react';
import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiHtml5Line,
  RiCss3Line,
  RiShieldUserLine,
} from 'react-icons/ri';
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoFirebase,
} from 'react-icons/io5';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiGit,
} from 'react-icons/si';
import { ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';
// import { Button } from '@heroui/react';

// 4-ti alada orbit ring-er jonno perfectly aligned dynamic configurations
const orbitData = [
  {
    ring: 1,
    size: 'w-[180px] h-[180px]',
    radius: 90, // 180 / 2 = Exact Centerline Node
    duration: 20,
    isReverse: false,
    icons: [
      <RiNextjsLine key="next" />,
      <RiReactjsLine key="react" />,
      <RiTailwindCssLine key="tw" />,
    ],
  },
  {
    ring: 2,
    size: 'w-[300px] h-[300px]',
    radius: 150, // 300 / 2 = Exact Centerline Node
    duration: 24,
    isReverse: true,
    icons: [
      <IoLogoJavascript key="js" />,
      <SiTypescript key="ts" />,
      <IoLogoNodejs key="node" />,
    ],
  },
  {
    ring: 3,
    size: 'w-[420px] h-[420px]',
    radius: 210, // 420 / 2 = Exact Centerline Node
    duration: 32,
    isReverse: false,
    icons: [
      <SiMongodb key="mongo" />,
      <SiExpress key="express" />,
      <SiPrisma key="prisma" />,
      <IoLogoFirebase key="fb" />,
    ],
  },
  {
    ring: 4,
    size: 'w-[540px] h-[540px]',
    radius: 270, // 540 / 2 = Exact Centerline Node
    duration: 40,
    isReverse: true,
    icons: [
      <RiHtml5Line key="html" />,
      <RiCss3Line key="css" />,
      <SiGit key="git" />,
      <RiShieldUserLine key="auth" />,
    ],
  },
];

const SkillsOrbit = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Dynamic Cyberpunk Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content Area */}
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            One stack{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">
              to build your idea
            </span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            / Ecosystem & Tools
          </p>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-light mx-auto lg:mx-0 pt-2">
            Professional stack focusing on building clean, fully-optimized,
            dynamic frontend architectures and scalable full-stack applications.
          </p>

          <div className='flex gap-8'>

          
          <button 
      onClick={() => {
       document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
        });
      }}
       className="mt-8 flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-all group cursor-pointer"
       >
      Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
            <button 
      onClick={() => {
       document.getElementById('tech')?.scrollIntoView({ 
      behavior: 'smooth' 
        });
      }}
       className="mt-8 flex items-center gap-2 px-4 py-2.5 border border-gray-400 text-gray-600 dark:text-gray-400 rounded-xl font-bold shadow-l hover:scale-105 hover:bg-white dark:hover:bg-black transition-all group cursor-pointer"
       >
      Explore the stack
      </button>

          </div>
        </div>

        {/* Right Content Area: 4-Track Orbiting Planetary System */}
        <div className="relative flex items-center justify-center h-[560px] w-full overflow-hidden sm:overflow-visible">
          {/* Central Sun core with Dynamic Blinking Glow */}
          <div className="absolute z-30 w-16 h-16 rounded-full border border-purple-400 dark:border-blue-900 flex items-center justify-center backdrop-blur-xl uppercase animate-glow-pulse ">
            <h3 className="text-xs font-bold tracking-wider text-slate-800 dark:text-white">
              JITU
            </h3>
          </div>

          {/* Map Orbit System */}
          {orbitData.map(orbit => (
            <div
              key={orbit.ring}
              className="absolute flex items-center justify-center"
            >
              {/* Radial Orbit Ring Pathway */}
              <div
                className={`absolute rounded-full border border-slate-900/[0.06] dark:border-white/[0.05] shadow-[inset_0_0_12px_rgba(0,0,0,0.01)] ${orbit.size}`}
              />

              {/* Orbiting element handling node rotation with direct/reverse mapping */}
              <div
                className={`absolute flex items-center justify-center ${
                  orbit.isReverse ? 'animate-orbit-reverse' : 'animate-orbit'
                }`}
                style={{
                  width: orbit.size
                    .split(' ')[0]
                    .replace('w-[', '')
                    .replace(']', ''),
                  height: orbit.size
                    .split(' ')[1]
                    .replace('h-[', '')
                    .replace(']', ''),
                  animationDuration: `${orbit.duration}s`,
                }}
              >
                {orbit.icons.map((icon, idx) => {
                  const totalIcons = orbit.icons.length;
                  const angle = (idx * 360) / totalIcons;

                  return (
                    <div
                      key={idx}
                      className="absolute w-11 h-11 flex items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white/90 dark:bg-[#0c0d12]/90 text-slate-800 dark:text-white shadow-md transition-all duration-300"
                      style={{
                        transform: `rotate(${angle}deg) translate(${orbit.radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      {/* Counter rotating wrap keeping icon structurally vertical regardless of track direction */}
                      <div
                        className={
                          orbit.isReverse
                            ? 'animate-counter-orbit-reverse'
                            : 'animate-counter-orbit'
                        }
                        style={{ animationDuration: `${orbit.duration}s` }}
                      >
                        <span className="text-xl block">{icon}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded style scopes for animation optimization */}
      <style jsx global>{`
        /* Central Core Blinking Breath Shadow Glow */
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 99, 235, 0.6),
              0 0 15px rgba(168, 85, 247, 0.3);
          }
          100% {
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          }
        }

        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }

        /* Clockwise Rotations */
        @keyframes orbitLoop {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counterLoop {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        /* Counter-Clockwise Rotations (Left side movement) */
        @keyframes orbitLoopReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes counterLoopReverse {
          from {
            transform: rotate(-360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        /* Animation classes initialization */
        .animate-orbit {
          animation: orbitLoop linear infinite;
        }
        .animate-counter-orbit {
          animation: counterLoop linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbitLoopReverse linear infinite;
        }
        .animate-counter-orbit-reverse {
          animation: counterLoopReverse linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsOrbit;
