import './globals.css';

import LocationContext from '@/ui/LocationContext';
import BreadCrumbs from '@/ui/BreadCrumbs';
import LineNumbers from '@/ui/LineNumbers';
import BentonLakeLogo from '@/ui/BentonLakeLogo';

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
      <body className="bg-black flex flex-col">
        <header className="p-4">
          <BentonLakeLogo />
        </header>
        <LocationContext>
          {/*<BreadCrumbs />*/}
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
