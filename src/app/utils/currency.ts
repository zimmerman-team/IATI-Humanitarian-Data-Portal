import fx from 'money';
import axios from 'axios';

export const converter = fx;

function getExchangeRates() {
  axios.get('https://api.exchangeratesapi.io/latest').then(data => {
    converter.base = data.data.base;
    converter.rates = data.data.rates;
  });
}

getExchangeRates();

export function convertCurr(value: number, from: string, to: string) {
  return converter.convert(value, { from, to });
}

// simple helper function to convert values
// and check if appropriate values have been passed in
export function convertHelper(
  value: number | null,
  from: string | undefined,
  to: string
): [number, string] | null {
  let convertedValue = value;

  if (value !== null && to !== from && from) {
    convertedValue = convertCurr(value, from, to);
  }

  return convertedValue !== null ? [convertedValue, to] : null;
}
