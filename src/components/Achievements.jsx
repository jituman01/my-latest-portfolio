'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Layout, Grid, Smartphone, Zap, Code, Braces, List, Settings, 
  Award, Eye, BookOpen, Layers, Cpu, Activity, Shield, Lock, Key, 
  UserCheck, Server, Database, Sliders, ArrowLeftRight, Sparkles, 
  GitBranch, Terminal, Code2, GitFork, Heart, Users, ExternalLink,
  X
} from 'lucide-react';
import { FaFigma } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stackSteps = [
  {
    id: "web-fundamentals",
    stackLabel: "WEB FUNDAMENTALS",
    title: "Responsive Web Foundations",
    description: "Mastered semantic HTML5, modern CSS3 layout paradigms (Flexbox and Grid), responsive design principles, and cross-browser styling optimization.",
    verifyLink: "https://ostad.app/share/certificate/c43083-null",
    image: "/achievements/cert-webdev.png",
    badges: [
      { icon: "Layout", label: "Semantic HTML" },
      { icon: "Grid", label: "CSS Grid & Flexbox" },
      { icon: "Smartphone", label: "Mobile-First Design" },
      { icon: "Zap", label: "Cross-Browser Fixes" },
    ],
  },
  {
    id: "javascript-core",
    stackLabel: "JAVASCRIPT CORE",
    title: "JavaScript & ES6 Foundations",
    description: "Deep dive into core programming logic, asynchronous executions, scope structures, closures, array processing, DOM manipulation, and advanced problem-solving methodologies.",
    verifyLink: "https://ostad.app/share/certificate/c43244-null",
    image: "/achievements/cert-js.png",
    badges: [
      { icon: "Code", label: "Asynchronous JS" },
      { icon: "Braces", label: "Closures & Scopes" },
      { icon: "List", label: "Array Operations" },
      { icon: "Settings", label: "DOM API" },
    ],
  },
  {
    id: "design-uxui",
    stackLabel: "UX/UI DESIGN",
    title: "User Experience & UI Principles",
    description: "Trained in visual hierarchy, typography systems, user personas, wireframing, and interactive UI prototyping using industry-standard tools like Figma.",
    verifyLink: "https://ostad.app/share/certificate/c43082-null",
    image: "/achievements/cert-uxui.png",
    badges: [
      { icon: "Figma", label: "UI/UX Prototyping" },
      { icon: "Eye", label: "Visual Systems" },
      { icon: "BookOpen", label: "User Journeys" },
      { icon: "Layout", label: "Wireframing" },
    ],
  },
  {
    id: "adobe-illustrator",
    stackLabel: "VECTOR DESIGN",
    title: "Adobe Illustrator Vector Graphics",
    description: "Mastered path rendering, vector illustration, color theories, layout compositions, brand identity designs, and high-fidelity graphics asset creation.",
    verifyLink: "https://10minuteschool.com/certificate/6a06aff791d73",
    image: "/achievements/cert-illustrator.png",
    badges: [
      { icon: "Award", label: "Vector Path Design" },
      { icon: "Sparkles", label: "Branding Assets" },
      { icon: "Grid", label: "Layout Composition" },
      { icon: "Settings", label: "Illustration Tools" },
    ],
  },
  {
    id: "nextjs-frontend",
    stackLabel: "NEXT.JS & FRONTEND",
    title: "Modern Frontend with Next.js",
    description: "Leveraged Next.js App Router, Server Components, Server-Side Rendering (SSR), Static Site Generation (SSG), and performance tuning with Tailwind CSS.",
    verifyLink: "https://ostad.app/share/certificate/c43083-null",
    image: "/achievements/cert-webdev.png",
    badges: [
      { icon: "Layers", label: "App Router" },
      { icon: "Cpu", label: "Server Components" },
      { icon: "Zap", label: "Performance Tuning" },
      { icon: "Activity", label: "Dynamic Routing" },
    ],
  },
  
];

