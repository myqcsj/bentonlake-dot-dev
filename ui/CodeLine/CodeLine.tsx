'use client';

import cx from 'classnames';

import { motion } from 'framer-motion';

export default function CodeLine({
  component,
  children,
}: {
  component?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <motion.div className="hover:bg-slate-900">
      <motion.span
        className={cx({
          'text-amber-400': component,
          'font-bold': component,
          'text-xl': component,
        })}
        tabIndex={0}
        initial={false}
        animate={{ opacity: 0.7 }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.1 },
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
