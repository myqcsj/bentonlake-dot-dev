export default function NavColumn({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <ol className="list-none flex flex-col gap-2">{children}</ol>
    </nav>
  );
}