const getIcon = (name) => {
  const icons = {
    Layout: <Layout size={14} />,
    Grid: <Grid size={14} />,
    Smartphone: <Smartphone size={14} />,
    Zap: <Zap size={14} />,
    Code: <Code size={14} />,
    Braces: <Braces size={14} />,
    List: <List size={14} />,
    Settings: <Settings size={14} />,
    Award: <Award size={14} />,
    Eye: <Eye size={14} />,
    BookOpen: <BookOpen size={14} />,
    Layers: <Layers size={14} />,
    Cpu: <Cpu size={14} />,
    Activity: <Activity size={14} />,
    Shield: <Shield size={14} />,
    Lock: <Lock size={14} />,
    Key: <Key size={14} />,
    UserCheck: <UserCheck size={14} />,
    Server: <Server size={14} />,
    Database: <Database size={14} />,
    Sliders: <Sliders size={14} />,
    ArrowLeftRight: <ArrowLeftRight size={14} />,
    Sparkles: <Sparkles size={14} />,
    GitBranch: <GitBranch size={14} />,
    Terminal: <Terminal size={14} />,
    Code2: <Code2 size={14} />,
    GitFork: <GitFork size={14} />,
    Heart: <Heart size={14} />,
    Users: <Users size={14} />,
    Figma: <FaFigma size={14} />,
  };
  return icons[name] || <Award size={14} />;
};

