'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Cpu,
  GraduationCap,
  Briefcase,
  Send,
  Sun,
  Moon,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, color: 'text-yellow-300' },
    { name: 'Tech Stack', href: '#tech', icon: Cpu, color: 'text-cyan-300' },
    {
      name: 'Qualification',
      href: '#qualification',
      icon: GraduationCap,
      color: 'text-purple-300',
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: Briefcase,
      color: 'text-orange-300',
    },
    {
      name: 'Contact Me',
      href: '#contact',
      icon: Send,
      color: 'text-pink-300',
    },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center items-center z-50 px-2">
  {/* Left Logo */}
  <Link
    href="/"
    className="absolute left-3 md:left-6 flex items-center justify-center w-11 h-11  overflow-hidden"
  >
        <div>
          <Image
      src={theme === 'dark' ? '/light-logo.png' : '/dark-logo.png'}
      alt="Logo"
      width={20}
      height={20}
      className="object-cover w-full h-full"
    />
    </div>
  </Link>

  {/* Center Navbar */}
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="flex items-center gap-1 p-1.5 md:p-2 bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-lg max-w-full"
  >
    <div className="flex items-center gap-0.5 md:gap-1 px-1">
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link key={item.name} href={item.href} className="relative group">
            <motion.div
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center gap-2 px-2.5 md:px-4 py-2 rounded-full transition-all duration-300 relative ${
                isActive || hovered === item.name
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="flex items-center justify-center p-1.5 rounded-lg transition-all duration-300">
                <Icon
                  size={18}
                  className={`${item.color} drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform`}
                />
              </span>

              <span className="text-xs font-medium hidden lg:block">
                {item.name}
              </span>

              {(isActive || hovered === item.name) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black/10 dark:bg-white/15 rounded-full -z-10"
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </div>
  </motion.div>

  {/* Right Theme Toggle */}
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="absolute right-3 md:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg text-gray-500 dark:text-white hover:text-black dark:hover:text-white transition-colors"
  >
    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
  </button>
</div>
  );
};

export default Navbar;