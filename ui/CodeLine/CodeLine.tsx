'use client';

import cx from 'classnames';

import { motion } from 'framer-motion';

export default function CodeLine({
  children,
}: {
  component?: boolean | undefined;
  children?: React.ReactNode;
}) {
  return (
    <motion.div initial={false} animate={{ opacity: 0.7 }} className="text-gra">
      {children}
    </motion.div>
  );
}
