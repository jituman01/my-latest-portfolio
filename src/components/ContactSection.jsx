'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { LogoLinkedin, Xmark } from '@gravity-ui/icons';
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-red-500 dark:text-red-400" size={20} />,
      title: 'Email',
      value: 'naimulislamjitu585@gmail.com',
      href: 'mailto:naimulislamjitu585@gmail.com',
      color: 'hover:border-red-500/50',
    },
    {
      icon: <FaLinkedin className="text-blue-500 dark:text-blue-400" size={20} />,
      title: 'LinkedIn',
      value: 'MD NAIMUL ISLAM JITU',
      href: 'https://www.linkedin.com/in/md-naimul-islam-jitu/',
      color: 'hover:border-blue-500/50',
    },
    {
      icon: <FaXTwitter className="text-cyan-600 dark:text-cyan-400" size={20} />,
      title: 'Twitter',
      value: '@jitu_dev',
      href: 'https://twitter.com/jitu_dev',
      color: 'hover:border-cyan-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-2 uppercase"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400">Contact Me</p>
      </div>

      {/* Grid wrapper-e justify-items-center add kora hoyeche */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full justify-items-center items-start">
        
        {/* Left Side - Talk to me */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-4 w-full max-w-[280px]"
>
  <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
    Talk to me
  </h3>

  {contactMethods.map((method, index) => (
    <motion.a
      key={index}
      href={method.href}
      target="_blank"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}

      className={`flex flex-col items-center p-4 bg-white/5 dark:bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/20 border-t-white/40 rounded-3xl transition-all duration-500 ${method.color} group shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] relative overflow-hidden`}
    >
      {/* Glass Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-2.5 bg-white/10 dark:bg-white/5 rounded-xl mb-2 group-hover:scale-110 transition-transform shadow-sm relative z-10">
        {method.icon}
      </div>
      
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white relative z-10">{method.title}</h4>
      
      <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3 truncate w-full text-center px-2 relative z-10">
        {method.value}
      </p>
      
      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors uppercase tracking-wider relative z-10">
        Write me <ArrowRight size={12} />
      </span>
    </motion.a>
  ))}
</motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[450px]"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Write me your project
          </h3>

          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="relative group">
              <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                Name
              </label>
              <input
                type="text"
                placeholder="Insert your Name"
                className="w-full p-4 bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-gray-900 dark:text-gray-200"
              />
            </div>

            <div className="relative group">
              <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                Email
              </label>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full p-4 bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-gray-900 dark:text-gray-200"
              />
            </div>

            <div className="relative group">
              <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                Project
              </label>
              <textarea
                rows="5"
                placeholder="Write your project"
                className="w-full p-4 bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-gray-900 dark:text-gray-200 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full lg:w-max px-12 py-4 bg-gray-900 dark:bg-white/5 text-white border border-gray-800 dark:border-white/10 rounded-2xl font-semibold transition-all shadow-lg"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;