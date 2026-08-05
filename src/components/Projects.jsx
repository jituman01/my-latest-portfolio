"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { LogoGithub } from "@gravity-ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely for Next.js SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    image: "https://i.ibb.co.com/4wGYbh0h/Recipe-Hub-Project-Mockup.png",
    title: "RecipeHub: Recipe Sharing Platform",
    description:
      "RecipeHub is a dynamic recipe-sharing platform designed for food enthusiasts and home chefs. It serves as a social ecosystem where users can publish unique recipes, discover secret family dishes, and build a vibrant community of culinary creators. With a clean and intuitive interface, the platform aims to celebrate the art of cooking by making it easy to share techniques and connect with food lovers worldwide.",
    tags: [
      "Tailwind",
      "Next.js",
      "ExpressJs",
      "MongoDB",
      "BetterAuth",
      "GoogleAuth",
      "Stripe",
    ],
    github: "https://github.com/jituman01/recipehub-client",
    demo: "https://recipehub-client-nine.vercel.app",
    themeColor: "purple",
  },
  {
    image: "https://i.ibb.co.com/KxGjVPQj/Doc-Appoint-Project-Mockup.png",
    title: "DocAppoint: Appointment Booking Platform",
    description:
      "A Doctor Appointment Management System is a web-based platform designed to streamline the interaction between patients and healthcare providers. Its primary goal is to provide a fast, efficient, and hassle-free experience for patients booking medical consultations.",
    tags: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "BetterAuth",
      "ExpressJs",
      "GoogleAuth",
    ],
    github: "https://github.com/jituman01/doctor-appointment-manager",
    demo: "https://doctor-appointment-manager-lovat.vercel.app",
    themeColor: "purple",
  },
  {
    image: "https://i.ibb.co.com/QjXwFVQW/Qurbani-Hat-Project-Mockup.png",
    title: "Qurbanihat: livestock booking platform",
    description:
      "A modern livestock marketplace for booking and selling cattle. Built with Next.js for a seamless user experience.",
    tags: ["Next.js", "Tailwind", "MongoDB", "BetterAuth"],
    github:
      "https://github.com/jituman01/qurbanihat-livestock-booking-platform",
    demo: "https://qurbanihat-livestock-booking-platfo.vercel.app/",
    themeColor: "blue",
  },
  {
    image: "https://i.ibb.co.com/hN1v2Vq/Behance-Mockup-Shot-Cover-8.png",
    title: "Wanderlast: Travel Booking Platform",
    description:
      "Wanderlast is a next-generation travel booking platform built for modern adventurers. By combining real-time flight and accommodation booking with personalized, AI-driven itinerary planning, Wanderlast removes the friction from travel.",
    tags: ["Next.js", "Tailwind", "MongoDB", "BetterAuth"],
    github: "https://github.com/jituman01/wanderlast-travel-booking",
    demo: "https://wanderlast-travel-booking.vercel.app",
    themeColor: "purple",
  },
  {
    image: "https://i.ibb.co.com/1GVKz39T/Behance-Mockup-Shot-Cover-6.png",
    title: "Gadget Heaven: E-commerce",
    description:
      "Secure file storage platform with role-based access, real-time updates, and sharing features. Gadget Heaven is a premier e-commerce destination built for tech enthusiasts, early adopters, and everyday consumers looking to upgrade their digital lives.",
    tags: ["React", "Node.js", "MongoDB", "Clerk"],
    github: "https://github.com/jituman01/gadget-heaven",
    demo: "https://gadget-heaven-amber.vercel.app",
    themeColor: "green",
  },
  {
    image: "https://i.ibb.co.com/4bkHH1C/Behance-Mockup-Shot-Cover-2.png",
    title: "Pixgen: Image Generator with Ai",
    description:
      "It is a modern web application that leverages artificial intelligence to transform text descriptions into high-quality, unique images.",
    tags: ["Next.js", "Tailwind", "MongoDB", "BetterAuth"],
    github: "https://github.com/jituman01/pixgen",
    demo: "https://pixgen-snowy.vercel.app",
    themeColor: "purple",
  },
  {
    image: "https://i.ibb.co.com/5xMxZHDx/Behance-Mockup-Shot-Cover-4.png",
    title: "KeenKeeper",
    description:
      "KeenKeeper helps you keep track of your friendships and social connections. Reminds you when you last spoke to someone.",
    tags: ["React", "Tailwind", "React Router DOM", "DaisyUI", "Hot-Toast"],
    github: "https://github.com/jituman01/B13-A7-KeenKeeper",
    demo: "https://keenkeeper-connection.netlify.app",
    themeColor: "green",
  },
  {
    image: "https://i.ibb.co.com/q3sFZ6GF/Behance-Mockup-Shot-Cover-5.png",
    title: "DigiTools-Platform",
    description:
      "DigiTools is a fast and clean web application where users can find premium digital products.",
    tags: ["React", "Tailwind", "DaisyUI", "Lucide React", "React-Toastify"],
    github: "https://github.com/jituman01/B13-A6-DigiTools-Platform",
    demo: "https://digitoolsplatformapp.netlify.app/",
    themeColor: "blue",
  },
  {
    image: "https://i.ibb.co.com/ytz4rBx/Behance-Mockup-Shot-Cover-7.png",
    title: "Github-Issue-Tracker",
    description:
      "GitHub Issue Tracker is a productivity tool designed to help developers manage and monitor project issues efficiently.",
    tags: ["Javascript", "CSS", "DaisyUi"],
    github: "https://github.com/jituman01/B13-A5-Github-Issue-Tracker",
    demo: "https://jituman01.github.io/B13-A5-Github-Issue-Tracker",
    themeColor: "green",
  },
];

