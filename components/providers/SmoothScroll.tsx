"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();

  useEffect(() => {
    // 1. Wait for the page to 'mount' and the URL to be stable
    const hash = window.location.hash;
    
    if (hash && lenis) {
      // 2. Small timeout ensures the DOM elements (like id="work") are rendered
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // 3. Tell Lenis to scroll to the ID smoothly
          lenis.scrollTo(hash, {
            offset: -100, // Adjust this based on your Navbar height
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Studio easing
          });
        }
      }, 100);
    }
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}