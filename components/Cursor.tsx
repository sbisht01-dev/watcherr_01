"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics for that "heavy" high-end feel
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            // Targets any interactive element
            const target = e.target as HTMLElement;
            const isSelectable = target.closest('a, button, .group, input, textarea');
            setIsHovered(!!isSelectable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-brand-red rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovered ? 4 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}