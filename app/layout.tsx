import './globals.css';

import NavCard from '@/ui/NavCard';

import { raleway } from '@/lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 ${raleway.className}`}>
        <div className="flex justify-center gap-4 p-14 antialiased">
          <NavCard />
          <div className="w-2/3">{children}</div>
        </div>
      </body>
    </html>
  );
}
