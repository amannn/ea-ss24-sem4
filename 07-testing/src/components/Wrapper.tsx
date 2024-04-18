import clsx from 'clsx';
import {ReactNode} from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Wrapper({children, className}: Props) {
  return (
    <div className={clsx(className, 'm-auto max-w-4xl px-4')}>{children}</div>
  );
}
