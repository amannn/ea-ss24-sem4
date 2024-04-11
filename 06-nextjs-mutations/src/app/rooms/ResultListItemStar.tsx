import IconButton from '@/components/IconButton';
import {API_URL} from '@/config';
import {Id} from '@/types';
import {StarIcon as StarOutlineIcon} from '@heroicons/react/24/outline';
import {StarIcon as StarSolidIcon} from '@heroicons/react/24/solid';
import {revalidatePath} from 'next/cache';

type Props = {
  roomId: Id;
  isStarred: boolean;
};

export default function ResultListItemStar({roomId, isStarred}: Props) {
  async function onSubmit(data: FormData) {
    'use server';

    const roomId = parseInt(data.get('roomId') as string);

    const response = await fetch(`${API_URL}/rooms/${roomId}/toggle-starred`, {
      method: 'POST'
    });
    revalidatePath('/rooms');
  }

  return (
    <form action={onSubmit} className="absolute top-0 right-0">
      <input type="hidden" name="roomId" value={roomId} />
      <IconButton aria-label="Star">
        {isStarred ? <StarSolidIcon /> : <StarOutlineIcon />}
      </IconButton>
    </form>
  );
}
