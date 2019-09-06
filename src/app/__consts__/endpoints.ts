const devEndpoints = {
  activity: 'activity-mlt',
  transaction: 'transaction-mlt',
  result: 'result-mlt',
};

const prodEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  result: 'result',
};

export const endpoints =
  process.env.REACT_APP_PROD && process.env.REACT_APP_PROD === 'true'
    ? prodEndpoints
    : devEndpoints;
