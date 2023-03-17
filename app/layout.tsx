import './globals.css';

import Link from 'next/link';

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
      <body
        className={`bg-black flex flex-col p-4 h-screen ${montserrat.className}`}
      >
        <header className="flex items-center justify-between">
          <Link href="/">
            <BentonLakeLogo />
          </Link>
          <nav className="flex items-center gap-4">
            <NavItem text="About" href="/about" />
            <NavItem text="Work" href="/work" />
            <NavItem text="Projects" href="/projects" />
            <NavItem text="Contact" href="/contact" />
          </nav>
        </header>
        <main className="h-full text-white">{children}</main>
      </body>
    </html>
  );
}
