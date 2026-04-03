"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { ExternalLink, ArrowLeft, Info, ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export const projectsData = {
    // --- MAIN FEATURED WORKS ---
    "fintech-dashboard": {
        title: "Fintech Dashboard",
        cta: "View Live",
        excerpt: "A high-performance trading interface built for rapid decision-making and data clarity.",
        liveLink: "https://your-live-site.com",
        fullStory: [
            "The primary objective was to reduce cognitive load for high-frequency traders. We identified that color-coded heatmaps and custom typography scales were the most effective ways to highlight market volatility without causing visual fatigue.",
            "I spent time in Blender crafting custom 3D glass-morphism assets to replace standard flat icons, giving the dashboard a 'depth' that feels tangible. This helped users distinguish between primary and secondary navigation layers instantly.",
            "Technically, the challenge was maintaining 60fps animations while streaming live data. By using Next.js and optimized Framer Motion triggers, the result is a tool that feels as fast as the markets it tracks."
        ],
        mainImg: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070",
    },
    "eco-app": {
        title: "Eco-App Mobile",
        cta: "View Demo",
        excerpt: "Redesigning the sustainability experience through tactile UI and organic motion.",
        liveLink: "https://your-demo-link.com",
        fullStory: [
            "Most sustainability apps feel clinical and dry. My goal for this redesign was to make environmental tracking feel 'alive' and rewarding. I focused on a gesture-based UI that mimics natural physical interactions.",
            "I utilized Figma to build a comprehensive component library based on atomic design principles. To elevate the experience, I integrated Lottie animations for splash screens and success states, ensuring every user action felt celebrated.",
            "The transition from Figma to React Native was focused on micro-interactions. Every swipe and scroll was tuned to provide haptic-like feedback, creating a premium mobile experience that encourages daily use."
        ],
        mainImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    },
    "brand-system": {
        title: "Brand System",
        cta: "View Live",
        excerpt: "A minimal visual identity and design system for a modern tech infrastructure startup.",
        liveLink: "https://your-behance-link.com",
        fullStory: [
            "This project was an exercise in pure minimalism. The brand needed to communicate 'stability' and 'scalability' to enterprise clients. I started with a geometric grid in Illustrator to find the mathematical balance for the glyph.",
            "Beyond the logo, I developed a Design System that bridges the gap between marketing and product. I defined a color palette inspired by industrial brutalism—using deep blacks, pure whites, and a high-energy 'International Red' as the primary accent.",
            "I also created 3D brand symbols in Blender to be used as hero backgrounds. By rendering these with soft studio lighting, the brand gained a level of sophistication that traditional 2D graphics couldn't achieve."
        ],
        mainImg: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070",
    },
    "ecommerce-web": {
        title: "E-Commerce Web",
        cta: "View Live",
        excerpt: "An end-to-end e-commerce solution with a focus on administrative efficiency and conversion.",
        liveLink: "https://your-ecommerce-site.com",
        fullStory: [
            "Designing an e-commerce platform isn't just about the storefront; it's about the Admin Panel. I designed a dual-interface system where the buyer gets a minimalist shop and the seller gets a powerful data-tracking suite.",
            "The UI was designed in Figma with a focus on product photography. I used a 'borderless' layout to let the products breathe, while the backend was built with React to handle complex state management for the cart and inventory.",
            "For the final polish, I implemented 'Lottie' animations for the checkout process to reduce 'cart abandonment.' These small motion cues guide the user through payment steps, making a complex process feel effortless."
        ],
        mainImg: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
    },

    // --- UI VAULT ARCHIVE PROJECTS ---
    "glassmorphism-study": {
        title: "Glass UI Study",
        cta: "View Case",
        excerpt: "Exploring the limits of transparency, blur, and lighting in modern interface design.",
        liveLink: "#",
        fullStory: [
            "This was a technical exploration into 'The Frosted Look'. I wanted to see how far backdrop-filters could be pushed without sacrificing accessibility or performance in a browser environment.",
            "Using Figma's advanced layer styles, I developed a system where contrast is maintained through subtle inner borders rather than heavy drop shadows. This creates a much 'cleaner' glass effect that feels like physical hardware.",
            "I eventually translated these styles into Tailwind CSS, creating a custom utility class library for high-end SaaS applications that need a futuristic, layered aesthetic."
        ],
        mainImg: "https://images.unsplash.com/photo-1613909209472-7b0b23c15abc?q=80&w=1000",
    },
    "crypto-wallet-concept": {
        title: "Crypto Wallet",
        cta: "View Concept",
        excerpt: "A mobile-first approach to digital asset management focusing on security through visual trust.",
        liveLink: "#",
        fullStory: [
            "Crypto interfaces are notoriously complex. For this vault entry, I focused on 'The Onboarding Loop'—making the seed phrase backup process feel less like a chore and more like a high-security ceremony.",
            "The UI uses a dark-brutalist theme, utilizing high-contrast typography (Inter and Bricolage) to make transaction data readable at a glance. I used a 4px grid to ensure every element was mathematically aligned.",
            "I integrated custom 3D coin renders created in Blender to give the portfolio view a premium, tangible feel. The result is a wallet that feels like a physical bank vault in your pocket."
        ],
        mainImg: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000",
    },
    "brutalist-web": {
        title: "Brutalist Web",
        category: "Web Concept",
        cta: "View Layout",
        excerpt: "Breaking the 'boring' web layout rules with oversized type and raw layouts.",
        liveLink: "#",
        fullStory: [
            "This project is a rebellion against standard 'corporate' layouts. I experimented with extreme typography scales and raw, unpolished borders to create a 'Director's Cut' web experience.",
            "The design relies heavily on horizontal scrolling and fixed background images to create a layered parallax effect. I utilized Framer Motion to stagger the appearance of each section, making the raw layout feel intentional and smooth.",
            "By removing all unnecessary gradients and shadows, the focus remains purely on content and structure—a true study in 'Information Architecture' over 'Decoration'."
        ],
        mainImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
    }
};
export default function ProjectPage() {
    const params = useParams();
    const id = params.id as string;
    const data = projectsData[id as keyof typeof projectsData];

    if (!data) return <div className="bg-black h-screen text-white flex items-center justify-center font-heading">Project Not Found</div>;
    const getNextProject = (currentId: string) => {
        const keys = Object.keys(projectsData);
        const currentIndex = keys.indexOf(currentId);
        const nextIndex = (currentIndex + 1) % keys.length;
        return { slug: keys[nextIndex], ...projectsData[keys[nextIndex] as keyof typeof projectsData] };
    };
    const nextProject = getNextProject(id);
    return (
        <main className="bg-brand-black">
            <Navbar />

            {/* SECTION 1: BLACK (THE HOOK) */}
            <header className="pt-40 pb-24 px-6 md:px-12 text-white">
                <div className="max-w-7xl mx-auto">
                    <Link href="/#work" className="group flex items-center gap-2 text-white/30 hover:text-brand-red transition-colors mb-12">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Gallery</span>
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] mb-8"
                    >
                        {data.title}<span className="text-brand-red">.</span>
                    </motion.h1>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-10">
                        <p className="text-white/60 text-lg md:text-xl max-w-xl font-body leading-relaxed">
                            {data.excerpt}
                        </p>
                        <motion.a
                            href={data.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-4 bg-brand-red text-white px-8 py-4 rounded-full font-heading text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-brand-red/20"
                        >
                            {/* This now pulls from your projectsData */}
                            {data.cta || "View Live"}
                            <ExternalLink size={14} />
                        </motion.a>
                    </div>
                </div>
            </header>

            {/* SECTION 2: WHITE (THE REVEAL + THE DEEP DIVE) */}
            <section className="bg-brand-white py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Visual Interface</span>
                        <h2 className="text-brand-black font-heading text-4xl md:text-6xl uppercase tracking-tighter">The Reveal<span className="text-brand-red italic">.</span></h2>
                    </div>
                    {/* THE MAIN UI IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2.5rem] overflow-hidden shadow-3xl shadow-black/20 mb-24 border border-black/5"
                    >
                        <img src={data.mainImg} alt="Visual Interface" className="w-full h-auto" />
                    </motion.div>

                    {/* THE LONG FORM DESCRIPTION (BELOW THE IMAGE) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-brand-red" />
                                <h3 className="font-heading text-2xl uppercase tracking-tighter text-brand-black">
                                    Project <span className="text-brand-red italic">Insight</span>
                                </h3>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-12">
                            {data.fullStory?.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-brand-black/70 text-xl md:text-2xl font-body leading-relaxed max-w-3xl"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-brand-black border-t border-white/5">
                <Link href={`/work/${nextProject.slug}`} className="group block px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block group-hover:scale-110 transition-transform">
                            Next Project
                        </span>
                        <h2 className="font-heading text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none text-white/20 group-hover:text-white transition-all duration-700">
                            {nextProject.title}<span className="text-brand-red">.</span>
                        </h2>
                        <div className="mt-12 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                            <ArrowUpRight size={32} className="text-white group-hover:rotate-45 transition-transform" />
                        </div>
                    </div>
                </Link>
            </section>
            <Footer />
        </main>
    );
}