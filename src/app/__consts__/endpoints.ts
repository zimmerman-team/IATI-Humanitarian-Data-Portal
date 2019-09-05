const devEndpoints = {
  activity: 'mlt-activity',
  transaction: 'mlt-transaction',
  result: 'mlt-result',
};

const prodEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  result: 'result',
};

export const endpoints = process.env.REACT_APP_PROD
  ? prodEndpoints
  : devEndpoints;
