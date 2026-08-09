"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({
  children,
  strength = 18,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-strength, strength]
  );

  return (
    <div ref={ref} className="h-full w-full overflow-hidden">
      <motion.div style={{ y, scale: 1.12 }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
