export const percentage = (obtained, total) => {
  if (total > 0) {
    return Math.fround(obtained / total).toLocaleString('en', {
      style: 'percent',
      maximumFractionDigits: 2,
    });
  }
  return '0%';
};
