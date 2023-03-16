import './globals.css';

import BentonLakeLogo from '@/ui/BentonLakeLogo';

import { source_code_pro } from '@/lib/fonts';

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
      <body className="bg-black flex flex-col p-4">
        <header className="flex justify-between">
          <BentonLakeLogo />
        </header>
        <main className={`flex flex-col ${source_code_pro.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
