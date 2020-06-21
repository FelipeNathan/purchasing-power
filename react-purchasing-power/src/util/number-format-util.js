import CurrencyInput from 'react-currency-input'

export function format(value, symbol, precision = 2) {
    return new CurrencyInput({
        value: value,
        decimalSeparator: ",",
        thousandSeparator: ".",
        prefix: `${symbol || ''} `,
        precision: precision
    }).getMaskedValue()
}