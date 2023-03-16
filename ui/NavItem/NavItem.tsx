import Link from 'next/link';

import { motion } from 'framer-motion';

export default function NavItem({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <motion.div>{text}</motion.div>
    </Link>
  );
}
