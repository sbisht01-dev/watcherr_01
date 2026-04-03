"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the URL has a #hash (like #work)
    if (window.location.hash) {
      // If there is a hash, let the browser handle the scroll to that ID
      return;
    }
    // Otherwise, reset to top on every page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}