"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { LogoGithub } from "@gravity-ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    id: "recipehub",
    index: "01",
    category: "RECIPE SHARING COMMUNITY",
    title: ["RECIPEHUB", "PLATFORM"],
    description:
      "RecipeHub is a dynamic recipe-sharing platform designed for food enthusiasts and home chefs. It serves as a social ecosystem where users can publish unique recipes, discover secret family dishes, and build a vibrant community of culinary creators. With a clean and intuitive interface, the platform aims to celebrate the art of cooking by making it easy to share techniques and connect with food lovers worldwide.",
    stack: ["NEXT.JS", "EXPRESS", "MONGODB", "BETTERAUTH", "STRIPE"],
    image: "/mockups/recipehub.png",
    github: "https://github.com/jituman01/recipehub-client",
    demo: "https://recipehub-client-nine.vercel.app",
  },
  {
    id: "docappoint",
    index: "02",
    category: "HEALTHCARE CONSULTATION",
    title: ["DOCAPPOINT", "PORTAL"],
    description:
      "A Doctor Appointment Management System is a web-based platform designed to streamline the interaction between patients and healthcare providers. Its primary goal is to provide a fast, efficient, and hassle-free experience for patients booking medical consultations.",
    stack: ["NEXT.JS", "EXPRESS", "MONGODB", "BETTERAUTH", "TAILWIND"],
    image: "/mockups/docappoint.png",
    github: "https://github.com/jituman01/doctor-appointment-manager",
    demo: "https://doctor-appointment-manager-lovat.vercel.app",
  },
  {
    id: "qurbanihat",
    index: "03",
    category: "LIVESTOCK MARKETPLACE",
    title: ["QURBANIHAT", "MARKET"],
    description:
      "A modern livestock marketplace for booking and selling cattle. Built with Next.js for a seamless user experience, secure backend pipelines, and role-based access control.",
    stack: ["NEXT.JS", "TAILWIND", "MONGODB", "BETTERAUTH"],
    image: "/mockups/qurbanihat.png",
    github: "https://github.com/jituman01/qurbanihat-livestock-booking-platform",
    demo: "https://qurbanihat-livestock-booking-platfo.vercel.app/",
  },
  {
    id: "wanderlast",
    index: "04",
    category: "TRAVEL & ITINERARY",
    title: ["WANDERLAST", "BOOKING"],
    description:
      "Wanderlast is a next-generation travel booking platform built for modern adventurers. By combining real-time flight and accommodation booking with personalized, AI-driven itinerary planning, Wanderlast removes the friction from travel.",
    stack: ["NEXT.JS", "TAILWIND", "MONGODB", "BETTERAUTH"],
    image: "/mockups/wanderlast.png",
    github: "https://github.com/jituman01/wanderlast-travel-booking",
    demo: "https://wanderlast-travel-booking.vercel.app",
  },
  {
    id: "gadget-heaven",
    index: "05",
    category: "E-COMMERCE RETAIL",
    title: ["GADGET HEAVEN", "STORE"],
    description:
      "Secure file storage platform with role-based access, real-time updates, and sharing features. Gadget Heaven is a premier e-commerce destination built for tech enthusiasts, early adopters, and everyday consumers looking to upgrade their digital lives.",
    stack: ["REACT", "NODE.JS", "MONGODB", "CLERK"],
    image: "/mockups/gadgetheaven.png",
    github: "https://github.com/jituman01/gadget-heaven",
    demo: "https://gadget-heaven-amber.vercel.app",
  },
  {
    id: "pixgen",
    index: "06",
    category: "AI IMAGE GENERATION",
    title: ["PIXGEN", "AI ENGINE"],
    description:
      "It is a modern web application that leverages artificial intelligence to transform text descriptions into high-quality, unique images.",
    stack: ["NEXT.JS", "TAILWIND", "MONGODB", "BETTERAUTH"],
    image: "/mockups/pixgen.png",
    github: "https://github.com/jituman01/pixgen",
    demo: "https://pixgen-snowy.vercel.app",
  },
  // {
  //   id: "keenkeeper",
  //   index: "07",
  //   category: "SOCIAL CRM",
  //   title: ["KEENKEEPER", "TRACKER"],
  //   description:
  //     "KeenKeeper helps you keep track of your friendships and social connections. Reminds you when you last spoke to someone, and maps network relationships.",
  //   stack: ["REACT", "TAILWIND", "REACT ROUTER DOM", "DAISYUI"],
  //   image: "/mockups/keenkeeper.png",
  //   github: "https://github.com/jituman01/B13-A7-KeenKeeper",
  //   demo: "https://keenkeeper-connection.netlify.app",
  // },
  // {
  //   id: "digitools",
  //   index: "08",
  //   category: "DIGITAL MARKETPLACE",
  //   title: ["DIGITOOLS", "PLATFORM"],
  //   description:
  //     "DigiTools is a fast and clean web application where users can search, find, purchase, and review premium digital products.",
  //   stack: ["REACT", "TAILWIND", "DAISYUI", "LUCIDE REACT"],
  //   image: "/mockups/digitools.png",
  //   github: "https://github.com/jituman01/B13-A6-DigiTools-Platform",
  //   demo: "https://digitoolsplatformapp.netlify.app/",
  // },
  // {
  //   id: "github-issue-tracker",
  //   index: "09",
  //   category: "DEVELOPER PRODUCTIVITY",
  //   title: ["ISSUE", "TRACKER"],
  //   description:
  //     "GitHub Issue Tracker is a productivity tool designed to help developers manage and monitor project issues efficiently with real-time status pipelines.",
  //   stack: ["JAVASCRIPT", "CSS", "DAISYUI"],
  //   image: "/mockups/issue-tracker.png",
  //   github: "https://github.com/jituman01/B13-A5-Github-Issue-Tracker",
  //   demo: "https://jituman01.github.io/B13-A5-Github-Issue-Tracker",
  // },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [transitioningProject, setTransitioningProject] = useState(0);
  const [progress, setProgress] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const [textY, setTextY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktop) return;

    const section = sectionRef.current;
    if (!section) return;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${projectsData.length * 100}%`,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (projectsData.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.1,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const stepIndex = Math.round(self.progress * (projectsData.length - 1));
          setActiveProject(stepIndex);
          setProgress(self.progress);
        },
      });
    }, section);

    return () => ctx.revert();
  }, [mounted, isDesktop]);

  useEffect(() => {
    setTextOpacity(0);
    setTextY(15);
    const timer = setTimeout(() => {
      setTransitioningProject(activeProject);
      setTextOpacity(1);
      setTextY(0);
    }, 200);
    return () => clearTimeout(timer);
  }, [activeProject]);

  if (!mounted) return null;

  // Circular progress configuration
  const radius = 16;
  const stroke = 2.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent transition-colors duration-700 select-none"
      id="projects"
    >
      {/* Soft Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {isDesktop ? (
        /* DESKTOP VIEW: PINNED STEPPED SCROLL SHOWCASE */
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-12 gap-12 items-center min-h-[85vh] relative">
          
          {/* Progress Ring in Top Area */}
          <div className="absolute top-0 right-12 z-20 flex items-center gap-2.5 bg-slate-50 dark:bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/50 dark:border-white/10 shadow-sm">
            <span className="text-[9px] font-mono tracking-widest font-black text-slate-400 dark:text-neutral-500 uppercase">
              PROJECT {String(activeProject + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
            </span>
            <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
              <circle
                stroke="rgba(128,128,128,0.15)"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="url(#showcaseProgressGradient)"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset, transition: "stroke-dashoffset 0.1s linear" }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <defs>
                <linearGradient id="showcaseProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Column: Staggered Project Metadata (grid span 5) */}
          <div 
            className="col-span-5 flex flex-col justify-center h-full transition-all duration-300"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl md:text-5xl font-black tracking-tight  text-gray-500 bg-clip-text ">
                {projectsData[transitioningProject].index}
              </span>
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold text-gray-500">
                {projectsData[transitioningProject].category}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black dark:text-white text-black tracking-tight uppercase leading-[1.08] mb-6">
              {projectsData[transitioningProject].title[0]}<br />
              {projectsData[transitioningProject].title[1]}
            </h2>

            <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
              {projectsData[transitioningProject].description}
            </p>

            <hr className="border-slate-200 dark:border-white/10 mb-6" />

            <div className="mb-8">
              <p className="text-[9px] font-mono tracking-[0.2em] text-slate-400 dark:text-neutral-500 uppercase font-black mb-2.5">
                STACK & ARCHITECTURE
              </p>
              <div className="flex flex-wrap gap-1.5">
                {projectsData[transitioningProject].stack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={projectsData[transitioningProject].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/25"
              >
                Explore Live View <ExternalLink size={14} />
              </a>
              <a
                href={projectsData[transitioningProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
              >
                <LogoGithub size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Mockup Image Crossfade (grid span 7) */}
          <div className="col-span-7 relative w-full h-[500px] flex items-center justify-center pl-6">
            {projectsData.map((project, idx) => {
              const isActive = idx === activeProject;
              return (
                <div
                  key={project.id}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1) translateY(0)" : "scale(0.95) translateY(12px)",
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 0,
                  }}
                >
                  {/* Laptop Mockup Box */}
                  <div className="relative w-full max-w-[760px] aspect-[16/10]  rounded-[28px] border border-slate-200 dark:border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden group">
                    {/* Glass glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />
                    
                    {/* Inner Screen viewport */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-slate-200 dark:border-neutral-800">
                      <img 
                        src={project.image} 
                        alt={project.title.join(" ")}
                        className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      ) : (
        /* MOBILE VIEW: VERTICAL TIMELINE LIST */
        <div className="w-full max-w-2xl mx-auto px-6 py-20 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mb-2">
              Creative Works
            </h2>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-neutral-500">
              Recent Projects
            </p>
          </div>

          <div className="flex flex-col gap-24 w-full">
            {projectsData.map((project) => (
              <div key={project.id} className="flex flex-col items-start w-full">
                {/* Mockup Container */}
                <div className="relative w-full aspect-[16/10] bg-slate-900 dark:bg-neutral-900 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-xl p-2.5 overflow-hidden mb-6">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black border border-slate-200 dark:border-neutral-800">
                    <img 
                      src={project.image} 
                      alt={project.title.join(" ")}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Index & Category */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    {project.index}
                  </span>
                  <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title.join(" ")}
                </h3>

                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 w-full">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/10"
                  >
                    Live <ExternalLink size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-800 dark:text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    GitHub <LogoGithub size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
