"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// --- CUSTOM BRAND ICONS (Fixes the Lucide error) ---

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- MAIN FOOTER COMPONENT ---

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedinIcon />, href: "https://linkedin.com/in/yourprofile" },
    { name: "GitHub", icon: <GithubIcon />, href: "https://github.com/yourusername" },
    { name: "Instagram", icon: <InstagramIcon />, href: "https://instagram.com/yourhandle" },
  ];

  return (
    <footer id="contact" className="bg-brand-black text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. CALL TO ACTION SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter"
            >
              Have a <br />
              <span className="text-brand-red italic">Vision?</span> <br />
              Let's Build It.
            </motion.h2>
          </div>

          <motion.a 
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-32 h-32 md:w-56 md:h-56 rounded-full bg-brand-red flex items-center justify-center overflow-hidden transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="font-heading text-xs md:text-sm uppercase tracking-[0.2em] leading-tight">
                Get In <br /> Touch
              </span>
            </div>
            {/* Liquid Fill Hover Effect */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
               <Mail className="text-brand-black w-10 h-10 md:w-14 md:h-14" />
            </div>
          </motion.a>
        </div>

        {/* 2. SECONDARY INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-t border-white/10 pt-16">
          
          {/* Socials Column */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-brand-white/30 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">Connect</p>
            <div className="flex gap-10">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-red transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Availability Column */}
          <div>
            <p className="text-brand-white/30 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">Availability</p>
            <div className="flex items-center gap-3 mb-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <p className="text-sm font-body tracking-wide">Open for new projects</p>
            </div>
            <p className="text-xs text-brand-white/40 uppercase tracking-widest">Q2 - 2026</p>
          </div>

          {/* Location Column */}
          <div>
            <p className="text-brand-white/30 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">Location</p>
            <p className="text-sm font-body leading-relaxed tracking-wide">
              Ghaziabad, India <br /> 
              <span className="text-brand-white/40 uppercase text-[10px] tracking-widest">GMT +5:30</span>
            </p>
          </div>
        </div>

        {/* 3. BOTTOM LEGAL BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-white/20 font-mono gap-4">
          <p>© {currentYear} STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-brand-red italic font-heading lowercase tracking-normal text-xs">Next.js & Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}