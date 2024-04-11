'use client';

import IconButton from '@/components/IconButton';
import {StarIcon as StarOutlineIcon} from '@heroicons/react/24/outline';
import {StarIcon as StarSolidIcon} from '@heroicons/react/24/solid';
import {useFormStatus} from 'react-dom';

type Props = {
  isStarred: boolean;
};

export default function ResultListItemStarButton({isStarred}: Props) {
  const status = useFormStatus();

  // Optimistic UI
  const optimisticIsStarred = status.pending ? !isStarred : isStarred;

  return (
    <IconButton disabled={status.pending} aria-label="Star">
      {optimisticIsStarred ? <StarSolidIcon /> : <StarOutlineIcon />}
    </IconButton>
  );
}
