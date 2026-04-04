"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* TOP SECTION: THE STATEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-mono text-[10px] uppercase tracking-[0.4em] mb-8 block font-bold"
            >
              The Perspective
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter"
            >
              I see the world as a <span className="text-brand-red italic">frame</span>. My goal is to capture its <span className="underline decoration-brand-red decoration-4 underline-offset-[12px]">vibrancy</span> through design.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pt-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-body text-brand-black/80 leading-relaxed italic"
            >
              "Whether I’m trekking through the mountains or designing a dashboard, I am constantly hunting for the perfect frame—balancing light, geometry, and purpose."
            </motion.p>
          </div>
        </div>

        {/* MIDDLE SECTION: THE BIO SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 border-t border-brand-black/10 pt-16">
          <div className="md:col-span-7 space-y-8 text-lg font-body text-brand-black/70 leading-relaxed">
            <p>
              My journey started where design meets the terminal. At <span className="text-brand-red font-bold">Dimension Financial</span>, I didn't just design the product; I built the engines. Acting as both designer and developer, I engineered a complete HRMS from scratch to manage complex sales data—a challenge that solidified my belief that a designer's greatest tool is an understanding of the code.
            </p>
            <p>
              Now at <span className="text-brand-red font-bold">Tfrenzy Pvt. Ltd</span>, I’ve pivoted my focus entirely toward high-fidelity UI/UX. I specialize in turning dense, technical requirements into vibrant digital experiences across desktop, web, and mobile platforms. 
            </p>
            <p>
              I am a <span className="italic text-brand-black">Modern Minimalist</span> by heart, but I believe in "Adaptive Design"—breaking the grid and introducing high-energy visual layers when the story demands it.
            </p>
          </div>

          {/* RIGHT SIDE: CORE PILLARS */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <div className="group">
              <h4 className="font-heading text-sm uppercase mb-4 text-brand-red tracking-widest font-bold">The Hybrid Edge</h4>
              <p className="text-2xl font-heading uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                Full-Stack Logic <br /> 
                <span className="text-brand-black/30">meets Visual Soul</span>
              </p>
            </div>
            <div className="group">
              <h4 className="font-heading text-sm uppercase mb-4 text-brand-red tracking-widest font-bold">Current Mission</h4>
              <p className="text-2xl font-heading uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                Designing UI <br /> 
                <span className="text-brand-black/30">@ Tfrenzy</span>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: SPECIFIC IMPACT TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-brand-black/10 pt-16">
          <div className="bg-brand-black/5 p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-64">
             <span className="font-mono text-[10px] uppercase text-brand-red tracking-[0.3em]">Redesign</span>
             <h5 className="font-heading text-2xl uppercase leading-none">BondsAdda <br /> <span className="text-brand-black/40 text-lg italic">Vibrancy & Vision</span></h5>
          </div>
          <div className="bg-brand-black/5 p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-64">
             <span className="font-mono text-[10px] uppercase text-brand-red tracking-[0.3em]">Engineering</span>
             <h5 className="font-heading text-2xl uppercase leading-none">Custom HRMS <br /> <span className="text-brand-black/40 text-lg italic">Built from Scratch</span></h5>
          </div>
          <div className="bg-brand-black/5 p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-64">
             <span className="font-mono text-[10px] uppercase text-brand-red tracking-[0.3em]">Diversity</span>
             <h5 className="font-heading text-2xl uppercase leading-none">Platforms <br /> <span className="text-brand-black/40 text-lg italic">Desktop, Web, Mobile</span></h5>
          </div>
        </div>

      </div>
    </section>
  );
}