'use client';

import { useLocationDescriptionContext } from '@/lib/locationDescription';
import { useEffect, useRef } from 'react';
import PanelSection from '../PanelSection';

export default function SidePanel({ children }: { children: React.ReactNode }) {
  const {
    locationDescription: { prev, curr },
  } = useLocationDescriptionContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curr !== prev) {
      if (prev === '/') {
        // referencing offsetWidth causes CSS to recompute values, leading to animations replaying
        ref.current?.classList.remove('transition');
        ref.current?.classList.add('-translate-x-8');
        ref.current?.offsetWidth;
        ref.current?.classList.remove('-translate-x-8');
        ref.current?.classList.add('transition');
        ref.current?.offsetWidth;
      } else {
        ref.current?.classList.remove(
          'transition',
          'opacity-100',
          'duration-700' // for some reason this needs to be removed then added back or else it won't work
        );
        ref.current?.classList.add('-translate-x-8', 'opacity-0');
        ref.current?.offsetWidth;
        ref.current?.classList.add('transition', 'opacity-100', 'duration-700');
        ref.current?.classList.remove('-translate-x-8');
        ref.current?.offsetWidth;
      }
    }
  }, [prev, curr]);

  return (
    <PanelSection refer={ref} className="duration-700 transition w-full h-full">
      {children}
    </PanelSection>
  );
}
