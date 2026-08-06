"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely for Next.js SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  trigger = null,
  tag: Tag = "div",
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let fromVars = { opacity: 0 };
    if (effect === "fade-up") {
      fromVars.y = 30;
    } else if (effect === "fade-down") {
      fromVars.y = -30;
    } else if (effect === "fade-left") {
      fromVars.x = 30;
    } else if (effect === "fade-right") {
      fromVars.x = -30;
    }

    const anim = gsap.fromTo(
      el,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger || el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, [effect, delay, duration, trigger]);

  return (
    <Tag ref={elementRef} className={className} {...props}>
      {children}
    </Tag>
  );
}