const themeStyles = {
  purple: {
    glow: "rgba(168, 85, 247, 0.12)",
    titleHover: "hover:text-purple-500 dark:hover:text-purple-400",
    numberText: "text-purple-500 dark:text-purple-400",
    buttonHover: "dark:hover:bg-purple-600/20 hover:bg-purple-50",
  },
  green: {
    glow: "rgba(16, 185, 129, 0.12)",
    titleHover: "hover:text-emerald-500 dark:hover:text-emerald-400",
    numberText: "text-emerald-500 dark:text-emerald-400",
    buttonHover: "dark:hover:bg-emerald-600/20 hover:bg-emerald-50",
  },
  blue: {
    glow: "rgba(59, 130, 246, 0.12)",
    titleHover: "hover:text-blue-500 dark:hover:text-blue-400",
    numberText: "text-blue-500 dark:text-blue-400",
    buttonHover: "dark:hover:bg-blue-600/20 hover:bg-blue-50",
  },
};

const ProjectCard = React.forwardRef(({ project, index, total }, ref) => {
  const theme = themeStyles[project.themeColor] || themeStyles.blue;

  return (
    <div
      ref={ref}
      className="project-card sticky top-[100px] md:top-[120px] w-full max-w-7xl mx-auto rounded-3xl bg-white/70 dark:bg-[#0c0d12]/50 backdrop-blur-3xl   overflow-hidden transition-all duration-300"
      style={{
        transformOrigin: "top center",
        zIndex: index + 10,
      }}
    >
      {/* Dynamic Background Glow inside the card */}
      <div
        className="absolute  rounded-full blur-[100px] pointer-events-none -z-10 transition-all duration-500"
        style={{ backgroundColor: theme.glow }}
      />

      <div className="flex flex-col md:flex-row h-full w-full min-h-[460px] md:h-[480px]">
        {/* Left Side: Mockup Image */}
        <div className="w-full  relative overflow-hidden  flex items-center justify-center">
          <div className="w-full h-full rounded-2xl overflow-hidden relative group/img">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[52%] p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Header with Project Number */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-neutral-500">
                Recent Project
              </span>
              <span className={`font-mono text-sm font-bold ${theme.numberText}`}>
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className={`text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight transition-colors duration-300 ${theme.titleHover}`}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 mb-5 leading-relaxed line-clamp-4 md:line-clamp-5">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[10px] md:text-xs font-medium rounded-full bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-neutral-300 border border-slate-200/50 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-[11px] md:text-xs font-semibold active:scale-95 transition-all duration-200 shadow-md shadow-black/10"
            >
              <LogoGithub size={14} /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] md:text-xs font-semibold transition-all duration-200 text-slate-900 dark:text-white bg-transparent border border-slate-300 dark:border-white/10 active:scale-95 ${theme.buttonHover}`}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Reset refs on each render to avoid accumulation
  cardRefs.current = [];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        // We only animate the scale and fade of card i when card i+1 starts scrolling up to overlap it
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        if (!nextCard) return;

        gsap.to(card, {
          scale: 0.93 - (cards.length - 1 - index) * 0.005,
          opacity: 0.35,
          filter: "brightness(0.5) blur(1.5px)",
          scrollTrigger: {
            trigger: nextCard,
            start: "top 95%",    // When the next card's top reaches near the bottom of viewport
            end: "top 120px",    // When the next card reaches its sticky resting spot
            scrub: true,
          },
        });
      });
    }, containerRef);

    // Give React brief moments to repaint, then recalculate ScrollTrigger positions
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [showAll]);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-6 relative">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-950 dark:text-white uppercase tracking-tight">
            CREATIVE WORKS
          </h2>
          <p className="text-slate-500 dark:text-gray-400 tracking-[0.2em] uppercase text-xs font-semibold">
            Featured Project
          </p>
        </div>

        {/* Cards Stack Container */}
        <div
          ref={containerRef}
          className="flex flex-col gap-[20vh] md:gap-[40vh] pb-[10vh]"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              total={visibleProjects.length}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* "See All Projects" Trigger Button */}
        {!showAll && (
          <div className="mt-6 md:mt-10 text-center">
            <button
              onClick={handleSeeAll}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-500/30 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold tracking-wider hover:border-blue-500 text-sm active:scale-95 transition-all duration-300 cursor-pointer shadow-lg bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md"
            >
              See All Projects
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
