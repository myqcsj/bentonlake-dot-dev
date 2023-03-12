export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <ol className="flex flex-col gap-2.5 items-center list-none">
        {children}
      </ol>
    </nav>
  );
}
