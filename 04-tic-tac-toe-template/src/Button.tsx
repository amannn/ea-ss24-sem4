import {MouseEvent, ReactNode} from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?(event: MouseEvent): void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export default function Button({
  className,
  children,
  type,
  variant = 'primary',
  disabled,
  onClick
}: Props) {
  return (
    <button
      disabled={disabled}
      className={clsx(className, styles.root, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary'
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
