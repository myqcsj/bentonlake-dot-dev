'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import { useCurrentLocationContext } from '@/lib/currentLocation';

export default function NavItem({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const router = useRouter();
  const { setCurrentLocation } = useCurrentLocationContext();

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  function handleClick() {
    router.push(href);
    setCurrentLocation(href);
  }

  return (
    <motion.button
      type="button"
      role="link"
      tabIndex={0}
      onClick={handleClick}
      className="rounded-r-full rounded-l-full border px-4 py-2 text-sm"
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      whileTap={{ scale: 1, transition: { duration: 0.05 } }}
    >
      {name}
    </motion.button>
  );
}
