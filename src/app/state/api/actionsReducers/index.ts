import axios, { AxiosResponse } from 'axios';
import { action, thunk } from 'easy-peasy';

import { ApiModel } from '../interfaces';

// so this basically describes the redux initial values
// and redux actions for the generic api model
const apiModel = <QueryModel, ResponseModel>(
  url: string
): ApiModel<QueryModel, ResponseModel> => ({
  loading: false,
  success: false,
  data: null,
  errorData: null,
  onError: action((state, payload) => {
    state.loading = false;
    state.errorData = payload;
  }),
  onSuccess: action((state, payload) => {
    state.loading = false;
    state.success = true;
    state.data = payload;
  }),
  onRequest: action(state => {
    state.loading = true;
    state.success = false;
  }),
  fetch: thunk(async (actions, query) => {
    actions.onRequest();

    // okay so to keep the proper type script checks
    // for our query variables and still make this solr
    // work with strings passed in as params
    // we will convert the objects passed in as values
    // to a string and pass it into q accordingly
    axios
      .get(url, {
        params: query.values,
      })
      .then(
        (resp: AxiosResponse) => {
          actions.onSuccess(resp.data);
        },
        (error: any) => {
          actions.onError(error.response);
        }
      );
  }),
});

export default apiModel;
