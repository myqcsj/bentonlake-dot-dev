'use client';

import { useState } from 'react';
import { LocationDescriptionContext } from '@/lib/locationDescription';

export default function LocationDescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locationDescription, setLocationDescription] = useState({
    prev: window.location.pathname,
    curr: window.location.pathname,
  });

  return (
    <LocationDescriptionContext.Provider
      value={{
        locationDescription,
        setLocationDescription,
      }}
    >
      {children}
    </LocationDescriptionContext.Provider>
  );
}
