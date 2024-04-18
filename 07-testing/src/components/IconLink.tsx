import clsx from 'clsx';
import {ComponentProps, ReactNode} from 'react';
import Icon from './Icon';
import Link from 'next/link';
import {Url} from 'url';

type Props = {
  'aria-label': string;
  children: ReactNode;
  color?: ComponentProps<typeof Icon>['color'];
  disabled?: boolean;
  href: Partial<Url>;
};

export default function IconLink({
  children,
  color,
  disabled,
  href,
  ...rest
}: Props) {
  const props = {
    className: clsx(
      'block h-11 w-11 rounded-full p-3 transition-colors',
      disabled ? 'opacity-50' : 'hover:bg-slate-100'
    ),
    children: <Icon color={color}>{children}</Icon>,
    ...rest
  };

  // `<a>` elements can't be disabled, conditionally render
  // a `<div>` instead if the link should be disabled
  if (disabled) {
    return <div {...props} />;
  } else {
    return <Link {...props} href={href} />;
  }
}
