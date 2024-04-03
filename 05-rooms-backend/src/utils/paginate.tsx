import {Collection, Rel} from '../types';
import withLinks from './withLinks';

export default function paginate<Node>({
  pathname,
  nodes = [],
  size = 10,
  page = 0
}: {
  pathname: string;
  nodes?: Array<Node>;
  page?: number;
  size?: number;
}): Collection<Node> & {
  links: Record<string, Rel>;
} {
  return withLinks(
    {
      page: {
        number: page,
        size,
        totalElements: nodes.length,
        totalPages: Math.ceil(nodes.length / size)
      },
      nodes: nodes.slice(page * size, (page + 1) * size)
    },
    {
      ...(page > 0 && {
        prev: `${pathname}?page=${page - 1}&size=${size}`
      }),
      ...(nodes.length > (page + 1) * size && {
        next: `${pathname}?page=${page + 1}&size=${size}`
      })
    }
  );
}
