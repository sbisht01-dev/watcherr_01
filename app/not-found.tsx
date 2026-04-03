"use client"; // Important: Since it's inside your Animated Layout

import React from 'react';
import TransitionLink from "@/components/TransitionLink";
import { motion } from "framer-motion";

// 1. MUST BE DEFAULT EXPORT
export default function NotFound() {
    return (
        <main className="relative h-screen w-full flex flex-col items-center justify-center bg-brand-black text-white px-6 overflow-hidden">
            
            {/* Background Decorative Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[30vw] font-heading font-bold uppercase leading-none">
                    Lost
                </h2>
            </div>

            <div className="relative z-10 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading text-8xl md:text-[12vw] uppercase tracking-tighter leading-none"
                >
                    404<span className="text-brand-red">.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/40 mt-4 mb-12"
                >
                    The page you requested has drifted into the void.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <TransitionLink 
                        href="/" 
                        className="group inline-flex items-center gap-6 border border-white/10 rounded-full pl-8 pr-3 py-3 hover:border-brand-red transition-all duration-500 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="font-heading text-[10px] uppercase tracking-widest text-white">
                            Return to Reality
                        </span>
                        <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                             <svg width="12" height="12" viewBox="0 0 15 15" fill="none" className="stroke-white">
                                <path d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                        </div>
                    </TransitionLink>
                </motion.div>
            </div>
        </main>
    );
}