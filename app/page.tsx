import PageSection from '@/ui/PageSection';

export const metadata = {
  title: 'Benton Lake | Developer-in-Training',
  description:
    "Learning today to build tomorrow. Benton Lake's personal website with Next.JS, React, and framer-motion.",
};

export default function Home() {
  return (
    <PageSection className="p-12">
      <h2 className="text-gray-400 font-semibold">Benton Lake</h2>
      <h1 className="font-extrabold text-3xl text-gray-800">Web Developer</h1>
    </PageSection>
  );
}
