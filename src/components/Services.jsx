'use client';
import React from 'react';
import { Code2, Layout, Smartphone, Globe, ShieldCheck, Zap } from 'lucide-react';

import ScrollReveal from './ScrollReveal';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8 text-blue-500 dark:text-cyan-400" />,
      title: 'Frontend Development',
      description: 'Building clean, high-performance, and responsive user interfaces using React.js, Next.js, and Tailwind CSS with pixel-perfect precision.',
    },
    {
      id: 2,
      icon: <Layout className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
      title: 'UI/UX Implementation',
      description: 'Converting Figma, Adobe XD, or complex design mockups into fully functional, interactive, and user-friendly web applications.',
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8 text-orange-500 dark:text-orange-400" />,
      title: 'Responsive Web Design',
      description: 'Ensuring your website looks flawless and works seamlessly across all modern devices, including mobile phones, tablets, and desktops.',
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimizing web vitals, implementing lazy loading, and ensuring lightning-fast load times for a buttery-smooth user experience.',
    },
    {
      id: 5,
      icon: <Globe className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      title: 'API Integration',
      description: 'Connecting frontend interfaces with backend RESTful APIs or MongoDb, managing complex states, and handling real-time data fetching.',
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
      title: 'Clean & Maintainable Code',
      description: 'Writing semantic HTML, well-structured component architectures, and scalable CSS/Tailwind utilities for easy long-term maintenance.',
    },
  ];

  return (
    <section id="services" className="relative py-20 px-6 w-full scroll-mt-16 bg-white dark:bg-black transition-colors duration-700">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16" effect="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white bg-clip-text text-transparent mb-4">
          What I Offer
        </h2>
        <div className="w-16 h-1 bg-blue-500 dark:bg-cyan-400 mx-auto rounded-full mb-4" />
        <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 max-w-md mx-auto">
          Providing specialized frontend services to bring your digital concepts to life with speed, precision, and modern technology.
        </p>
      </ScrollReveal>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, index) => (
          <ScrollReveal
            key={service.id}
            effect="fade-up"
            delay={(index * 50) / 1000}
            className="
              group relative p-6 md:p-8 rounded-3xl 
              bg-neutral-50/60 dark:bg-white/[0.02] 
              backdrop-blur-md 
              border border-black/[0.03] dark:border-white/[0.05]
              hover:border-blue-500/30 dark:hover:border-cyan-400/30
              shadow-sm hover:shadow-xl
              hover:-translate-y-1.5
              transition-all duration-300 ease-out
              overflow-hidden
            "
          >
            {/* Hover-Glow Background Effect */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none -z-10" />

            {/* Icon Wrapper */}
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/[0.04] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
              {service.icon}
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-400 group-hover:text-slate-600 dark:group-hover:text-gray-300 transition-colors duration-200">
              {service.description}
            </p>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;