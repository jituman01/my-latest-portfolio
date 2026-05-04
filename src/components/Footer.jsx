'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/Jitu01-hub', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/md-naimul-islam-jitu/', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com/jitu_dev', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:naimulislamjitu585@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-black/5 dark:border-white/10 bg-white/5 dark:bg-[#0a0a0a]/50 backdrop-blur-xl overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Logo & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent mb-4">
              Naimul Islam Jitu
            </h2>
            <p className="text-sm text-slate-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              Building modern web experiences with precision and passion. Specialized in Frontend Development.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent hover:border-blue-500/20 transition-all shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div 
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  className="flex flex-col items-center md:items-end"
>
  <motion.button
    onClick={scrollToTop}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)", // Blue glow on hover
    }}
    whileTap={{ scale: 0.95 }}
    // Liquid Glass Styling
    className="
      group relative flex items-center gap-2 px-6 py-3 rounded-full 
      bg-white/10 dark:bg-white/5 
      backdrop-blur-md 
      border border-black/10 dark:border-white/10
      text-slate-900 dark:text-white 
      text-sm font-bold shadow-lg 
      transition-all duration-500
      overflow-hidden p-4 
    "
  >
    {/* Liquid Shine Effect Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <span className="relative z-10">Back to Top</span>
    
    <ArrowUp 
      size={16} 
      className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" 
    />

    {/* Optional: Subtle Animated Border for "Liquid" look */}
    <motion.div
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-md -z-10"
    />
  </motion.button>
</motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-4">
  <p className="text-xs text-slate-500 dark:text-gray-500 font-medium text-center">
    © {currentYear} Md. Naimul Islam Jitu. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;