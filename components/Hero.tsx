"use client";

import React from 'react';
import { motion } from "framer-motion";
import FloatingStack from "./hero/FloatingStack";
import Magnetic from './Magnetic';

export default function Hero() {
    return (
        /* MATCHING WORKGRID: 
           We put the padding (px-6 md:px-12) on the SECTION tag, 
           and we REMOVE the max-w-7xl wrapper to match your WorkGrid layout.
        */
        <section className="relative min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-brand-black overflow-hidden">

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <FloatingStack />
            </div>

            {/* THE CONTENT: 
               By removing the centered container and just letting it sit 
               inside the section's padding, it will line up perfectly 
               with the "SELECTED WORKS" title.
            */}
            <div className="relative z-10 w-full">
                <div className="flex flex-col items-start text-left">

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-brand-red font-mono text-xs uppercase tracking-[0.4em] mb-8"
                    >
                        Based in Delhi, India — Available for Projects
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-7xl md:text-9xl lg:text-[11vw] uppercase leading-[0.85] tracking-tighter text-white"
                    >
                        SAURABH<br />BISHT<span className="text-brand-red">.</span>
                    </motion.h1>

                    <div className="mt-10">
                        <motion.h2
                            className="font-heading text-3xl md:text-5xl uppercase tracking-tight text-white/40 leading-none"
                        >
                            UI/UX Designer
                        </motion.h2>

                        <motion.h3
                            className="font-heading text-2xl md:text-4xl uppercase tracking-tight text-white flex items-center gap-3 mt-4"
                        >
                            <span className="opacity-50 text-brand-red">@</span> TFRENZY PVT. LTD
                        </motion.h3>
                    </div>

                    <div className="mt-16">
                        <Magnetic>


                            <motion.a
                                href="#work"
                                className="group inline-flex items-center gap-6 border border-white/10 rounded-full pl-8 pr-3 py-3 hover:border-brand-red transition-all duration-500 bg-white/5 backdrop-blur-sm"
                            >
                                <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest text-white">
                                    View My Selected Work
                                </span>
                                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" className="stroke-white">
                                        <path d="M7.5 1V14M7.5 14L1 7.5M7.5 14L14 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.a>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* Decorative Background Text */}
            <div className="absolute -bottom-10 -left-10 select-none pointer-events-none opacity-[0.02] whitespace-nowrap hidden lg:block">
                <h2 className="text-[25vw] font-heading uppercase leading-none">INTERFACE</h2>
            </div>
        </section>
    );
}