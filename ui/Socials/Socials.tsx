import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import test from '@/public/icons/test.svg';

const socialList = [
  { href: '#', src: test, title: 'heart' },
  { href: '#', src: test, title: 'other_heart' },
];

function Social({
  href,
  src,
  title,
  size,
}: {
  href: string;
  src: StaticImageData;
  title: string;
  size: number;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="rounded-full bg-gradient-to-t to-indigo-700 from-violet-600 p-1"
    >
      <Image
        src={src}
        width={size}
        height={size}
        alt={title}
        className="invert"
      />
    </Link>
  );
}

export default function Socials({ size }: { size?: number }) {
  return (
    <div className="list-none flex gap-3">
      {socialList.map((social) => (
        <Social {...social} size={size ?? 16} key={social.title} />
      ))}
    </div>
  );
}
