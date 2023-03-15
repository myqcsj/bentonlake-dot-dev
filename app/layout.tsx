import './globals.css';

import LocationContext from '@/ui/LocationContext';
import NavBar from '@/ui/NavBar';

import { fira_code } from '@/lib/fonts';

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
      <body className={`${fira_code.className} bg-white flex flex-col`}>
        <LocationContext>
          <header>
            <NavBar />
          </header>
          <div>
            <section>{/* line numbers */}</section>
            <main>{children}</main>
          </div>
        </LocationContext>
      </body>
    </html>
  );
}
