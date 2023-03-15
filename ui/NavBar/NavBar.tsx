'use client';

import NavItem from '@/ui/NavItem';

import { useCurrentLocationContext } from '@/lib/currentLocation';

import { epilogue } from '@/lib/fonts';

export default function NavBar() {
  const { currentLocation } = useCurrentLocationContext();

  // generates a nav for each path in the current location
  return (
    <nav className={`flex gap-4 ${epilogue.className} p-4`}>
      {currentLocation.split('/').map((path, index) => {
        if (index !== 0 && path === '') return;
        else if (path === '')
          return <NavItem key="BentonLake" name="<BentonLake />" href="/" />;
        else
          return (
            <NavItem
              key={path}
              name={`<${path[0].toUpperCase() + path.substring(1)} />`}
              href={`/${path}`}
            />
          );
      })}
    </nav>
  );
}
