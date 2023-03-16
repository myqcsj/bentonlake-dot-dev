'use client';

import cx from 'classnames';

export default function CodeLine({
  children,
  type,
  importance,
}: {
  children?: React.ReactNode;
  type: 'nav' | 'component';
  importance: 0 | 1 | 2 | 3;
}) {
  const nav = type === 'nav';
  const component = type === 'component';

  const classname = cx('text-gray-700', {
    'text-red-700': nav,
    'text-yellow-500': component,
  });

  switch (importance) {
    case 0:
      return <p className={classname}>{children}</p>;
    case 1:
      return <h1 className={classname}>{children}</h1>;
    case 2:
      return <h2 className={classname}>{children}</h2>;
    case 3:
      return <h3 className={classname}>{children}</h3>;

    default:
      return <></>;
  }
}
