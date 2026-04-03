"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// FIX: Import your custom TransitionLink
import TransitionLink from "../TransitionLink"; 
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Works", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            /* z-[100] ensures it's visible, but PageTransition curtain is z-[10000] 
               so the curtain will still cover the Navbar beautifully. 
            */
            className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference"
        >
            {/* 1. BRAND LOGO - Uses TransitionLink to go Home */}
            <TransitionLink href="/" className="group flex items-center gap-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-brand-red group-hover:scale-110 transition-all duration-500" />
                    <div className="w-2 h-2 bg-brand-red rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>
                <span className="font-heading font-bold text-xl uppercase tracking-tighter text-white">
                    Studio<span className="text-brand-red">.</span>
                </span>
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
                        {/* We use TransitionLink here so clicking 'Works' from a 
                           Project Page triggers the Red Curtain.
                        */}
                        <TransitionLink
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.25em] font-medium text-white hover:text-brand-red transition-colors duration-300"
                        >
                            {link.name}
                        </TransitionLink>
                    </motion.div>
                ))}

                {/* THE CTA BUTTON - This is a Hash Link, so we use standard Link for Smooth Scroll */}
                <Link href="#contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 px-8 py-3 bg-brand-red text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 rounded-full"
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-brand-black z-[60] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <TransitionLink
                                key={link.name}
                                href={link.href}
                                // Close menu after clicking
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-heading font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tighter"
                            >
                                {link.name}
                            </TransitionLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}