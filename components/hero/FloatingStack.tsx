"use client";

import React from 'react';
import { motion, useSpring, useMotionValue } from "framer-motion";

const stack = [
    { name: "figma", top: "20%", left: "20%", size: 60 },
    { name: "react", top: "45%", left: "60%", size: 50 },
    { name: "blender", top: "70%", left: "30%", size: 70 },
    { name: "illustrator", top: "15%", left: "70%", size: 45 },
];

export default function FloatingStack() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set((clientX - window.innerWidth / 2) / 30);
        mouseY.set((clientY - window.innerHeight / 2) / 30);
    };

    return (
        <div 
            onMouseMove={handleMouseMove}
            className="w-full h-full relative"
        >
            {stack.map((item, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        x: springX,
                        y: springY,
                    }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    className="opacity-20 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                >
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        {/* Ensure your icons are in /public/icons/ */}
                        <img src={`/icons/${item.name}.svg`} alt={item.name} width={item.size} height={item.size} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}