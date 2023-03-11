'use client';

import { useState, useEffect } from 'react';

export default function SidePanel({ children }: { children: React.ReactNode }) {
  const [hasRenderedOnce, setRenderState] = useState(false);

  useEffect(() => {
    setRenderState(true);
  }, []);

  return (
    <div className={`transition ${hasRenderedOnce ? 'translate-x-10' : ''}`}>
      {children}
    </div>
  );
}
