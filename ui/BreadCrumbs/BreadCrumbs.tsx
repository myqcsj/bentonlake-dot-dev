'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import { useCurrentLocationContext } from '@/lib/currentLocation';
import { epilogue } from '@/lib/fonts';

function Crumb({ href, name }: { href: string; name: string }) {
  const router = useRouter();
  const { setCurrentLocation } = useCurrentLocationContext();

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.push(href);
    setCurrentLocation(href);
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="rounded-r-full rounded-l-full border px-4 py-2 text-sm"
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      whileTap={{ scale: 1, transition: { duration: 0.05 } }}
    >
      {name}
    </motion.a>
  );
}

export default function NavBar() {
  const { currentLocation } = useCurrentLocationContext();

  // generates a nav for each path in the current location
  return (
    <nav className={`flex gap-4 p-4 ${epilogue.className}`}>
      {currentLocation.split('/').map((path, index) => {
        if (index !== 0 && path === '') return;
        else if (path === '')
          return <Crumb key="BentonLake" name="<BentonLake />" href="/" />;
        else
          return (
            <Crumb
              key={path}
              name={`<${path[0].toUpperCase() + path.substring(1)} />`}
              href={`/${path}`}
            />
          );
      })}
    </nav>
  );
}
