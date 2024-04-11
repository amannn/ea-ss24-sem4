import Image from 'next/image';
import {Room} from '@/types';
import Text from '@/components/Text';
import UserPortrait from '@/components/UserPortrait';
import formatCurrency from '@/utils/formatCurrency';
import formatDate from '@/utils/formatDate';
import ResultListItemStar from './ResultListItemStar';

type Props = {
  room: Room;
};

export default function ResultListItem({room}: Props) {
  return (
    <div className="overflow-hidden relative flex flex-col rounded-sm">
      <div className="relative">
        <div className="h-56 w-full relative bg-slate-100">
          <Image
            priority
            fill
            className="object-cover"
            alt=""
            src={room.heroUrl}
            sizes="20vw"
          />
        </div>
        <ResultListItemStar />
      </div>
      <div className="border-x border-b grow flex flex-col">
        <div className="ml-4 py-4 pr-4">
          <Text className="line-clamp-1" variant="h4">
            {room.title}
          </Text>
          <Text
            variant="small"
            color="muted"
            className="mt-1 h-10 line-clamp-2"
          >
            {room.description}
          </Text>
          <Text variant="small" color="muted" className="mt-2">
            Added on {formatDate(room.createdAt)}
          </Text>
        </div>
        <div className="flex h-12 flex-col justify-center py-1 ml-4 pr-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <Text as="span" variant="label" color="primary">
                  {formatCurrency(room.pricePerNight)}
                </Text>
                <Text variant="small" color="muted" as="span">
                  /day
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="shrink-0">
                <UserPortrait size="small" user={room.owner} />
              </div>
              <div className="flex items-center">
                <Text variant="small" color="muted">
                  {room.owner.firstName}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
