import Link from 'next/link';

import AnimatedRainbowText from '@/ui/AnimatedRainbowText';

export const metadata = {
  title: '<BentonLake /> | Developer-in-Training',
};

export default function Home() {
  return (
    <div className="flex flex-col mt-32 items-center">
      <h1 className="flex items-center gap-3 text-4xl">
        <span>I&apos;m Benton Lake and I want to build the </span>
        <Link href="/future" className="font-bold">
          <AnimatedRainbowText text="future" />
        </Link>
      </h1>
    </div>
  );
}
