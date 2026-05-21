'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
  Eye,
  Calendar,
  ChevronDown,
  LucideAward,
} from 'lucide-react';
import { FaAward } from 'react-icons/fa6';

// Achievements & Certificates Data Model
const certificatesData = [
  {
    id: '01',
    title: 'Web Dev with JavaScript',
    issuer: 'Ostad',
    date: 'December 2025',
    image:
      'https://i.ibb.co.com/bRH86zVH/Screenshot-2026-05-17-144713.png',
    verifyLink: 'https://ostad.app/share/certificate/c43083-null',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    id: '04',
    title: 'Adobe Illustrator',
    issuer: '10 Minute School',
    date: 'April 2026',
    image:
      'https://i.ibb.co.com/d0dVBfVm/Screenshot-2026-05-17-144850.png',
    verifyLink: 'https://10minuteschool.com/certificate/6a06aff791d73',
    tags: ['Networking', 'Personal Branding', 'Professional Profile'],
  },
  {
    id: '02',
    title: 'JavaScript Fundamentals',
    issuer: 'Ostad',
    date: 'February 2026',
    image:
      'https://i.ibb.co.com/7twmbz3k/Screenshot-2026-05-17-150517.png',
    verifyLink: 'https://ostad.app/share/certificate/c43244-null',
    tags: ['JavaScript', 'Frontend', 'ES6+'],
  },
  {
    id: '03',
    title: 'UX/XI Design',
    issuer: 'Ostad',
    date: 'March 2026',
    image:
      'https://i.ibb.co.com/TD7WWFKW/Screenshot-2026-05-17-144730.png',
    verifyLink: 'https://ostad.app/share/certificate/c43082-null',
    tags: ['Design', 'UX/Xi'],
  },
  
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filter items based on active click state
  const visibleCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 4);

  return (
    <section
      className="py-24 px-4 md:px-10 bg-transparent flex flex-col items-center w-full"
      id="achievements"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-tight">
          Achievements
        </h2>
        <p className="text-slate-500 dark:text-gray-400 tracking-[0.3em] uppercase text-sm font-semibold">
          Certificates & Recognition
        </p>
      </motion.div>

      {/* Main 4-Column Bento Container */}
      <div className="max-w-7xl w-full rounded-xl bg-white/[0.40] dark:bg-black/[0.2] backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visibleCertificates.map((cert, index) => {
            // Internal Grid Divider Responsive Calculation
            const isNotFirst = index !== 0;
            const isLeftColumnOnLarge = index % 4 !== 0;
            const isLeftColumnOnMedium = index % 2 !== 0;

            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`group p-6 md:p-5 flex flex-col justify-between h-full relative transition-all duration-500
                  /* Core Hover State Styles */
                  hover:bg-blue-600/[0.02] dark:hover:bg-blue-500/[0.015]
                  border-gray-300 dark:border-gray-800
                  ${isNotFirst ? 'border-t lg:border-t-0' : ''} 
                  ${isLeftColumnOnLarge ? 'lg:border-l' : ''}
                  ${isLeftColumnOnMedium ? 'md:border-l sm:border-l' : ''}
                  ${index >= 2 ? 'sm:border-t md:border-t lg:border-t-0' : ''}
                  ${index >= 4 ? 'lg:border-t' : ''}
                `}
              >
                <div className="relative z-10">
                  {/* Certificate Image Wrapper */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/40 dark:border-white/[0.03] mb-5 group-hover:border-blue-500/30 transition-colors duration-500">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>

                  {/* ID & Headings Typography */}
                  <div className="mb-4">
                    <span className="font-mono text-sm font-bold text-emerald-400 group-hover:text-blue-400 transition-colors duration-300 block mb-1">
                      {cert.id}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 min-h-[56px] line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 dark:text-gray-400 mt-1">
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  {/* Badges Flow */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] md:text-xs font-medium text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] group-hover:border-blue-500/10 px-2 py-0.5 rounded-md tracking-wide transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Footer Row */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/[0.04] group-hover:border-blue-500/10 flex items-center justify-between text-xs text-slate-400 dark:text-gray-500 font-semibold mt-auto relative z-10 transition-colors duration-300">
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-orange-300 group-hover:text-orange-400 transition-colors uppercase tracking-widest"
                  >
                    Verify Credential <LucideAward size={12} />
                  </a>
                  
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dynamic Show All Switch Trigger */}
      {certificatesData.length > 4 && (
        <motion.button
          layout
          onClick={() => setShowAll(!showAll)}
          className="mt-12 flex items-center gap-2 px-6 py-2.5 bg-white/[0.02] dark:bg-neutral-900/[0.2] hover:bg-blue-600/[0.05] hover:text-blue-400 dark:hover:text-blue-400 backdrop-blur-md border border-slate-200/60 dark:border-white/[0.05] hover:border-blue-500/30 text-slate-800 dark:text-white text-sm font-semibold rounded-xl shadow-md transition-all group cursor-pointer"
        >
          <span>
            {showAll
              ? 'Show less'
              : `Show more (${certificatesData.length - 4})`}
          </span>
          <ChevronDown
            size={16}
            className={`group-hover:translate-y-0.5 transition-transform duration-300 ${
              showAll ? 'rotate-180' : ''
            }`}
          />
        </motion.button>
      )}

      {/* Lightbox Modal System for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-[#0d0e12] border border-white/10 dark:border-blue-500/20 rounded-[24px] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-blue-500/40 backdrop-blur-md rounded-full text-white transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
              />
              <div className="p-6 md:p-8 border-t border-slate-100 dark:border-white/[0.05]">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {selectedCert.title}
                </h4>
                <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold">
                  Issued by {selectedCert.issuer} — {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
