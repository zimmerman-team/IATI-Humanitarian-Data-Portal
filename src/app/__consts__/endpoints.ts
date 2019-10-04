const devEndpoints = {
  activity: 'activity-mlt',
  transaction: 'transaction-mlt',
  organisation: 'organisation-mlt',
  result: 'result-mlt',
  datasetnote: 'datasetnote',
};

const prodEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  organisation: 'organisation',
  result: 'result',
  datasetnote: 'datasetnote',
};

export const endpoints =
  process.env.REACT_APP_PROD && process.env.REACT_APP_PROD === 'true'
    ? prodEndpoints
    : devEndpoints;
