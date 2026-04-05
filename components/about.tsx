"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "Figma", type: "Interface" },
    { name: "Blender", type: "3D Model & Animation" },
    { name: "React.js", type: "Frontend" },
    { name: "Canva", type: "Posters & Logo" },
  ];

  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-brand-white text-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {/* TOP SECTION */}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              /* Removed layoutId to prevent double-rendering ghosting */
              className="font-heading text-5xl md:text-7xl lg:text-[7.5vw] uppercase leading-[0.85] tracking-tighter"
            >
              I see the world as a <span className="text-brand-red italic">frame</span>. My goal is to capture its <span className="relative inline-block">vibrancy<div className="absolute -bottom-2 left-0 w-full h-[4px] bg-brand-red" /></span> through design.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pt-16">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-black/30 mb-8 block">
                Technical Arsenal // 2026
              </span>

              <div className="flex flex-col">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between border-b border-brand-black/10 py-5 group cursor-crosshair"
                  >
                    {/* ADDED: 'tracking-[0.15em]' for increased letter spacing.
              This prevents the outlines from touching and keeps the 'Studio' aesthetic.
          */}
                    <span
                      className="font-heading text-4xl md:text-5xl uppercase tracking-[0.1em] transition-all duration-500 text-white group-hover:text-brand-red opacity-40 group-hover:opacity-100"
                      style={{
                        textShadow: `
                -1px -1px 0 #000,  
                 1px -1px 0 #000,
                -1px  1px 0 #000,
                 1px  1px 0 #000
              `,
                        fontWeight: 400
                      }}
                    >
                      {skill.name}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 text-brand-red transition-opacity">
                      {skill.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: THE BIO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 border-t border-brand-black/10 pt-16">
          <div className="md:col-span-7 space-y-8 text-lg font-body text-brand-black/70 leading-relaxed">
            <p>
              My journey started where design meets the terminal. At <span className="text-brand-red font-bold">Dimension Financial</span>, I engineered a complete HRMS from scratch—a challenge that solidified my belief that a designer's greatest tool is an understanding of the code.
            </p>
            <p>
              Now at <span className="text-brand-red font-bold">Tfrenzy Pvt. Ltd</span>, I specialize in turning technical requirements into vibrant digital experiences across desktop, web, and mobile platforms.
            </p>
            <p>
              I am a <span className="italic text-brand-black font-bold font-heading uppercase">Modern Minimalist</span> by heart, but I believe in "Adaptive Design"—breaking the grid when the story demands it.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-12">
            <div className="group border-l border-brand-black/10 pl-8">
              <h4 className="font-heading text-xs uppercase mb-4 text-brand-red tracking-widest font-bold">The Hybrid Edge</h4>
              <p className="text-2xl font-heading uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                Full-Stack Logic <br />
                <span className="text-brand-black/30 group-hover:text-brand-black transition-colors">meets Visual Soul</span>
              </p>
            </div>
            <div className="group border-l border-brand-black/10 pl-8">
              <h4 className="font-heading text-xs uppercase mb-4 text-brand-red tracking-widest font-bold">Current Mission</h4>
              <p className="text-2xl font-heading uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                Designing UI <br />
                <span className="text-brand-black/30 group-hover:text-brand-black transition-colors">@ Tfrenzy</span>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: IMPACT TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-brand-black/10 pt-16">
          {[
            { tag: "Redesign", title: "BondsAdda", sub: "Vibrancy & Vision" },
            { tag: "Engineering", title: "Custom HRMS", sub: "Built from Scratch" },
            { tag: "Diversity", title: "Platforms", sub: "Desktop, Web, Mobile" }
          ].map((tile) => (
            <div key={tile.title} className="bg-brand-black/5 p-10 flex flex-col justify-between aspect-square group hover:bg-brand-red transition-all duration-700">
              <span className="font-mono text-[10px] uppercase text-brand-red group-hover:text-white/80 tracking-[0.3em] transition-colors">{tile.tag}</span>
              <h5 className="font-heading text-2xl uppercase leading-none group-hover:text-white transition-colors">
                {tile.title} <br />
                <span className="text-brand-black/40 text-lg italic group-hover:text-white/60">{tile.sub}</span>
              </h5>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}