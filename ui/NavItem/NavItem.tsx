'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useLocationDescriptionContext } from '@/lib/locationDescription';

import chevron_right from '@/public/icons/chevron_right.svg';

export default function NavItem({
  href,
  innerText,
}: {
  href: string;
  innerText: string;
}) {
  const [isNavHovered, setNavHover] = useState(false);
  const { setLocationDescription } = useLocationDescriptionContext();

  return (
    <li>
      <Link
        href={href}
        className="bg-gradient-to-tr from-orange-500 to-pink-600 rounded-l-full rounded-r-full p-2.5 w-72 flex items-center justify-center transition hover:scale-110"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
        onClick={() =>
          setLocationDescription({ prev: window.location.pathname, curr: href })
        }
      >
        <span className="font-thin">{innerText}</span>

        <div
          className={`h-4 ml-60 flex justify-center items-center absolute transition-opacity ${
            isNavHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={chevron_right}
            alt="Chevron pointing right"
            className="invert"
          />
        </div>
      </Link>
    </li>
  );
}
