"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart-like easing
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false,
      touchMultiplier: 2.0,
      infinite: false,
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Update ScrollTrigger on GSAP ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);

    // Disable lag smoothing in GSAP to prevent synchronization issues
    gsap.ticker.lagSmoothing(0);

    // Store lenis globally or in window if needed for other components to access
    window.lenis = lenis;

    // Clean up on component unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
