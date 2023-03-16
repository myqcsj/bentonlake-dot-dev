'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import cx from 'classnames';

import { motion } from 'framer-motion';

export default function InteractiveCodeLine({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.push(href);
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className=""
      initial={false}
      animate={{ opacity: 0.7 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.a>
  );
}
