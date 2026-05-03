'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home ,
  Cpu,
  GraduationCap,
  Briefcase,
  Send,
  Sun,
  Moon,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Tech Stack', href: '/tech', icon: <Cpu size={18} /> },
    { name: 'Qualification', href: '/edu', icon: <GraduationCap size={18} /> },
    { name: 'Projects', href: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Contact Me', href: '/contact', icon: <Send size={18} /> },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 p-2 bg-white/10 dark:bg-[#1a1a1a]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-lg"
      >
        <div className="flex items-center gap-1 px-1">
          {navItems.map(item => (
            <Link key={item.name} href={item.href} className="relative group">
              <motion.div
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  hovered === item.name
                    ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-xs font-medium hidden md:block">
                  {item.name}
                </span>
              </motion.div>

              {hovered === item.name && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-1" />

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 mr-1 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
