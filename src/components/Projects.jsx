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

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`relative group rounded-[2rem] bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-full max-w-sm mx-auto`}
  >
    <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-${project.themeColor}-500/10 via-transparent to-${project.themeColor}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.5rem] border border-white/10 shadow-inner">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
    </div>

    {/* Content */}
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-sm font-medium hover:bg-slate-800 dark:hover:bg-white/20 transition border border-transparent"
        >
          <LogoGithub size={16} /> GitHub
        </a>
        
        {/* Updated Live Demo Button */}
        <a
          href={project.demo}
          target="_blank"
          className={`
            flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition
            /* Light Mode: Black text & Black border */
            text-black border-black border
            /* Dark Mode: Theme color text & Theme color border */
            dark:text-white dark:border-white/20 
            /* Hover Effects */
            hover:bg-black hover:text-white dark:hover:bg-${project.themeColor}-600 dark:hover:border-transparent
          `}
        >
          <ExternalLink size={16} /> Live Demo
        </a>
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
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-10 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto"> {/* Container width ektu komiye 6xl kora hoyeche */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-3 text-slate-950 dark:text-white"
          >
            Projects
          </motion.h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            Recent Work
          </p>
        </div>

        {/* Gap adjust kora hoyeche compact look-er jonno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/Jitu01-hub"
            target="_blank"
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