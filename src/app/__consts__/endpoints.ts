const devEndpoints = {
  activity: 'activity-mlt',
  transaction: 'transaction-mlt',
  organisation: 'organisation-mlt',
  result: 'result-mlt',
};

const prodEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  organisation: 'organisation',
  result: 'result',
};

export const endpoints =
  process.env.REACT_APP_PROD && process.env.REACT_APP_PROD === 'true'
    ? prodEndpoints
    : devEndpoints;
