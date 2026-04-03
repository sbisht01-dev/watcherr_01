"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="relative">
                {children}

                {/* THE ENTRANCE: Curtain slides UP to reveal the page */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
                    className="fixed inset-0 z-[10000] bg-brand-red origin-top pointer-events-none"
                />

                {/* THE EXIT: This is triggered by TransitionLink */}
                <motion.div
                    id="transition-curtain"
                    initial={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
                    className="fixed inset-0 z-[10000] bg-brand-red origin-bottom pointer-events-none"
                />
            </motion.div>
        </AnimatePresence>
    );
}