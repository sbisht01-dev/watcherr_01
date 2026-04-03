"use client";

import React from 'react';
import { motion } from "framer-motion";
// FIX: Import the custom TransitionLink instead of standard next/link
import TransitionLink from "./TransitionLink"; 

const projects = [
    {
        id: 1,
        slug: "fintech-dashboard",
        title: "Fintech Dashboard",
        category: "Software Design",
        size: "md:col-span-8",
        img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070",
    },
    {
        id: 2,
        slug: "eco-app",
        title: "Eco-App Mobile",
        category: "UI/UX Redesign",
        size: "md:col-span-4",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    },
    {
        id: 3,
        slug: "brand-system",
        title: "Brand System",
        category: "Design System",
        size: "md:col-span-4",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070",
    },
    {
        id: 4,
        slug: "ecommerce-web",
        title: "E-Commerce Web",
        category: "Web Development",
        size: "md:col-span-8",
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
    },
];

export default function WorkGrid() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-brand-black">
            <div className="flex justify-between items-end mb-16 relative z-10">
                <div className="max-w-2xl text-white">
                    <h2 className="font-heading text-5xl md:text-7xl uppercase mb-6">
                        Selected <span className="text-brand-red italic">Works</span>
                    </h2>
                    <p className="text-white/40 font-body text-lg">
                        A curated selection of projects focusing on user-centric design
                        and technical excellence.
                    </p>
                </div>
                <div className="hidden md:block font-mono text-brand-red text-xs tracking-widest uppercase">
                    ({projects.length.toString().padStart(2, '0')} Projects)
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {projects.map((project, i) => (
                    /* Using TransitionLink ensures the browser stays on this page 
                       until the curtain covers the screen.
                    */
                    <TransitionLink 
                        key={project.id} 
                        href={`/work/${project.slug}`} 
                        className={`${project.size}`}
                    >
                        <motion.figure
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[16/10] md:aspect-auto md:h-[500px] overflow-hidden group cursor-pointer bg-brand-grey-900 border border-white/5"
                        >
                            <motion.img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <figcaption className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-white">
                                    <p className="text-brand-red font-mono text-[10px] uppercase tracking-widest mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-heading uppercase">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" className="stroke-black">
                                        <path d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </figcaption>
                        </motion.figure>
                    </TransitionLink>
                ))}
            </div>
        </section>
    );
}