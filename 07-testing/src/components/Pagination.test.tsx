import {it, afterEach, expect} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import Pagination from './Pagination';

afterEach(() => {
  cleanup();
});

it('renders a summary', () => {
  render(
    <Pagination
      page={{
        number: 0,
        size: 10,
        totalElements: 100,
        totalPages: 10
      }}
    />
  );

  screen.getByText('Page 1 of 10 (100 results in total)');
});

it('shows a link to the next page, if available ', () => {
  render(
    <Pagination
      page={{
        number: 0,
        size: 10,
        totalElements: 100,
        totalPages: 10
      }}
    />
  );

  const result = screen.getByRole('link', {name: 'Next page'});
  expect(result.getAttribute('href')).toBe('?page=2');
});

it('doesnt show a link the prev page, if on the first page', () => {
  render(
    <Pagination
      page={{
        number: 0,
        size: 10,
        totalElements: 100,
        totalPages: 10
      }}
    />
  );

  const result = screen.getByRole('generic', {name: 'Previous page'});
  expect(result.getAttribute('href')).toBe(null);
});
