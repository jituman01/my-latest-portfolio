'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { LogoGithub } from '@gravity-ui/icons';

const projectsData = [
  {
    image: 'https://i.ibb.co.com/Hp1Hz8ff/Behance-Mockup-Shot-Cover-9.png',
    title:'DocAppoint: Appointment Booking Platform',
    description:
      'A Doctor Appointment Management System is a web-based platform designed to streamline the interaction between patients and healthcare providers. Its primary goal is to provide a fast, efficient, and hassle-free experience for patients booking medical consultations.',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'BetterAuth', 'ExpressJs','GoogleAuth'],
    github: 'https://github.com/jituman01/doctor-appointment-manager',
    demo: 'https://doctor-appointment-manager-lovat.vercel.app',
    themeColor: 'purple',
  },
  {
    image: 'https://i.ibb.co.com/hN1v2Vq/Behance-Mockup-Shot-Cover-8.png',
    title: 'Wanderlast: Travel Booking Platform',
    description:
      'Wanderlast is a next-generation travel booking platform built for modern adventurers. By combining real-time flight and accommodation booking with personalized, AI-driven itinerary planning, Wanderlast removes the friction from travel.',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'BetterAuth'],
    github: 'https://github.com/jituman01/wanderlast-travel-booking',
    demo: 'https://wanderlast-travel-booking.vercel.app',
    themeColor: 'purple',
  },
  {
    image: 'https://i.ibb.co.com/1GVKz39T/Behance-Mockup-Shot-Cover-6.png',
    title: 'Gadget Heaven: E-commerce',
    description:
      'Secure file storage platform with role-based access, real-time updates, and sharing features.Gadget Heaven is a premier e-commerce destination built for tech enthusiasts, early adopters, and everyday consumers looking to upgrade their digital lives.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk'],
    github: 'https://github.com/jituman01/gadget-heaven',
    demo: 'https://gadget-heaven-amber.vercel.app',
    themeColor: 'green',
  },
  {
    image: 'https://i.ibb.co.com/4bkHH1C/Behance-Mockup-Shot-Cover-2.png',
    title: 'Pixgen:Image Generator with Ai',
    description:
      'It is a modern web application that leverages artificial intelligence to transform text descriptions into high-quality, unique images.',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'BetterAuth'],
    github: 'https://github.com/jituman01/pixgen',
    demo: 'https://pixgen-snowy.vercel.app',
    themeColor: 'purple',
  },
  {
    image: 'https://i.ibb.co.com/99vDnRQb/Behance-Mockup-Shot-Cover-3.png',
    title: 'qurbanihat:livestock booking platform',
    description:
      'A modern livestock marketplace for booking and selling cattle. Built with Next.js for a seamless user experience.',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'BetterAuth'],
    github: 'https://github.com/jituman01/qurbanihat-livestock-booking-platform',
    demo: 'https://qurbanihat-livestock-booking-platfo.vercel.app/',
    themeColor: 'blue',
  },
  {
    image: 'https://i.ibb.co.com/5xMxZHDx/Behance-Mockup-Shot-Cover-4.png',
    title: 'KeenKeeper',
    description:
      'KeenKeeper helps you keep track of your friendships and social connections. Reminds you when you last spoke to someone.',
    tags: ['React', 'Tailwind', 'React Router DOM', 'DaisyUI', 'Hot-Toast'],
    github: 'https://github.com/jituman01/B13-A7-KeenKeeper',
    demo: 'https://keenkeeper-connection.netlify.app',
    themeColor: 'green',
  },
  {
    image: 'https://i.ibb.co.com/q3sFZ6GF/Behance-Mockup-Shot-Cover-5.png',
    title: 'DigiTools-Platform',
    description:
      'DigiTools is a fast and clean web application where users can find premium digital products.',
    tags: ['React', 'Tailwind', 'DaisyUI', 'Lucide React', 'React-Toastify'],
    github: 'https://github.com/jituman01/B13-A6-DigiTools-Platform',
    demo: 'https://digitoolsplatformapp.netlify.app/',
    themeColor: 'blue',
  },
  {
    image: 'https://i.ibb.co.com/ytz4rBx/Behance-Mockup-Shot-Cover-7.png',
    title: 'Github-Issue-Tracker',
    description:
      'GitHub Issue Tracker is a productivity tool designed to help developers manage and monitor project issues efficiently.',
    tags: ['Javascript', 'CSS', 'DaisyUi'],
    github: 'https://github.com/jituman01/B13-A5-Github-Issue-Tracker',
    demo: 'https://jituman01.github.io/B13-A5-Github-Issue-Tracker',
    themeColor: 'green',
  },
];

const themeGlowMap = {
  purple: 'group-hover:from-purple-500/10 group-hover:to-purple-500/5',
  green: 'group-hover:from-emerald-500/10 group-hover:to-emerald-500/5',
  blue: 'group-hover:from-blue-500/10 group-hover:to-blue-500/5',
};

const themeButtonMap = {
  purple: 'dark:hover:bg-purple-600',
  green: 'dark:hover:bg-emerald-600',
  blue: 'dark:hover:bg-blue-600',
};

const ProjectCard = ({ project, isChanging }) => (
  <div
    className={`relative group rounded-2xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-300 dark:border-white/20 shadow-xl overflow-hidden flex flex-col h-full w-full mx-auto transition-all duration-500 transform hover:-translate-y-2 ${
      isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${themeGlowMap[project.themeColor] || themeGlowMap.blue}`}
    />

    <div className="relative aspect-[16/10] overflow-hidden m-3 sm:m-2 rounded-xl border border-white/20">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-5 sm:p-6 flex-grow flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-500 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-white/50 dark:bg-white/10 text-slate-800 dark:text-slate-300 border border-white/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-[11px] sm:text-sm font-medium hover:bg-slate-800 dark:hover:bg-white/20 active:scale-95 transition-all duration-200"
        >
          <LogoGithub size={14} /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[11px] sm:text-sm font-medium transition-all duration-200 text-black border-black/20 border dark:text-white dark:border-white/20 hover:bg-black hover:text-white active:scale-95 ${themeButtonMap[project.themeColor] || themeButtonMap.blue}`}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsChanging(false);
    }, 250);
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-950 dark:text-white uppercase tracking-tight">
            Projects
          </h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            Recent Work
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard 
                key={currentPage + '-' + index} 
                project={project} 
                isChanging={isChanging}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-16 font-mono">
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border border-blue-500/20 text-blue-500 hover:bg-blue-500/10 transition-all cursor-pointer ${
              currentPage === 1 ? 'opacity-30 !cursor-not-allowed' : ''
            }`}
          >
            ← prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => paginate(idx + 1)}
              className={`w-10 h-12 flex items-center justify-center rounded-lg border transition-all duration-300 cursor-pointer ${
                currentPage === idx + 1
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md font-bold'
                  : 'border-blue-500/20 text-blue-500 hover:border-blue-500/60'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border border-blue-500/20 text-blue-500 hover:bg-blue-500/10 transition-all cursor-pointer ${
              currentPage === totalPages ? 'opacity-30 !cursor-not-allowed' : ''
            }`}
          >
            next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;