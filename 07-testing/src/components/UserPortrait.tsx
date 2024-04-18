import clsx from 'clsx';
import Image from 'next/image';
import {User} from '@/types';

type Props = {
  className?: string;
  user: User;
  size?: 'small' | 'medium' | 'large';
};

export default function UserPortrait({
  className,
  user,
  size = 'medium'
}: Props) {
  return (
    <Image
      src={user.portraitUrl}
      alt={'Portrait of ' + user.firstName}
      width={48}
      height={48}
      priority
      className={clsx(
        className,
        'rounded-full object-cover',
        {
          large: 'h-16 w-16',
          medium: 'h-12 w-12',
          small: 'h-8 w-8'
        }[size]
      )}
    />
  );
}
