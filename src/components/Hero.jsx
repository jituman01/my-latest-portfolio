'use client';
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}+</span>;
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const words = ['Stunning Websites', 'Creative UI', 'Fast Apps'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setAnimate(true), 100);

    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative bg-transparent text-slate-900 dark:text-white min-h-screen flex items-center justify-center pt-20 md:pt-0 px-6 overflow-hidden"
      id="hero"
    >
      {/* SOCIAL BAR */}
      <div
        className={`fixed left-3 md:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-40 transition-all duration-700 ease-out ${
          animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}
      >
        <SocialIcon icon={<FaLinkedin size={20} />} href="https://www.linkedin.com/in/md-naimul-islam-jitu" />
        <SocialIcon icon={<FaGithub size={20} />} href="https://github.com/jituman01" />
        <SocialIcon icon={<FaXTwitter size={20} />} href="https://x.com/jnaimulislam585" />
        <div className="w-[1px] h-16 bg-gray-300 dark:bg-gray-700 mx-auto mt-2 opacity-50" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content Side */}
        <div
          className={`order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start transition-all duration-1000 ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-medium mb-2">Hey, I'm</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-tight">
            Naimul Islam Jitu <span className="wave-hand ml-2">
  👋
        </span>
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-semibold mt-2">
            I am a <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span>
          </h2>

          <div className="flex justify-center lg:justify-start items-center gap-2 text-gray-500 text-base md:text-lg mt-4">
            🚀 Turning ideas into
            <div className="h-[30px] overflow-hidden relative w-[200px] text-left">
              {words.map((word, i) => (
                <span key={i} className={`text-blue-600 dark:text-blue-400 font-bold absolute inset-0 transition-all duration-500 ease-in-out transform ${i === index ? 'translate-y-0 opacity-100' : i < index ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'}`}>
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg md:text-lg text-gray-600 dark:text-gray-400 font-semibold mt-2">| Available for projects and collaboration</p>

          <button className="mt-8 flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer">
            Say Hello <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Image Side */}
        <div
          className={`order-1 lg:order-2 relative flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-100 ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full border border-black/5 dark:border-white/0.5 p-2 bg-white/0.5 backdrop-blur-sm shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] flex items-center justify-center">
              <div className="absolute w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[50px] pointer-events-none"></div>
              <img src="/profile3.png" alt="Naimul" className="relative z-10 w-full h-full object-contain scale-130 translate-y-3" />
            </div>

            <StatCard icon="🎓" label="Freshman" sub="Bachelor" className={`-left-16 top-10 sm:-left-14 transition-all duration-700 delay-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
            
            <StatCard 
              icon="🎯" 
              label={<AnimatedCounter end={20} duration={3000}/>} 
              sub="Projects" 
              className={`-right-10 top-0 sm:-right-7 transition-all duration-700 delay-700 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
            />
            
            <StatCard icon="⚡" label="Exp" sub="Frontend" className={`left-2/3 -bottom-7 -translate-x-1/2 transition-all duration-700 delay-1000 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:translate-x-1">
    {icon}
  </a>
);

const StatCard = ({ icon, label, sub, className }) => (
  <div className={`absolute flex items-center gap-2 px-2 py-2 lg:px-3 lg:py-2 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-xl z-50 ${className}`}>
    <span className="text-lg">{icon}</span>
    <div className="text-left">
      <p className="text-black dark:text-white font-bold lg:text-l text-sm leading-none">
        {label}
      </p>
      <p className="text-gray-500 text-[10px] uppercase mt-1">{sub}</p>
    </div>
  </div>
);

export default Hero;