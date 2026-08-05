'use client';
import React, { useEffect, useState } from 'react';
import { Home, Cpu, GraduationCap, Briefcase, Send, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero', icon: Home, color: 'text-yellow-500 dark:text-yellow-400' },
    { name: 'Tech Stack', href: '#tech', id: 'tech', icon: Cpu, color: 'text-cyan-500 dark:text-cyan-400' },
    { name: 'Qualification', href: '#qualification', id: 'qualification', icon: GraduationCap, color: 'text-purple-500 dark:text-purple-400' },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Briefcase, color: 'text-orange-500 dark:text-orange-400' },
    { name: 'Contact Me', href: '#contact', id: 'contact', icon: Send, color: 'text-pink-500 dark:text-pink-400' },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; 

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 flex justify-center items-center z-50 px-4 max-w-7xl mx-auto">
      
      <Link
        href="/"
        className="absolute left-4 md:left-8 items-center justify-center mt-5 w-10 h-10 hover:scale-105 transition-transform"
      >
        <Image
          src={theme === 'dark' ? '/light-logo.png' : '/dark-logo.png'}
          alt="Logo"
          width={26}
          height={26}
          className="object-contain"
          priority
        />
      </Link>

      <nav className="flex items-center gap-1 p-3 bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-full shadow-xl transition-all max-w-[95vw] sm:max-w-auto overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-0.5 md:gap-1 px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    const targetEl = document.querySelector(item.href);
                    if (targetEl && window.lenis) {
                      window.lenis.scrollTo(targetEl, {
                        offset: -80,
                        duration: 1.2,
                      });
                    } else if (targetEl) {
                      targetEl.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="relative py-1.5 px-3 md:px-4 rounded-full transition-all duration-200 group flex items-center gap-2 select-none"
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`absolute inset-0 rounded-full bg-neutral-900/5 dark:bg-white/10 transition-all duration-200 -z-10 transform ${
                    isActive || hovered === item.name ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                />

                <Icon
                  size={17}
                  className={`${item.color} transition-transform duration-200 ${
                    isActive || hovered === item.name ? 'scale-110' : 'scale-100'
                  }`}
                />

                <span
                  className={`text-xs font-semibold transition-colors duration-200 hidden md:block ${
                    isActive ? 'text-blue-600 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle Theme"
        className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg text-slate-600 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
      >
        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
      </button> */}
    </div>
  );
};

export default Navbar;