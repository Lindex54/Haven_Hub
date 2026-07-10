export function formatCurrency(amount, currency = 'UGX') {
  if (amount == null) return 'Request quotation'

  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
