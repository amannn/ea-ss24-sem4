export default function formatCurrency(params: {
  amount: number;
  currency: string;
}) {
  return Intl.NumberFormat('en', {
    style: 'currency',
    maximumFractionDigits: 0,
    currency: params.currency
  }).format(params.amount);
}
