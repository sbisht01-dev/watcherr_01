"use client";

import React from 'react';
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

// 1. DATA: Add your "Vault" projects here. 
// These slugs must match the folders/IDs in your dynamic [id] route.
const vaultProjects = [
    {
        id: "v1",
        slug: "glassmorphism-study",
        title: "Glass UI Study",
        year: "2024",
        category: "Interface Exploration",
        img: "https://images.unsplash.com/photo-1613909209472-7b0b23c15abc?q=80&w=1000",
    },
    {
        id: "v2",
        slug: "crypto-wallet-concept",
        title: "Crypto Wallet",
        year: "2025",
        category: "Mobile Design",
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000",
    },
    {
        id: "v3",
        slug: "brutalist-web",
        title: "Brutalist Web",
        year: "2023",
        category: "Web Concept",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
    },
];

export default function UIVault() {
    return (
        <main className="min-h-screen bg-brand-black pt-32 pb-24 px-6 md:px-12">
            
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
                <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-brand-red font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block"
                >
                    Design Lab
                </motion.span>
                <h1 className="font-heading text-6xl md:text-8xl uppercase italic leading-none text-white tracking-tighter">
                    UI <span className="text-brand-red not-italic">Vault.</span>
                </h1>
                <p className="text-white/40 font-body text-lg mt-8 max-w-xl">
                    A curated archive of interface experiments, design systems, and 
                    technical prototypes from 3+ years of practice.
                </p>
            </div>

            {/* THE VAULT GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {vaultProjects.map((project, i) => (
                    <TransitionLink 
                        key={project.id} 
                        href={`/work/${project.slug}`}
                        className="group relative aspect-square overflow-hidden bg-brand-grey-900 border border-white/5"
                    >
                        {/* Project Image */}
                        <motion.img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-[10px] text-brand-red tracking-widest uppercase">
                                    {project.year}
                                </span>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-500">
                                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" className="stroke-white">
                                        <path d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <p className="text-white/40 font-mono text-[8px] uppercase tracking-[0.3em] mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-white font-heading text-3xl uppercase tracking-tighter italic">
                                    {project.title}
                                </h3>
                            </div>
                        </div>

                        {/* Number Indicator (Top Left Always Visible) */}
                        <div className="absolute top-6 left-6 font-mono text-[10px] text-white/20 group-hover:opacity-0 transition-opacity">
                            #{ (i + 1).toString().padStart(2, '0') }
                        </div>
                    </TransitionLink>
                ))}
            </div>
        </main>
    );
}