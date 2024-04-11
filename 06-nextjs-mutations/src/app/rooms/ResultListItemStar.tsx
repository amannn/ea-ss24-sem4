'use client';

import IconButton from '@/components/IconButton';
import {API_URL} from '@/config';
import {Id} from '@/types';
import {StarIcon as StarOutlineIcon} from '@heroicons/react/24/outline';
import {StarIcon as StarSolidIcon} from '@heroicons/react/24/solid';
import {useRouter} from 'next/navigation';

type Props = {
  roomId: Id;
  isStarred: boolean;
};

export default function ResultListItemStar({roomId, isStarred}: Props) {
  const router = useRouter();

  async function onClick() {
    console.log('star');

    const response = await fetch(`${API_URL}/rooms/${roomId}/toggle-starred`, {
      method: 'POST'
    });
    const data = await response.json();
    router.refresh();
  }

  return (
    <div className="absolute top-0 right-0">
      <IconButton aria-label="Star" onClick={onClick}>
        {isStarred ? <StarSolidIcon /> : <StarOutlineIcon />}
      </IconButton>
    </div>
  );
}
