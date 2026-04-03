"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // 1. Find the curtain element (we'll give it an ID in Step 2)
    const curtain = document.getElementById("transition-curtain");

    if (curtain) {
      // 2. Trigger the "Exit" animation manually or via a class
      // For now, we'll just wait for the duration of your curtain animation (1.1s)
      curtain.classList.add("trigger-exit");
      
      // 3. Wait for the curtain to fully cover the screen
      await new Promise((resolve) => setTimeout(resolve, 900)); 
      
      // 4. Finally, navigate to the new page
      router.push(href);
    } else {
      router.push(href);
    }
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
}