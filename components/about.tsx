"use client";

import React from 'react';
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Large Statement */}
        <div className="md:col-span-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-mono text-xs uppercase tracking-[0.4em] mb-8 block"
          >
            Philosophy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tighter"
          >
            I believe that great design is <span className="text-brand-red italic">invisible</span>. It’s the seamless bridge between <span className="underline decoration-brand-red decoration-2 underline-offset-8">complex code</span> and human emotion.
          </motion.h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-body text-brand-black/70">
            <p>
              With a background in UI/UX and a passion for clean architecture, 
              I build digital products that don't just look "award-winning"—they 
              solve real problems and scale with your business.
            </p>
            <p>
              Currently focusing on building comprehensive design systems 
              and high-performance Next.js applications for forward-thinking 
              global brands.
            </p>
          </div>
        </div>

        {/* Right Side: Quick Stats / Pillars */}
        <div className="md:col-span-4 sticky top-32">
          <div className="border-l border-brand-black/10 pl-8 space-y-12">
            <div>
              <h4 className="font-heading text-2xl uppercase mb-2">Strategy</h4>
              <p className="text-sm font-body text-brand-black/50 uppercase tracking-widest leading-relaxed">
                Wireframing, User Research, Information Architecture.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-2xl uppercase mb-2">Interface</h4>
              <p className="text-sm font-body text-brand-black/50 uppercase tracking-widest leading-relaxed">
                Figma, Motion Design, Design Systems, Prototyping.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-2xl uppercase mb-2">Execution</h4>
              <p className="text-sm font-body text-brand-black/50 uppercase tracking-widest leading-relaxed">
                Next.js, Tailwind, TypeScript, Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}