import {PageInfo} from '../types';
import Text from './Text';

type Props = {
  page: PageInfo;
};

export default function PageInfoSummary({page}: Props) {
  // Map from zero-based page numbers to human readable page numbers
  const pageNumber = page.number + 1;

  return (
    <Text variant="small" color="muted">
      Page {pageNumber} of {page.totalPages} ({page.totalElements} results in
      total)
    </Text>
  );
}
