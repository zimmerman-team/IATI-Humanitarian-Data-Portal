export const percentage = (obtained, total) => {
  return Math.fround(obtained / total).toLocaleString('en', {
    style: 'percent',
    maximumFractionDigits: 2,
  });
};
