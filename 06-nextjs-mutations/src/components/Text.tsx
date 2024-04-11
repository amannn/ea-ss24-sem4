import clsx from 'clsx';
import {ElementType, ReactNode} from 'react';

type Props = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  color?: 'default' | 'muted' | 'primary' | 'error';
  inverted?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'body' | 'small';
};

export default function Text({
  as: Component = 'p',
  inverted,
  children,
  className,
  color = 'default',
  variant = 'body',
  ...rest
}: Props) {
  return (
    <Component
      className={clsx(
        className,
        'transition-colors',
        {
          h1: 'text-3xl font-bold leading-10 text-balance',
          h2: 'text-2xl font-bold leading-9 text-balance',
          h3: 'text-xl font-semibold leading-8 text-balance',
          h4: 'text-base font-semibold text-balance',
          label: 'text-base font-semibold',
          body: 'text-base',
          small: 'text-sm'
        }[variant],
        (inverted
          ? {
              default: 'text-white',
              muted: 'text-white opacity-70',
              primary: 'text-white',
              error: 'text-red-400'
            }
          : {
              default: 'text-gray-900',
              muted: 'text-slate-500',
              primary: 'text-cyan-600',
              error: 'text-red-600'
            })[color]
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
