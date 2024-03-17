import currencyFormatter from 'currency-formatter'

export const getFormattedCurrency = (value: number) => {
    return currencyFormatter.format(value, {
        locale: 'de-DE',
        decimal: ',',
        thousand: '.',
        precision: 0,
        symbol: '',
    })
}
