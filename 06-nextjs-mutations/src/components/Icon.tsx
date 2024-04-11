import clsx from 'clsx';
import {ReactNode} from 'react';

type Props = {
  className?: string;
  color?: 'default' | 'primary' | 'error';
  children: ReactNode;
};

export default function Icon({className, children, color = 'default'}: Props) {
  return (
    <span
      className={clsx(
        className,
        'w-5 inline-block',
        {
          default: 'text-slate-700',
          primary: 'text-cyan-500',
          error: 'text-red-500'
        }[color]
      )}
    >
      {children}
    </span>
  );
}
