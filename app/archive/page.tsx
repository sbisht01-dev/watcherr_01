"use client";

import React from 'react';
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

export default function ArchiveChoicePage() {
    return (
        <main className="h-screen w-full flex flex-col md:flex-row bg-brand-black overflow-hidden pt-20 md:pt-0">
            
            {/* LEFT SIDE: DESIGN ARCHIVE */}
            <TransitionLink 
                href="/archive/design" 
                className="relative w-full h-1/2 md:h-full md:w-1/2 group border-b md:border-b-0 md:border-r border-white/10 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-60" />
                
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                    <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Explorations</span>
                    <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white uppercase italic leading-none">
                        UI <span className="text-brand-red not-italic">Vault.</span>
                    </h2>
                    <p className="mt-6 text-white/40 font-mono text-[10px] uppercase tracking-widest max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        A collection of experimental interfaces and discarded concepts.
                    </p>
                </div>
            </TransitionLink>

            {/* RIGHT SIDE: PHOTO GALLERY */}
            <TransitionLink 
                href="/archive/photography" 
                className="relative w-full h-1/2 md:h-full md:w-1/2 group overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-60" />
                
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                    <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Captured Moments</span>
                    <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white uppercase italic leading-none">
                        Visual <span className="text-brand-red not-italic">Logs.</span>
                    </h2>
                    <p className="mt-6 text-white/40 font-mono text-[10px] uppercase tracking-widest max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Cinematic perspectives and geometric studies through the lens.
                    </p>
                </div>
            </TransitionLink>

            {/* CENTRAL DIVIDER TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-brand-black/80 backdrop-blur-md flex items-center justify-center">
                    <span className="text-brand-red font-heading text-xl">OR</span>
                </div>
            </div>
        </main>
    );
}