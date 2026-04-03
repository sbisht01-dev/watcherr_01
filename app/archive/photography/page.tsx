"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// 1. DATA: Add your photo URLs here
const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", title: "Midnight Transit", loc: "Delhi" },
    { id: 2, url: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2", title: "Static Silence", loc: "Gurugram" },
    { id: 3, url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1", title: "Neon Pulse", loc: "Noida" },
    { id: 4, url: "https://images.unsplash.com/photo-1493238792000-8113da705763", title: "The Void", loc: "Unknown" },
    { id: 5, url: "https://images.unsplash.com/photo-1514306191717-452ec28c7814", title: "Brutalism", loc: "Chandigarh" },
    { id: 6, url: "https://images.unsplash.com/photo-1485846234645-a62644f84728", title: "Cinema Studies", loc: "Studio" },
];

export default function PhotographyLibrary() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedPhoto = photos.find(p => p.id.toString() === selectedId);

    return (
        <main className="min-h-screen bg-brand-black pt-32 pb-20 px-6 md:px-12">
            
            {/* Header: Cinematic Title */}
            <div className="max-w-7xl mx-auto mb-20 text-center">
                <motion.span 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-brand-red font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block"
                >
                    Visual Journal
                </motion.span>
                <h1 className="font-heading text-6xl md:text-[8vw] uppercase italic leading-none text-white tracking-tighter">
                    Visual <span className="text-brand-red not-italic">Logs.</span>
                </h1>
            </div>

            {/* 2. THE MASONRY LIBRARY GRID */}
            <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {photos.map((photo, i) => (
                    <motion.div
                        key={photo.id}
                        layoutId={photo.id.toString()}
                        onClick={() => setSelectedId(photo.id.toString())}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group cursor-none overflow-hidden bg-white/5 rounded-sm"
                    >
                        {/* Custom Viewfinder Cursor on Hover */}
                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 border border-brand-red/50 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                                <ZoomIn className="text-white w-5 h-5" />
                            </div>
                        </div>

                        <motion.img 
                            src={photo.url} 
                            alt={photo.title}
                            className="w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />

                        {/* Metadata Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="font-mono text-[9px] text-brand-red uppercase tracking-widest">{photo.loc}</p>
                            <h3 className="text-white font-heading text-lg uppercase tracking-tight">{photo.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. THE LIGHTBOX (ZOOM VIEW) */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12">
                        {/* Background Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        {/* Large Image Container */}
                        <motion.div 
                            layoutId={selectedId}
                            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center z-10"
                        >
                            <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-0 right-0 text-white/40 hover:text-white p-4 transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <img 
                                src={selectedPhoto?.url} 
                                className="max-h-[80vh] object-contain shadow-2xl border border-white/5"
                                alt="Selected"
                            />

                            <div className="mt-8 text-center">
                                <h2 className="text-white font-heading text-3xl uppercase italic tracking-tighter">
                                    {selectedPhoto?.title}
                                </h2>
                                <p className="text-brand-red font-mono text-xs uppercase tracking-widest mt-2">
                                    Captured by Saurabh Bisht
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}