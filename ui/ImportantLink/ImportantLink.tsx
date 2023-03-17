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
      <motion.span className="rounded-r-full rounded-l-full px-6 py-4 bg-violet-600 text-lg font-semibold">
        {text}
      </motion.span>
    </Link>
  );
}
