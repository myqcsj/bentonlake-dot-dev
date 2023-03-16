import './globals.css';

import BentonLakeLogo from '@/ui/BentonLakeLogo';
import NavItem from '@/ui/NavItem';

import { montserrat } from '@/lib/fonts';

export const metadata = {
  description:
    'Next.JS, React, Vue, Laravel, Express, and all things web. Benton Lake is a full-stack developer with training wheels.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black flex flex-col p-4 ${montserrat.className}`}>
        <header className="flex items-center justify-between">
          <BentonLakeLogo />
          <nav className="flex items-center gap-4">
            <NavItem text="Story" href="/story" />
            <NavItem text="Wisdom" href="/wisdom" />
            <NavItem text="Creations" href="/creations" />
            <NavItem text="Contact" href="/contact" />
          </nav>
        </header>
        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  );
}