const StackCard = ({ step, index, state, activeStep, onCardClick }) => {
  let transform = '';
  let opacity = 1;
  let zIndex = 10;
  
  if (state === 'passed') {
    transform = 'rotateX(15deg) rotateY(-10deg) rotateZ(-2deg) translateZ(160px) translateY(-160px) scale(0.95)';
    opacity = 0;
    zIndex = 50 - index;
  } else if (state === 'active') {
    transform = 'rotateX(15deg) rotateY(-10deg) rotateZ(-2deg) translateZ(40px) translateY(0px)';
    opacity = 1;
    zIndex = 100;
  } else {
    const diff = index - activeStep;
    transform = `rotateX(15deg) rotateY(-10deg) rotateZ(-2deg) translateZ(-${diff * 22}px) translateY(${diff * 16}px)`;
    opacity = Math.max(0, 1 - diff * 0.16);
    zIndex = 40 - index;
  }
  
  const hasImage = !!step.image;
  
  return (
    <div
      className={`absolute inset-0 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between border select-none overflow-hidden group ${
        state === 'active'
          ? hasImage
            ? 'border-transparent shadow-[0_20px_50px_rgba(139,92,246,0.35)] scale-[1.02] cursor-pointer text-white'
            : 'bg-gradient-to-br from-purple-600 to-pink-500 text-white border-transparent shadow-[0_20px_50px_rgba(139,92,246,0.3)] scale-[1.02] p-6'
          : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-200 dark:border-white/5 shadow-sm p-6'
      }`}
      style={{
        transform,
        opacity,
        zIndex,
        transformOrigin: 'center center',
      }}
      onClick={() => {
        if (state === 'active' && hasImage) {
          onCardClick(step);
        }
      }}
    >
      {/* Card Image and Overlay */}
      {hasImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={step.image} 
            alt={step.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              state === 'active' 
                ? 'opacity-100 scale-100 group-hover:scale-[1.03]' 
                : 'opacity-20 dark:opacity-10 grayscale scale-100'
            }`}
          />
          {state !== 'active' && (
            <div className="absolute inset-0 bg-white/80 dark:bg-neutral-900/90 transition-all duration-700" />
          )}
        </div>
      )}

      {/* Fallback Solid BG */}
      {!hasImage && (
        <div className={`absolute inset-0 z-0 transition-all duration-700 ${
          state === 'active'
            ? 'bg-gradient-to-br from-purple-600 to-pink-500 opacity-100'
            : 'bg-white dark:bg-neutral-900 opacity-100'
        }`} />
      )}

      {/* Card Header Content (Only shown if no image exists on the card) */}
      {!hasImage && (
        <div className="flex justify-between items-start relative z-10">
          <span className={`text-[10px] font-mono tracking-widest uppercase font-black ${
            state === 'active' 
              ? 'text-white/70' 
              : 'text-slate-500 dark:text-neutral-400'
          }`}>
            {step.stackLabel}
          </span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-xs font-bold ${
            state === 'active' 
              ? 'bg-white/20 border-white/20 text-white' 
              : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-neutral-400'
          }`}>
            {index + 1}
          </div>
        </div>
      )}
      
      {/* Card Body Content (Only shown if no image exists on the card) */}
      {!hasImage && (
        <div className="relative z-10">
          <h3 className={`text-base font-extrabold tracking-tight mb-1 ${
            state === 'active' 
              ? 'text-white' 
              : 'text-slate-800 dark:text-neutral-300'
          }`}>
            {step.title}
          </h3>
          
          {state === 'active' && (
            <div className="flex gap-2 mt-3 animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Achievements = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [transitioningStep, setTransitioningStep] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    setMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktop) return;

    const section = sectionRef.current;
    if (!section) return;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${stackSteps.length * 100}%`,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (stackSteps.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.1,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const stepIndex = Math.round(self.progress * (stackSteps.length - 1));
          setActiveStep(stepIndex);
        },
      });
    }, section);

    return () => ctx.revert();
  }, [mounted, isDesktop]);

  useEffect(() => {
    setOpacity(0);
    setTranslateY(8);
    const timer = setTimeout(() => {
      setTransitioningStep(activeStep);
      setOpacity(1);
      setTranslateY(0);
    }, 200);
    return () => clearTimeout(timer);
  }, [activeStep]);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent transition-colors duration-700 select-none"
      id="achievements"
    >
      {/* Soft Grid Box Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {isDesktop ? (
        /* DESKTOP VIEW: PINNED STEPPED SCROLL */
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 gap-12 items-center min-h-[80vh]">


          {/* Right Stack Column */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="relative w-[440px] h-[280px]" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
              {stackSteps.map((step, idx) => {
                let state = 'upcoming';
                if (idx < activeStep) {
                  state = 'passed';
                } else if (idx === activeStep) {
                  state = 'active';
                }
                
                return (
                  <StackCard 
                    key={step.id}
                    step={step}
                    index={idx}
                    state={state}
                    activeStep={activeStep}
                    onCardClick={setSelectedCert}
                  />
                );
              })}
            </div>
          </div>

                    
          {/* Left Content Column */}
          <div 
            className="flex flex-col justify-center h-full transition-all duration-300"
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
            }}
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-neutral-500 mb-2">
              Milestone {String(transitioningStep + 1).padStart(2, '0')} / {String(stackSteps.length).padStart(2, '0')}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 uppercase">
              {stackSteps[transitioningStep].title}
            </h2>
            
            <p className="text-slate-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
              {stackSteps[transitioningStep].description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {stackSteps[transitioningStep].badges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-neutral-300 border border-slate-200/50 dark:border-white/10"
                >
                  {getIcon(badge.icon)}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              {stackSteps[transitioningStep].verifyLink && (
                <a 
                  href={stackSteps[transitioningStep].verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500  hover:text-blue-700 dark:hover:text-cyan-300 transition-colors w-fit group"
                >
                  Verify Achievement <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              {stackSteps[transitioningStep].image && (
                <button
                  onClick={() => setSelectedCert(stackSteps[transitioningStep])}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors w-fit group cursor-pointer"
                >
                  View <Eye size={14} className="group-hover:scale-105 transition-transform" />
                </button>
              )}
            </div>
          </div>

        </div>
      ) : (
        /* MOBILE VIEW: VERTICAL TIMELINE LIST */
        <div className="w-full max-w-2xl mx-auto px-6 py-20 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mb-2">
              Achievements
            </h2>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-neutral-500">
              Milestones & Recognition
            </p>
          </div>

          <div className="flex flex-col gap-12 w-full relative pl-6 border-l border-slate-200 dark:border-white/10">
            {stackSteps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col items-start w-full">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white dark:border-black shadow-sm" />
                
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-purple-600 dark:text-pink-400 mb-1">
                  {step.stackLabel}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                {step.image && (
                  <div 
                    onClick={() => setSelectedCert(step)}
                    className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 mb-4 cursor-pointer group"
                  >
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye size={18} />
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {step.badges.map((badge, bIdx) => (
                    <div 
                      key={bIdx}
                      className="flex items-center gap-1 px-2.5 py-1 text-[11px] rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-neutral-300 border border-slate-200/50 dark:border-white/10"
                    >
                      {getIcon(badge.icon)}
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {step.verifyLink && (
                    <a 
                      href={step.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group"
                    >
                      Verify Certificate <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal System for Certificate Preview */}
      <div
        className={`fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-all duration-300 ${
          selectedCert ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSelectedCert(null)}
      >
        <button
          onClick={() => setSelectedCert(null)}
          className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer z-50 border border-white/15 active:scale-95"
        >
          <X size={20} />
        </button>
        
        {selectedCert && (
          <div 
            className="relative max-w-4xl w-full flex flex-col items-center justify-center transform transition-transform duration-300 scale-100"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/11] max-h-[75vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div className="mt-6 text-center max-w-2xl px-4">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedCert.title}
              </h4>
              <p className="text-sm text-cyan-400 font-semibold mb-4 uppercase tracking-widest font-mono text-[11px]">
                {selectedCert.stackLabel}
              </p>
              {selectedCert.verifyLink && (
                <a 
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-white/90 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95"
                >
                  Verify Credential
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;