"use client";

import React from 'react';
import { motion } from "framer-motion";

const colors = [
    { name: "Pure White", hex: "#FFFFFF", class: "bg-white" },
    { name: "Brand Red", hex: "#FF3333", class: "bg-brand-red" },
    { name: "Deep Crimson", hex: "#990000", class: "bg-[#990000]" }, // A darker shade for depth
    { name: "Studio Black", hex: "#000000", class: "bg-black" },
    { name: "Off Black", hex: "#111111", class: "bg-[#111111]" },
];

export default function ColorStrip() {
    return (
        <div className="hidden lg:flex flex-col items-end justify-center h-full gap-2 pr-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20 -rotate-90 mb-8 origin-right translate-x-full">
                Color Palette — 2026
            </span>
            
            <div className="flex flex-col gap-1">
                {colors.map((color, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        whileHover={{ width: 120, x: -10 }}
                        className={`group relative w-16 h-16 ${color.class} cursor-crosshair transition-all duration-500 ease-out flex items-center justify-start pl-4`}
                    >
                        {/* The Hex Code appearing on Hover */}
                        <span className="opacity-0 group-hover:opacity-100 font-mono text-[10px] text-white mix-blend-difference uppercase tracking-tighter transition-opacity duration-300">
                            {color.hex}
                        </span>
                        
                        {/* Tiny Indicator Dot for the Current Color */}
                        <div className="absolute right-2 top-2 w-1 h-x1 rounded-full bg-white/20 group-hover:bg-white/80 transition-colors" />
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-8 flex flex-col items-end">
                <span className="font-heading text-xs text-white/40 uppercase tracking-tighter italic">
                    Visual <span className="text-brand-red">Identity.</span>
                </span>
            </div>
        </div>
    );
}