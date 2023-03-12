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
      } else if (pageOrder.indexOf(curr) > pageOrder.indexOf(prev)) {
        ref.current?.classList.remove('translate-x-10');
        ref.current?.offsetWidth;
        ref.current?.classList.add('-translate-y-10');
        ref.current?.offsetWidth;
      } else {
        ref.current?.classList.remove('translate-x-10');
        ref.current?.offsetWidth;
        ref.current?.classList.add('translate-y-10');
        ref.current?.offsetWidth;
      }
    }
  }, [prev, curr]);

  return (
    <div
      ref={ref}
      className="transition w-fit h-full rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-orange-500 to-pink-600"
    >
      {children}
    </div>
  );
}
