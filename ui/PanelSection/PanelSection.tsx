import { RefObject } from 'react';

export default function PanelSection({
  children,
  className,
  refer,
}: {
  children: React.ReactNode;
  className?: string;
  refer?: RefObject<any>;
}) {
  return (
    <section
      className={`backdrop-blur-sm bg-slate-800/60 rounded-3xl p-3 ${
        className ?? ''
      }`}
      ref={refer}
    >
      {children}
    </section>
  );
}
