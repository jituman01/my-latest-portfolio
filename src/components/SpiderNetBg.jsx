'use client';
import React, { useEffect, useRef } from 'react';

const SpiderNetBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isActive = true; // অ্যানিমেশনটি চলবে কি না তা ট্র্যাক করবে

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000));

    // ডার্ক মোড চেক করার ফাংশন
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // MutationObserver: থিম পরিবর্তন মনিটর করবে
    const observer = new MutationObserver(() => {
      if (!isDarkMode()) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // ডার্ক মোড না থাকলে ক্যানভাস ক্লিয়ার করে দাও
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.0;
        this.vy = (Math.random() - 0.5) * 1.0;
        this.radius = Math.random() * 1.2 + 0.8;
      }
      update() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        this.x += this.vx; this.y += this.vy;
      }
      draw() {
        if (!isDarkMode()) return; // শুধু ডার্ক মোডেই আঁকবে
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const connectParticles = () => {
      if (!isDarkMode()) return;
      const rgbColor = '255, 255, 255';

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < mouse.radius) {
            const alpha = (1 - distMouse / mouse.radius) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${rgbColor}, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgbColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isDarkMode()) { // শুধু ডার্ক মোডেই অ্যানিমেশন চলবে
        particles.forEach((p) => { p.update(); p.draw(); });
        connectParticles();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-screen h-screen"
      style={{ zIndex: 1 }}
    />
  );
};

export default SpiderNetBg;