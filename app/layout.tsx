import './globals.css';

import LocationContext from '@/ui/LocationContext';
import NavBar from '@/ui/NavBar';
import LineNumbers from '@/ui/LineNumbers';

import { roboto_mono } from '@/lib/fonts';

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
      <body className={`${roboto_mono.className} bg-slate-800 flex flex-col`}>
        <LocationContext>
          <header className="p-4">
            <NavBar />
          </header>
          <div className="flex">
            <section className="flex-none w-12">
              <LineNumbers />
            </section>
            <main className="flex-grow">{children}</main>
          </div>
        </LocationContext>
      </body>
    </html>
  );
}
