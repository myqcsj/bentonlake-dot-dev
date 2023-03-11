import SidePanel from '@/ui/SidePanel';

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidePanel>{children}</SidePanel>;
}
