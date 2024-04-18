import {Room} from '@/types';
import ResultListItem from './ResultListItem';

type Props = {
  results: Array<Room>;
};

export default function ResultList({results}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {results.map((result) => (
        <ResultListItem key={result.id} room={result} />
      ))}
    </div>
  );
}
