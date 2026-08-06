'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles } from 'lucide-react';

const allSkills = [
  // Frontend
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    desc: 'Hypertext Markup Language for structuring web content.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    desc: 'Cascading Style Sheets for layout design and presentation.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg',
    desc: 'A utility-first CSS framework for rapid and modern UI styling.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    desc: 'Dynamic programming language powering frontend logic and interactions.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.simpleicons.org/typescript',
    desc: 'Strongly typed programming language that builds on JavaScript for scalable apps.',
    category: 'Frontend Development',
    themeColor: 'blue',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    desc: 'A declarative component-based UI library for highly interactive web apps.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    desc: 'React framework for production-grade static & server-side rendering.',
    category: 'Frontend',
    themeColor: 'blue',
  },
  // Backend
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    desc: 'Chrome V8 JavaScript runtime for building scalable server-side solutions.',
    category: 'Backend & Database',
    themeColor: 'emerald',
  },
  {
    name: 'Express.js',
    icon: '/tech/express.png',
    desc: 'Minimal and flexible web framework for creating Restful API backends.',
    category: 'Backend & Database',
    themeColor: 'emerald',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    desc: 'Document-oriented NoSQL database for flexible data persistence.',
    category: 'Backend & Database',
    themeColor: 'emerald',
  },
  {
    name: 'Firebase',
    icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    desc: 'Backend-as-a-Service platform for fast authentication, real-time database, and cloud storage.',
    category: 'Backend & Database',
    themeColor: 'amber',
  },
  // Tools & Auth
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    desc: 'Distributed version control system to track source code changes.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
  {
    name: 'GitHub',
    icon: 'https://skillicons.dev/icons?i=github',
    desc: 'Cloud platform hosting Git repositories with developer collaboration tools.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
  {
    name: 'Better Auth',
    icon: '/tech/betterauth.jpg',
    desc: 'Highly customizable backend security authentication utility.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
  {
    name: 'Google Auth',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    desc: 'Secure OAuth2 identity provider integration from Google.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
  {
    name: 'Vercel',
    icon: '/tech/vercel.png',
    desc: 'Cloud hosting optimization ecosystem tailored for frontend projects.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
  {
    name: 'Netlify',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/netlify/netlify-original.svg',
    desc: 'Dynamic web deployment and hosting services provider.',
    category: 'Tools & Auth',
    themeColor: 'purple',
  },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mounted, setMounted] = useState(false);

  const mountRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  // Keep references to DOM elements and 3D coordinate data to prevent React re-renders
  const nodeRefs = useRef([]);
  const nodeCoords = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Spherical Coordinates
  useEffect(() => {
    if (!mounted) return;

    const N = allSkills.length;
    const R = 180; // Radius of sphere
    const coords = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      coords.push({
        x: Math.cos(theta) * radius * R,
        y: y * R,
        z: Math.sin(theta) * radius * R,
      });
    }

    nodeCoords.current = coords;
  }, [mounted]);

  // Set up Three.js Constellation Sphere & Direct DOM Mutation Loop
  useEffect(() => {
    if (!mounted || !mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.z = 480;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 4. Central Glowing Core
    const coreGeometry = new THREE.IcosahedronGeometry(25, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const centralCore = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(centralCore);

    // 5. Constellation Lines
    const maxLines = 100;
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const constellationLines = new THREE.LineSegments(
      lineGeometry,
      lineMaterial
    );
    scene.add(constellationLines);

    // 6. Background Star/Particle System
    const particleCount = 150;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 210 + Math.random() * 60;

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(99, 102, 241, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createParticleTexture(),
    });

    const starParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(starParticles);

    // Helper functions for 3D rotations
    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { y: y * cos - z * sin, z: y * sin + z * cos };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos + z * sin, z: -x * sin + z * cos };
    };

    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = e => {
      const rect = mountRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetX.current = x / (width / 2);
      targetY.current = y / (height / 2);
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Track intersection for performance
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    const sectionEl = mountRef.current.closest('section');
    if (sectionEl) {
      observer.observe(sectionEl);
    }

    // Animation Loop
    let animationFrameId;
    const tempVector = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isIntersecting) return;

      // Damp mouse speeds for organic movement inertia
      mouseX.current += (targetX.current - mouseX.current) * 0.05;
      mouseY.current += (targetY.current - mouseY.current) * 0.05;

      const speedX = 0.001 + mouseY.current * 0.005;
      const speedY = 0.003 + mouseX.current * 0.006;

      currentRotX += speedX;
      currentRotY += speedY;

      starParticles.rotation.x += 0.0004;
      starParticles.rotation.y += 0.0005;
      centralCore.rotation.x += 0.006;
      centralCore.rotation.y += 0.009;

      const coords = nodeCoords.current;
      const refs = nodeRefs.current;

      if (coords.length && refs.length) {
        const rotatedCoords = coords.map(coord => {
          let { x, y, z } = coord;

          const rotatedY = rotateY(x, y, z, currentRotY);
          x = rotatedY.x;
          z = rotatedY.z;

          const rotatedX = rotateX(x, y, z, currentRotX);
          y = rotatedX.y;
          z = rotatedX.z;

          tempVector.set(x, y, z);
          tempVector.project(camera);

          const screenX = (tempVector.x * 0.5 + 0.5) * width;
          const screenY = (-(tempVector.y * 0.5) + 0.5) * height;

          const normalizedZ = (z + 180) / 360;
          const depthScale = 0.65 + normalizedZ * 0.55;
          const depthOpacity = 0.15 + normalizedZ * 0.85;

          return {
            xCalc: x,
            yCalc: y,
            zCalc: z,
            screenX,
            screenY,
            depthScale,
            depthOpacity,
          };
        });

        // Directly mutate DOM elements style to avoid React rendering cycles
        rotatedCoords.forEach((node, idx) => {
          const element = refs[idx];
          if (element) {
            element.style.left = `${node.screenX}px`;
            element.style.top = `${node.screenY}px`;
            element.style.transform = `translate(-50%, -50%) scale(${node.depthScale})`;
            element.style.opacity = node.depthOpacity;
            element.style.zIndex = Math.round(100 + node.zCalc);
            element.style.pointerEvents = 'auto';
          }
        });

        // Update constellation connecting lines
        const linesArray = lineGeometry.attributes.position.array;
        let lineIdx = 0;

        rotatedCoords.forEach(node => {
          if (lineIdx < maxLines) {
            const offset = lineIdx * 6;
            linesArray[offset] = node.xCalc;
            linesArray[offset + 1] = node.yCalc;
            linesArray[offset + 2] = node.zCalc;
            linesArray[offset + 3] = 0;
            linesArray[offset + 4] = 0;
            linesArray[offset + 5] = 0;
            lineIdx++;
          }
        });

        for (let i = 0; i < rotatedCoords.length; i++) {
          for (let j = i + 1; j < rotatedCoords.length; j++) {
            if (lineIdx >= maxLines) break;

            const nodeA = rotatedCoords[i];
            const nodeB = rotatedCoords[j];

            const dx = nodeA.xCalc - nodeB.xCalc;
            const dy = nodeA.yCalc - nodeB.yCalc;
            const dz = nodeA.zCalc - nodeB.zCalc;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 145) {
              const offset = lineIdx * 6;
              linesArray[offset] = nodeA.xCalc;
              linesArray[offset + 1] = nodeA.yCalc;
              linesArray[offset + 2] = nodeA.zCalc;
              linesArray[offset + 3] = nodeB.xCalc;
              linesArray[offset + 4] = nodeB.yCalc;
              linesArray[offset + 5] = nodeB.zCalc;
              lineIdx++;
            }
          }
        }

        for (let k = lineIdx; k < maxLines; k++) {
          const offset = k * 6;
          linesArray[offset] = 0;
          linesArray[offset + 1] = 0;
          linesArray[offset + 2] = 0;
          linesArray[offset + 3] = 0;
          linesArray[offset + 4] = 0;
          linesArray[offset + 5] = 0;
        }

        lineGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const mountNode = mountRef.current;
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountNode) {
        mountNode.removeEventListener('mousemove', handleMouseMove);
      }
      observer.disconnect();
      if (mountNode && renderer.domElement) {
        try {
          mountNode.removeChild(renderer.domElement);
        } catch (e) {
          // ignore
        }
      }
      renderer.dispose();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-transparent overflow-hidden"
      id="tech"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Heading & Spec Box */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6">
          <div>
            <span className="text-blue-500 dark:text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block animate-pulse">
              Skills & Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none select-none">
              <span className="text-white">TECH</span>
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.3)] ml-1">
                NOLOGIES
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 font-medium leading-relaxed max-w-md">
              An interactive constellation sphere representing the
              languages, frameworks, and tools I use to build scalable web
              applications.
            </p>
          </div>

          {/* Interactive Specification Detail Card */}
          <div className="p-6 md:p-8 rounded-[32px] bg-transparent backdrop-blur-2xl border border-slate-200/80 dark:border-neutral-800/80 min-h-[160px] flex flex-col justify-center relative overflow-hidden transition-all duration-300 pointer-events-auto">
            <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-colors duration-500 ${
                hoveredTech?.themeColor === 'blue'
                  ? 'bg-blue-500'
                  : hoveredTech?.themeColor === 'emerald'
                  ? 'bg-emerald-500'
                  : hoveredTech?.themeColor === 'purple'
                  ? 'bg-purple-500'
                  : 'bg-slate-200 dark:bg-neutral-800'
              }`}
            />

            {hoveredTech ? (
              <div className="flex flex-col gap-3 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-transparent p-2">
                    <img
                      src={hoveredTech.icon}
                      alt={hoveredTech.name}
                      className={`w-full h-full object-contain ${
                        hoveredTech.name === 'Next.js' ? 'dark:invert' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {hoveredTech.name}
                    </h4>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 dark:text-neutral-500">
                      {hoveredTech.category}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {hoveredTech.desc}
                </p>
              </div>
            ) : (
              <div className="text-center py-4 flex flex-col items-center justify-center gap-2">
                <Sparkles
                  className="text-blue-500/80 animate-pulse"
                  size={20}
                />
                <h5 className="text-[11px] font-bold text-slate-800 dark:text-neutral-300 uppercase tracking-wider">
                  Hover the Stack
                </h5>
                <p className="text-[10px] text-slate-400 dark:text-neutral-500 leading-relaxed max-w-[220px]">
                  Hover nodes in the constellation globe.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: 3D Sphere Canvas & HTML Projection */}
        <div className="lg:col-span-8 relative flex items-center justify-center min-h-[520px] md:min-h-[600px] bg-transparent rounded-[40px] overflow-hidden">
          {/* ThreeJS Canvas */}
          <div ref={mountRef} className="absolute inset-0 z-0" />

          {/* HTML Projecting Nodes */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
            {allSkills.map((tech, idx) => {
              const isCurrentlyHovered = hoveredTech?.name === tech.name;

              return (
                <div
                  key={tech.name}
                  ref={el => {
                    nodeRefs.current[idx] = el;
                  }}
                  className="absolute pointer-events-auto cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 0,
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300 ${
                      isCurrentlyHovered
                        ? 'bg-blue-900 text-white shadow-xl shadow-blue-500/25 border-blue-900 scale-110'
                        : 'bg-white/90 dark:bg-[#0c0d12]/90 backdrop-blur-xl border border-slate-200/80 dark:border-neutral-800 text-slate-800 dark:text-neutral-300 shadow-md hover:border-slate-400 dark:hover:border-neutral-600'
                    }`}
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center p-0.5 relative">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-full h-full object-contain transition-transform duration-300 ${
                          tech.name === 'Next.js' && !isCurrentlyHovered
                            ? 'dark:invert'
                            : ''
                        }`}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold leading-none tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
