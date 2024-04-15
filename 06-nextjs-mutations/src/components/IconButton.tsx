import clsx from 'clsx';
import {ComponentProps, MouseEventHandler, ReactNode} from 'react';
import Icon from './Icon';

type Props = {
  'aria-label': string;
  children: ReactNode;
  color?: ComponentProps<typeof Icon>['color'];
  disabled?: boolean;
  onClick?: MouseEventHandler;
};

export default function IconButton({
  children,
  color,
  disabled,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        'block h-11 w-11 rounded-full p-3 transition-colors',
        disabled ? 'opacity-50' : 'hover:bg-white/10'
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <Icon color={color}>{children}</Icon>
    </button>
  );
}
