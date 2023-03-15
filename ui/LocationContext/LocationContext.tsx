'use client';

import { useEffect, useState } from 'react';
import { CurrentLocationContext } from '@/lib/currentLocation';

export default function LocationDescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLocation, setCurrentLocation] = useState('');

  // this is required so that code with 'window' is only run on the client
  useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, []);

  return (
    <CurrentLocationContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
      }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
}
