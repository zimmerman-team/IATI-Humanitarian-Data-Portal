export const DS_API =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DS_API_DEV
    : process.env.REACT_APP_DS_API;
