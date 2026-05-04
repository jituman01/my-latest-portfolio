'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

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
      value: '@jitu_dev',
      href: 'https://twitter.com/jitu_dev',
      color: 'hover:border-cyan-500/50',
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // Changed once: true to once: false
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
          Get in Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Contact Me
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full justify-items-center items-start">
        {/* Left Side - Talk to me */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // Changed once: true to once: false
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-4 w-full max-w-[280px]"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200"
          >
            Talk to me
          </motion.h3>



{contactMethods.map((method, index) => (
  <motion.a
    key={index}
    href={method.href}
    target="_blank"
    variants={itemVariants}
    whileHover={{ scale: 1.03, y: -5 }}
    whileTap={{ scale: 0.97 }}
    // Dark mode background-e white/[0.07] ebong border-e white/[0.15] use kora hoyeche
    className={`flex flex-col items-center p-5 bg-white/10 dark:bg-white/[0.07] backdrop-blur-xl border border-gray-200 dark:border-white/[0.15] rounded-3xl transition-all duration-300 ${method.color} group shadow-lg relative overflow-hidden`}
  >
    {/* Subtle Inner Glow - eti card-ke arektu light dekhate shahajjo korbe */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
    
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
        className="group-hover:translate-x-1 transition-transform"
      />
    </span>
  </motion.a>
))}

        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          // Changed once: true to once: false
          viewport={{ once: false, amount: 0.2 }}
          className="w-full max-w-[450px]"
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
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-bold text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-4 bg-transparent border-2 border-gray-100 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all text-gray-900 dark:text-gray-200"
                />
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="relative group">
              <label className="absolute -top-3 left-5 px-2 bg-white dark:bg-[#0a0a0a] text-xs font-bold text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors z-10">
                Project
              </label>
              <textarea
                rows="4"
                placeholder="Write your project"
                className="w-full p-4 bg-transparent border-2 border-gray-100 dark:border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all text-gray-900 dark:text-gray-200 resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full lg:w-max px-12 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all shadow-xl group cursor-pointer"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
