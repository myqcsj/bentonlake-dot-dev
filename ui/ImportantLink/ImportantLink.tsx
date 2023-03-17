'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function ImportantLink({
  href,
  text,
  prefetch,
  download,
}: {
  href: string;
  text: string;
  prefetch?: boolean | undefined;
  download?: boolean | undefined;
}) {
  return (
    <Link href={href} prefetch={prefetch} download={download}>
      <motion.div
        className="rounded-r-full rounded-l-full px-6 py-4 bg-violet-800 text-lg font-semibold"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
      >
        {text}
      </motion.div>
    </Link>
  );
}
