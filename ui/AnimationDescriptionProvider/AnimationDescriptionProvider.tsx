'use client';

import { useEffect, useState } from 'react';
import { LocationDescriptionContext } from '@/lib/locationDescription';

export default function LocationDescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locationDescription, setLocationDescription] = useState({
    prev: '',
    curr: '',
  });

  // this is required so that code with 'window' is only run on the client
  useEffect(() => {
    setLocationDescription({
      prev: window.location.pathname,
      curr: window.location.pathname,
    });
  }, []);

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
