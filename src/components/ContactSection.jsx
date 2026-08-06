'use client';
import React, { useEffect, useState } from 'react';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="text-red-500 dark:text-red-400" size={20} />,
      title: 'Email',
      value: 'naimulislamjitu585@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=naimulislamjitu585@gmail.com',
      color: 'hover:border-red-500/50',
    },
    {
      icon: (
        <FaLinkedin className="text-blue-500 dark:text-blue-400" size={20} />
      ),
      title: 'LinkedIn',
      value: 'MD NAIMUL ISLAM JITU',
      href: 'https://www.linkedin.com/in/md-naimul-islam-jitu/',
      color: 'hover:border-blue-500/50',
    },
    {
      icon: (
        <FaXTwitter className="text-cyan-600 dark:text-cyan-400" size={20} />
      ),
      title: 'Twitter',
      value: '@naimulislam585',
      href: 'https://x.com/jnaimulislam585',
      color: 'hover:border-cyan-500/50',
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className="py-20 px-4 md:px-10 w-full flex flex-col items-center overflow-hidden bg-transparent transition-colors duration-700 relative"
      id="contact"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <div className="max-w-6xl w-full flex flex-col items-center">
      {/* Header Section */}
      <ScrollReveal className="text-center mb-16" effect="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
          READY TO BUILD?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Contact Me
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full justify-items-center items-start">
        {/* Left Side - Talk to me */}
        <ScrollReveal
          className="space-y-4 w-full max-w-[280px]"
          effect="fade-right"
          delay={0.1}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Talk to me
          </h3>

          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-5 bg-white/10 dark:bg-white/[0.07] backdrop-blur-xl border border-gray-200 dark:border-white/[0.15] rounded-3xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.02] ${method.color} group shadow-lg relative overflow-hidden`}
            >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0  pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-2xl mb-3 group-hover:bg-white dark:group-hover:bg-white/15 transition-colors shadow-sm relative z-10">
                {method.icon}
              </div>

              <h4 className="text-sm font-bold text-gray-900 dark:text-white relative z-10">
                {method.title}
              </h4>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 truncate w-full text-center px-2 relative z-10 font-medium">
                {method.value}
              </p>

              <span className="flex items-center gap-2 text-[10px] font-black text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors uppercase tracking-widest relative z-10">
                Write me{' '}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </a>
          ))}
        </ScrollReveal>

        {/* Right Side - Form */}
        <ScrollReveal
          className="w-full max-w-[450px]"
          effect="fade-left"
          delay={0.15}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Write me your project
          </h3>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            {[
              { label: 'Name', type: 'text', placeholder: 'Insert your Name' },
              {
                label: 'Email',
                type: 'email',
                placeholder: 'Insert your email',
              },
            ].map((field, idx) => (
              <div key={idx} className="relative group">
                <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-bold text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-4 bg-transparent border-2 border-gray-100 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-gray-200"
                />
              </div>
            ))}

            <div className="relative group">
              <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-bold text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                Project
              </label>
              <textarea
                rows="4"
                placeholder="Write your project"
                className="w-full p-4 bg-transparent border-2 border-gray-100 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-gray-200 resize-none"
              ></textarea>
            </div>

            <button className="flex items-center justify-center gap-3 w-full lg:w-max px-12 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all duration-300 transform active:scale-98 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] group cursor-pointer">
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </form>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
