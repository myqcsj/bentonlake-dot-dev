'use client';

import { motion } from 'framer-motion';

export default function AnimatedRainbowText({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2, ease: 'easeInOut' },
      }}
    >
      <motion.span
        animate={{
          textShadow:
            '0px 0px 2px #a78bfa, -4px 4px 2px #8b5cf6, -8px 8px 2px #7c3aed, -12px 12px 2px #6d28d9, -16px 16px 2px #5b21b6, -20px 20px 2px #4c1d95, 0 0 10px white, 0 0 20px white',
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
