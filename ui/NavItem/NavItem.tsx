'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { motion } from 'framer-motion';

export default function NavItem({
  href,
  iconSrc,
  name,
}: {
  href: string;
  iconSrc: StaticImageData;
  name: string;
}) {
  const [isHovered, setHover] = useState(false);

  return (
    <Link
      href={href}
      className="flex items-center gap-3 h-5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div className="svg-light-gray">
        <Image src={iconSrc} alt={name} width={16} height={16} />
      </motion.div>

      <p className="font-semibold text-xs text-gray-400">{name}</p>
    </Link>
  );
}
