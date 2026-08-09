"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  once?: boolean;
};

export function FadeUp({ delay = 0, once = true, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...props}
    />
  );
}

export function ScaleReveal({ delay = 0, once = true, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...props}
    />
  );
}

export function ImageReveal({ delay = 0, once = true, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(8% 8% 8% 8% round 12px)", opacity: 0, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 12px)", opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...props}
    />
  );
}

export function SlideIn({
  delay = 0,
  once = true,
  direction = "left",
  ...props
}: RevealProps & { direction?: "left" | "right" }) {
  const x = direction === "left" ? -36 : 36;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...props}
    />
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerGroup({ once = true, ...props }: RevealProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      {...props}
    />
  );
}

export function StaggerChild(props: HTMLMotionProps<"div">) {
  return <motion.div variants={staggerItem} {...props} />;
}
