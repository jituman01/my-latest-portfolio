'use client';
import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa6';

import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/jituman01',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/md-naimul-islam-jitu',
      label: 'LinkedIn',
    },
    {
      icon: <FaXTwitter size={20} />,
      href: 'https://x.com/jnaimulislam585',
      label: 'Twitter',
    },
    {
      icon: <Mail size={20} />,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=naimulislamjitu585@gmail.com',
      label: 'Email',
    },
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
          <ScrollReveal className="text-center md:text-left" effect="fade-up">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent mb-4">
              Naimul Islam Jitu
            </h2>
            <p className="text-sm text-slate-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              Building modern web experiences with precision and passion.
              Specialized in Frontend Development.
            </p>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal
            className="flex flex-col items-center gap-6"
            effect="fade-up"
            delay={0.1}
          >
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent hover:border-blue-500/20 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Scroll to Top */}
          <ScrollReveal
            className="flex flex-col items-center md:items-end"
            effect="fade-up"
            delay={0.2}
          >
            <button
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-sm font-bold shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] active:scale-97 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              {/* Liquid Shine Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10">Back to Top</span>

              <ArrowUp
                size={16}
                className="relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300"
              />

              {/* Pure CSS Hardware Accelerated Glowing Layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-md -z-10 animate-pulse" />
            </button>
          </ScrollReveal>
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