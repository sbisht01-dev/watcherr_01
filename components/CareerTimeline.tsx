"use client";

import React from 'react';
import { motion } from "framer-motion";
import { careerData } from "@/constants/experience"; // Import your data

export default function CareerRoadmap() {
    return (
        <section className="py-40 px-6 md:px-12 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                <div className="mb-32">
                    {/* <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">The Roadmap</span> */}
                    <h2 className="font-heading text-6xl md:text-8xl uppercase text-[#1a1a1a] tracking-tighter">
                        Career <span className="text-brand-red italic">Timeline.</span>
                    </h2>
                </div>

                {/* THE TIMELINE AXIS */}
                <div className="relative pt-40 pb-40 min-w-[800px] lg:min-w-full">
                    
                    {/* THE HORIZONTAL LINE */}
                    <div className="absolute top-[160px] left-0 w-full h-[3px] bg-black/5">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                            className="h-full bg-brand-red" 
                        />
                    </div>

                    {/* DYNAMIC MILESTONES */}
                    <div className="relative w-full h-full">
                        {careerData.map((item, i) => (
                            <div 
                                key={i} 
                                className="absolute -translate-x-1/2" 
                                style={{ left: `${item.position}%` }} // Dynamic Position
                            >
                                {/* THE NODE */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className={`w-5 h-5 rounded-full border-[5px] border-[#fafafa] z-20 relative
                                        ${item.current ? 'bg-brand-red scale-125' : 'bg-black'}`}
                                >
                                    {item.current && (
                                        <div className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-30" />
                                    )}
                                </motion.div>

                                {/* THE DATA CARD */}
                                <motion.div 
                                    initial={{ opacity: 0, y: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className={`absolute w-56 text-center left-1/2 -translate-x-1/2 
                                        ${i % 2 === 0 ? 'bottom-12' : 'top-12'}`}
                                >
                                    <span className="font-mono text-brand-red text-[11px] font-bold tracking-widest uppercase mb-2 block">
                                        {item.year}
                                    </span>
                                    <h4 className="text-[#1a1a1a] font-heading text-lg uppercase leading-none tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-black/40 font-mono text-[9px] uppercase mt-2 tracking-wider">
                                        {item.company}
                                    </p>
                                    
                                    {item.duration && (
                                        <div className="mt-4 inline-block px-3 py-1 bg-black/5 rounded-full text-[9px] text-black/60 font-mono uppercase tracking-tighter">
                                            {item.duration}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* MOBILE TIP: If on mobile, this section becomes scrollable horizontally */}
            <div className="md:hidden text-center mt-10">
                <p className="text-black/20 font-mono text-[8px] uppercase tracking-widest">Swipe to explore timeline →</p>
            </div>
        </section>
    );
}