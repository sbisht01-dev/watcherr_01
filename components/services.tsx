"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "UI/UX Design",
    description: "Creating high-fidelity wireframes, interactive prototypes, and scalable design systems in Figma.",
    tools: ["Figma", "Adobe CC", "Prototyping"]
  },
  {
    id: "02",
    title: "Product Redesign",
    description: "Auditing existing interfaces to improve usability, accessibility, and modern visual aesthetics.",
    tools: ["UX Audit", "Visual Identity", "User Testing"]
  },
  {
    id: "03",
    title: "Software Development",
    description: "Building performance-optimized web applications using modern frameworks like Next.js and Tailwind.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "04",
    title: "Design Systems",
    description: "Developing comprehensive component libraries that ensure brand consistency across all digital platforms.",
    tools: ["Documentation", "Storybook", "Atomic Design"]
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-red font-mono text-xs uppercase tracking-[0.4em] mb-12 block"
        >
          Expertise & Solutions
        </motion.span>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-10 md:py-16 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                {/* ID & Title */}
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="font-mono text-sm text-brand-white/20 group-hover:text-brand-red transition-colors duration-500">
                    {service.id}
                  </span>
                  <h3 className="font-heading text-4xl md:text-7xl uppercase transition-all duration-500 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>

                {/* Desktop Reveal Arrow */}
                <div className="hidden md:block">
                  <motion.div
                    animate={{ 
                      rotate: hoveredIndex === index ? 45 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-500"
                  >
                    <ArrowUpRight className="text-white w-8 h-8" />
                  </motion.div>
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 md:pl-32 flex flex-col md:flex-row justify-between items-start gap-8">
                      <p className="text-brand-white/50 text-lg md:text-xl max-w-xl font-body">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {service.tools.map((tool) => (
                          <span 
                            key={tool} 
                            className="px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-brand-white/40"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}