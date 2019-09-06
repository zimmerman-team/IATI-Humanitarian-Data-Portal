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
