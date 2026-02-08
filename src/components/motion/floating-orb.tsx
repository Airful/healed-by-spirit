"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingOrb({
  size = 200,
  color = "rgba(123, 94, 167, 0.08)",
  delay = 0,
  duration = 8,
  className,
}: FloatingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, -5, 8, 0],
        scale: [1, 1.05, 0.98, 1.02, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
