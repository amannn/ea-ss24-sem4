import IconButton from '@/components/IconButton';
import {StarIcon} from '@heroicons/react/24/outline';

export default function ResultListItemStar() {
  return (
    <div className="absolute top-0 right-0">
      <IconButton aria-label="Star">
        <StarIcon />
      </IconButton>
    </div>
  );
}
