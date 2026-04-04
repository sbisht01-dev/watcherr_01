"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TransitionLink from "../TransitionLink";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Works", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Archive", href: "/archive" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle scroll state for a cleaner "Dock" look
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            /* THE BLUR LOGIC:
               - We use bg-black/20 for a subtle dark tint
               - backdrop-blur-xl creates the frosted glass look
               - border-b border-white/5 adds a sharp "Apple-style" edge
            */
            className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 md:px-12 transition-all duration-500
                ${scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}
            `}
        >
            {/* 1. BRAND LOGO */}
            <TransitionLink href="/" className="group flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                    {/* The Outer Circle */}
                    <div className="absolute inset-0 border-2 border-white rounded-full group-hover:border-brand-red transition-colors duration-500" />

                    {/* The "S" and the Red Dot (SVG) */}
                    <svg
                        viewBox="0 0 40 40"
                        className="w-full h-full p-[6px] fill-none"
                    >
                        {/* The S */}
                        <text
                            x="50%"
                            y="55%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-white font-heading font-bold text-[22px]"
                        >
                            S
                        </text>

                        {/* The Red Dot */}
                        <motion.circle
                            cx="28"
                            cy="28"
                            r="3"
                            className="fill-brand-red"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.5 }}
                            animate={{
                                opacity: [1, 0.6, 1],
                            }}
                            transition={{
                                opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                            }}
                        />
                    </svg>
                </div>

            </TransitionLink>

            {/* 2. DESKTOP LINKS */}
            <nav className="hidden md:flex items-center gap-10">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.5 }}
                    >
                        <TransitionLink
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </TransitionLink>
                    </motion.div>
                ))}

                <Link href="#contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 px-8 py-3 bg-brand-red text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 rounded-full shadow-lg shadow-brand-red/20"
                    >
                        Start a Project
                    </motion.button>
                </Link>
            </nav>

            {/* 3. MOBILE TRIGGER */}
            <button
                className="md:hidden text-white p-2 z-[110]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* MOBILE OVERLAY */}
            {/* MOBILE OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }} // Slide from top for a cleaner feel
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        /* z-[999] ensures it's above the Hero but below the Cursor.
                           bg-brand-black (solid) prevents the "ghosting" or "peeking" text.
                        */
                        className="fixed inset-0 bg-brand-black z-[999] flex flex-col px-6 py-24 md:hidden"
                    >
                        {/* Close Button Area */}
                        <div className="flex justify-end mb-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2 border border-white/10 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Nav Links - Large and Bold */}
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <TransitionLink
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-heading font-bold text-white uppercase tracking-tighter hover:text-brand-red transition-colors"
                                    >
                                        {link.name}<span className="text-brand-red">.</span>
                                    </TransitionLink>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile Footer Info */}
                        <div className="mt-auto">
                            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                                Available for freelance projects 2026
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}