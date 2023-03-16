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
  return (
    <Link href={href}>
      <motion.div
        className="font-semibold flex items-center w-fit gap-1"
        initial={false}
        animate={{ opacity: 0.6 }}
        whileHover={{
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <span className="text-gray-500 text-lg">&lt;</span>
        <span className="text-gray-100 text-2xl">{text}</span>
        <span className="text-gray-500 text-lg">/&gt;</span>
      </motion.div>
    </Link>
  );
}
