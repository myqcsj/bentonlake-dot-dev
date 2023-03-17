import Link from 'next/link';

import AnimatedRainbowText from '@/ui/AnimatedRainbowText';
import ImportantLink from '@/ui/ImportantLink';

export const metadata = {
  title: '<BentonLake /> | Developer-in-Training',
};

export default function Home() {
  return (
    <div className="flex flex-col mt-40 items-center gap-12">
      <h1 className="flex items-center gap-3 text-4xl">
        <span>I&apos;m Benton Lake and I want to build the </span>
        <Link href="/future" className="font-bold">
          <AnimatedRainbowText text="future" />
        </Link>
      </h1>
      <section className="flex gap-6">
        <ImportantLink href="/contact" text="Get in Touch" />
        <ImportantLink
          href="/public/resume.pdf"
          text="Download my Resume"
          prefetch={false}
          download={true}
        />
      </section>
    </div>
  );
}
