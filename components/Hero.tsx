"use client";

import React from 'react';
import { motion } from "framer-motion";
import Magnetic from './Magnetic';

// 1. THE LARGE COLOR STRIP (Vertical Monoliths)
const ColorStrip = () => {
    const colors = [
        { name: "White", hex: "#FFFFFF", bg: "bg-white" },
        { name: "Brand Red", hex: "#FF3333", bg: "bg-brand-red" },
        { name: "Deep Red", hex: "#990000", bg: "bg-[#990000]" },
        { name: "Studio Black", hex: "#000000", bg: "bg-black" },
        { name: "Grey", hex: "#111111", bg: "bg-[#111111]" },
    ];

    return (
        <div className="hidden lg:flex flex-col items-end justify-center h-[70vh] gap-1 pr-4">
            {/* Top Label */}
            <div className="mb-6 mr-1 text-right">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 block">
                    Brand Palette
                </span>
                <span className="font-mono text-[8px] uppercase text-brand-red tracking-widest">
                    V.2.0.26
                </span>
            </div>
            
            <div className="flex flex-row items-end gap-1 h-full">
                {colors.map((color, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100%" }}
                        transition={{ 
                            delay: 0.8 + i * 0.1, 
                            duration: 1.2, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        whileHover={{ width: 180 }}
                        /* Increased default width from w-16 to w-24 or w-32 for significance */
                        className={`group relative w-16 md:w-20 lg:w-24 h-full ${color.bg} cursor-crosshair transition-all duration-700 ease-[0.16, 1, 0.3, 1] flex items-end justify-start pb-12 overflow-hidden`}
                    >
                        {/* Vertical Text on Hover */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <span className="font-mono text-[11px] text-white mix-blend-difference uppercase tracking-[0.3em] font-bold">
                                {color.name} — {color.hex}
                            </span>
                        </div>
                        
                        {/* Dot Indicator */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-red transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
            
            {/* Bottom Label */}
            <div className="mt-8 text-right">
                <span className="font-heading text-xl text-white uppercase tracking-tighter italic">
                    Visual <span className="text-brand-red not-italic">Identity.</span>
                </span>
            </div>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center py-24 px-6 md:px-12 bg-brand-black overflow-hidden">
            
            {/* MAIN CONTENT WRAPPER */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
                
                {/* LEFT SIDE: PERSONAL INFO */}
                <div className="flex-[1.2] flex flex-col items-start text-left">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-brand-red font-mono text-xs uppercase tracking-[0.4em] mb-8"
                    >
                        Based in Ghaziabad, IN — Available for Projects
                    </motion.p>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-7xl md:text-9xl lg:text-[11vw] uppercase leading-[0.85] tracking-tight italic text-white"
                    >
                        SAURABH<br />
                        BISHT<span className="text-brand-red not-italic inline-block">.</span>
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

                {/* RIGHT SIDE: LARGE COLOR MONOLITHS */}
                <div className="hidden lg:block flex-1 flex justify-end pl-20">
                    <ColorStrip />
                </div>
            </div>

            {/* Decorative Background Text */}
            <div className="absolute -bottom-10 -left-10 select-none pointer-events-none opacity-[0.02] whitespace-nowrap hidden lg:block">
                <h2 className="text-[25vw] font-heading uppercase leading-none">INTERFACE</h2>
            </div>
        </section>
    );
}