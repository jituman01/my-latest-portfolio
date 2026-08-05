'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  const words = ['Stunning Websites', 'Creative UI', 'Fast Apps'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => setAnimate(true), 100);

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden text-white pb-10"
    >
      {/* SOCIAL BAR */}
      <div
        className={`fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50 transition-all duration-700 ${
          animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}
      >
        <SocialIcon
          icon={<FaLinkedin size={20} />}
          href="https://www.linkedin.com/in/md-naimul-islam-jitu"
        />

        <SocialIcon
          icon={<FaGithub size={20} />}
          href="https://github.com/jituman01"
        />

        <SocialIcon
          icon={<FaXTwitter size={20} />}
          href="https://x.com/jnaimulislam585"
        />

        <div className="w-[1px] h-16 bg-white/20 mx-auto mt-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:block min-h-screen">
          {/* IMAGE CONTAINER WITH PROFESSIONAL MASKING */}
          <div className="order-1 lg:order-none relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-25 flex justify-center mt-20 lg:mb-20 mb-5 lg:my-0 z-10">
            {/* Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <img
              src="/profile4.png"
              alt="Naimul Islam Jitu"
              className="relative z-10 w-[600px] md:w-[600px] lg:w-[700px] object-contain"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, white 70%, transparent 100%), linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                WebkitMaskComposite: 'destination-in',
                maskImage:
                  'linear-gradient(to bottom, white 70%, transparent 100%), linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                maskComposite: 'intersect',
              }}
            />
          </div>

          {/* LEFT CONTENT */}
          <div
            className={`order-2 lg:order-none relative lg:absolute lg:left-0 lg:top-24 z-20 max-w-xl text-center lg:text-left mx-auto lg:mx-0 px-4 transition-all duration-1000 ${
              animate
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-gray-400 text-base md:text-lg mb-3">
              Hey, I'm
            </h3>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight uppercase">
              <span className="">Naimul</span> Islam Jitu
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold lg:mt-4 mt-2">
              I am a <span className="text-blue-400">Full Stack Developer</span>
            </h2>

            <div className="flex justify-center lg:justify-start items-center gap-2 text-gray-400 text-sm md:text-base lg:mt-5 mt-2">
              🚀 Turning ideas into
              <div className="relative h-[30px] overflow-hidden w-[180px] md:w-[220px]">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={`absolute inset-0 font-bold text-blue-400 transition-all duration-500 ${
                      i === index
                        ? 'translate-y-0 opacity-100'
                        : i < index
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <p className="lg:mt-4  text-gray-500 text-sm md:text-base font-medium">
              | Available for projects and collaboration
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`order-3 lg:order-none relative lg:absolute lg:right-0 lg:top-24 text-center lg:text-right mt-10 lg:mt-0 transition-all duration-1000 delay-300 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="mb-8 hidden lg:flex md:flex-col">
              <h4 className="italic text-gray-300 text-lg md:text-xl font-medium">
                Design that speaks.
              </h4>

              <p className="text-gray-500 text-sm md:text-lg">
                Interfaces that convert.
              </p>
            </div>

            <div className="lg:mt-80 hidden lg:flex md:flex-col">
              <h1 className="uppercase leading-[0.9]">
                <span className="block text-blue-800 text-2xl md:text-3xl lg:text-5xl font-black">
                  FULL STACK
                </span>

                <span className="block text-gray-300 text-2xl md:text-3xl lg:text-5xl font-black">
                  Engineer
                </span>
              </h1>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className={`order-4 lg:order-none relative lg:absolute lg:bottom-0 lg:left-0  lg:mx-0 text-center lg:text-left px-4  transition-all duration-1000 delay-500 z-20 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="text-gray-500 uppercase text-xs md:text-sm lg:text-5 leading-7 md:leading-9 tracking-wide italic">
              Passionate about building scalable web applications and
              transforming ideas into modern digital experiences.<br />I
              specialize in React.js, Next.js, Node.js, Express.js and MongoDB
              while focusing on clean architecture,
              <br />
              thoughtful UI design and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-blue-400 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;
