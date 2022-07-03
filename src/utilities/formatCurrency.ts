const CURRENCY_FORMATTER = new Intl.NumberFormat('en-ZA', { currency: 'ZAR', style: 'currency' })

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}