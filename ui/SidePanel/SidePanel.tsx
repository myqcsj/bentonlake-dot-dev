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
        // this causes the animation to replay, as the css properties are recomputed
        ref.current?.classList.remove('translate-x-10');
        ref.current?.offsetWidth;
      }

      if (prev === '/') {
        // don't need to remove translations because they're already removed above
        ref.current?.classList.add('translate-x-10');
        ref.current?.offsetWidth;
      } else {
        ref.current?.classList.remove(
          'translate-x-10',
          'transition',
          'opacity-100',
          'duration-500' // for some reason this needs to be removed then added back or else it won't work
        );
        ref.current?.classList.add('opacity-0');
        ref.current?.offsetWidth;
        ref.current?.classList.add(
          'translate-x-10',
          'transition',
          'opacity-100',
          'duration-500'
        );
        ref.current?.offsetWidth;
      }
    }
  }, [prev, curr]);

  return (
    <div ref={ref} className="duration-500 transition w-full h-full">
      {children}
    </div>
  );
}
