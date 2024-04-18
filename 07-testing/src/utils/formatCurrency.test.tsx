import {it, expect} from 'vitest';
import formatCurrency from './formatCurrency';

it('formats the USD currency correctly', () => {
  const result = formatCurrency({amount: 99, currency: 'USD'});
  expect(result).toBe('$99');
});
