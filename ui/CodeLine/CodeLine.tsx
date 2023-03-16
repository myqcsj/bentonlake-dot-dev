'use client';

import cx from 'classnames';

import { motion } from 'framer-motion';

export default function CodeLine({
  children,
  important,
  component,
}: {
  children?: React.ReactNode;
  important?: boolean | undefined;
  component?: boolean | undefined;
}) {
  if (important) {
    return (
      <motion.h1
        className="font-extrabold flex items-center w-fit"
        initial={false}
        animate={{ opacity: 0.4 }}
        whileHover={{
          opacity: 1,
          scale: 1.1,
          x: 50,
          transition: { duration: 0.2, ease: 'easeInOut' },
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <span className="text-gray-500 text-6xl">&lt;</span>
        <span className="text-gray-100 text-8xl">{children}</span>
        <span className="text-gray-500 text-6xl">/&gt;</span>
      </motion.h1>
    );
  } else {
    return <p className="text-gray-600/60 font-bold text-2xl">{children}</p>;
  }
}
