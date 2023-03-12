import SidePanel from '@/ui/SidePanel';

export default function HavePanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-2/5">
      <SidePanel>{children}</SidePanel>
    </main>
  );
}
