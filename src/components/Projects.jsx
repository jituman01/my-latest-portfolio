'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { LogoGithub } from '@gravity-ui/icons';

const projectsData = [
  {
    image: 'https://cdn.dribbble.com/userupload/8636183/file/original-f70d246067b54a23075677c77f0d04c0.png',
    title: 'GameHub: Live Streaming',
    description: 'A twitch clone with real-time chat, streamer dashboard, and high-quality streaming capabilities.',
    tags: ['Next.js', 'Prisma', 'Socket.IO', 'Tailwind'],
    github: '#',
    demo: '#',
    themeColor: 'purple',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11181230/file/original-a7407a16f208151505c87e6717586523.png',
    title: 'SyncDocs: Collaboration',
    description: 'Real-time document editor allowing multiple users to collaborate simultaneously.',
    tags: ['Next.js', 'Node.js', 'Firebase', 'TipTap'],
    github: '#',
    demo: '#',
    themeColor: 'blue',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14068595/file/original-9f33b1e7c536440f3b4d45548d1ac99e.png',
    title: 'SecureDrive: Cloud Storage',
    description: 'Secure file storage platform with role-based access, real-time updates, and sharing features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk'],
    github: '#',
    demo: '#',
    themeColor: 'green',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11181230/file/original-a7407a16f208151505c87e6717586523.png',
    title: 'SyncDocs: Collaboration',
    description: 'Real-time document editor allowing multiple users to collaborate simultaneously.',
    tags: ['Next.js', 'Node.js', 'Firebase', 'TipTap'],
    github: '#',
    demo: '#',
    themeColor: 'blue',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14068595/file/original-9f33b1e7c536440f3b4d45548d1ac99e.png',
    title: 'SecureDrive: Cloud Storage',
    description: 'Secure file storage platform with role-based access, real-time updates, and sharing features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk'],
    github: '#',
    demo: '#',
    themeColor: 'green',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/14068595/file/original-9f33b1e7c536440f3b4d45548d1ac99e.png',
    title: 'SecureDrive: Cloud Storage',
    description: 'Secure file storage platform with role-based access, real-time updates, and sharing features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk'],
    github: '#',
    demo: '#',
    themeColor: 'green',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -12, transition: { duration: 0.3 } }}
    className="relative group rounded-[2rem] bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-full w-full mx-auto" id="projects"
  >
    <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-${project.themeColor}-500/10 via-transparent to-${project.themeColor}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

    <div className="relative aspect-[16/10] overflow-hidden m-3 sm:m-4 rounded-[1.5rem] border border-white/10 shadow-inner">
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
    </div>

    <div className="p-5 sm:p-6 flex-grow flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <motion.a
          href={project.github}
          target="_blank"
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-[11px] sm:text-sm font-medium hover:bg-slate-800 dark:hover:bg-white/20 transition border border-transparent"
        >
          <LogoGithub size={14} /> GitHub
        </motion.a>
        
        <motion.a
          href={project.demo}
          target="_blank"
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[11px] sm:text-sm font-medium transition
            text-black border-black border
            dark:text-white dark:border-white/20 
            hover:bg-black hover:text-white dark:hover:bg-${project.themeColor}-600 dark:hover:border-transparent
          `}
        >
          <ExternalLink size={14} /> Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-950 dark:text-white uppercase">
            Projects
          </h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            Recent Work
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/Jitu01-hub"
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            whileHover={{ gap: '12px' }}
            className="inline-flex items-center gap-2 text-blue-500 font-medium group transition-all"
          >
            See all projects{' '}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;