'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function NavItem({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  const outerTag = {
    hovered: { opacity: 1, scale: 1.02 },
  };
  const innerTag = {
    hovered: { color: '#5b21b6' },
  };

  return (
    <Link href={href}>
      <motion.div
        className="font-semibold flex items-center w-fit gap-1"
        initial={false}
        animate={{ opacity: 0.6 }}
        whileHover="hovered"
        variants={outerTag}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        <motion.span
          className="text-lg"
          initial={false}
          animate={{ color: '#6b7280' }}
          variants={innerTag}
          transition={{ duration: 0.15, ease: 'easeInOut' }}
        >
          &lt;
        </motion.span>
        <motion.span
          className="text-2xl"
          initial={false}
          animate={{ color: '#f3f4f6' }}
        >
          {text}
        </motion.span>
        <motion.span
          className="text-lg"
          initial={false}
          animate={{ color: '#6b7280' }}
          variants={innerTag}
          transition={{ duration: 0.15, ease: 'easeInOut' }}
        >
          /&gt;
        </motion.span>
      </motion.div>
    </Link>
  );
}
