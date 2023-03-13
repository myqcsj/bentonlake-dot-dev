export default function PageSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-3xl drop-shadow-xl bg-white${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </section>
  );
}
