'use client';

import { useLocationDescriptionContext } from '@/lib/locationDescription';
import { useEffect, useRef } from 'react';

const pageOrder = [
  '/about',
  '/goals',
  '/experience',
  '/projects',
  '/contributions',
];

export default function SidePanel({ children }: { children: React.ReactNode }) {
  const {
    locationDescription: { prev, curr },
  } = useLocationDescriptionContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curr !== prev) {
      if (curr === '/') {
        console.log('current is home');
        ref.current?.classList.remove('translate-x-10');
        ref.current?.offsetWidth;
      }

      if (prev === '/') {
        console.log('prev was home');
        ref.current?.classList.add('translate-x-10');
        ref.current?.offsetWidth;
      } else if (pageOrder.indexOf(curr) > pageOrder.indexOf(prev)) {
        console.log('higher');
      } else {
        console.log('lower');
      }
    }
  }, [prev, curr]);

  return (
    <div ref={ref} className="transition">
      {children}
    </div>
  );
}
