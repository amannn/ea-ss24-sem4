import PageInfoSummary from '@/components/PageInfoSummary';
import Pagination from '@/components/Pagination';
import Text from '@/components/Text';
import RoomService from '@/services/RoomService';
import ResultList from './ResultList';

// export const dynamic = 'force-dynamic';

export default async function RoomsPage() {
  const response = await RoomService.getRooms();
  if (!response.data) throw new Error(response.statusText);
  const rooms = response.data;

  return (
    <div className="flex flex-col gap-8">
      {rooms.page.totalElements === 0 ? (
        <Text variant="h3">Wherrrrre are the cabins, matey!</Text>
      ) : (
        <>
          <div className="flex justify-between">
            <PageInfoSummary page={rooms.page} />
          </div>
          <ResultList results={rooms.nodes} />
          <Pagination page={rooms.page} />
        </>
      )}
    </div>
  );
}
