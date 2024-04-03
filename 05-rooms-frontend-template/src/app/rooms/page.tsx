import PageInfoSummary from '@/components/PageInfoSummary';
import Text from '@/components/Text';
import Pagination from '@/components/Pagination';
import ResultList from './ResultList';
import {Collection, Room} from '@/types';

export default async function RoomsPage() {
  // TODO: Fetch rooms from backend and consider search params
  const rooms: Collection<Room> = {
    page: {
      number: 0,
      size: 20,
      totalElements: 0,
      totalPages: 0
    },
    nodes: []
  };

  return (
    <div className="flex flex-col gap-8">
      {rooms.page.totalElements === 0 ? (
        <Text variant="h3">No cabins currently available.</Text>
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
