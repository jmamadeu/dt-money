export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-IN', {
    currency: 'USD',
    style: 'currency'
  }).format(value);
}
