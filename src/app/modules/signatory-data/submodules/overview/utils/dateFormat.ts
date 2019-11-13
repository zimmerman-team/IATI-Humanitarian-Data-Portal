export const dateFormat = date => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const currentDatetime = new Date(date);
  const formattedDate = `${currentDatetime.getDate()}-${
    months[currentDatetime.getMonth()]
  }-${currentDatetime.getFullYear()}`;
  return formattedDate;
};
