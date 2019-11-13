const devEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  organisation: 'organisation',
  result: 'result',
  datasetnote: 'datasetnote',
  codelists: 'codelists',
};

const prodEndpoints = {
  activity: 'activity',
  transaction: 'transaction',
  organisation: 'organisation',
  result: 'result',
  datasetnote: 'datasetnote',
  codelists: 'codelists',
};

export const endpoints =
  process.env.REACT_APP_PROD && process.env.REACT_APP_PROD === 'true'
    ? prodEndpoints
    : devEndpoints;
