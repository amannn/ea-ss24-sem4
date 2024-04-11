import {Id} from '@/types';

import {revalidatePath} from 'next/cache';
import ResultListItemStarButton from './ResultListItemStarButton';
import RoomService from '@/services/RoomService';
import ResultListItemStarForm from './ResultListItemStarForm';

type Props = {
  roomId: Id;
  isStarred: boolean;
};

export default function ResultListItemStar({roomId, isStarred}: Props) {
  async function onSubmit(state, data: FormData) {
    'use server';

    // Improve error handling:
    // 1. Don't throw on the server side (will trigger error.tsx)
    // 2. Instead, return status information from onSubmit handler
    //    for the client side, to display an error

    const roomId = parseInt(data.get('roomId') as string);

    // Trigger an error
    // const roomId = 9999;

    const result = await RoomService.toggleRoomStarred(roomId);

    if (result.status === 200) {
      revalidatePath('/rooms');
    }

    // Is returned to `[state] = useFormState(…)`
    return result;
  }

  return (
    <ResultListItemStarForm onSubmit={onSubmit}>
      <input type="hidden" name="roomId" value={roomId} />
      <ResultListItemStarButton isStarred={isStarred} />
    </ResultListItemStarForm>
  );
}
