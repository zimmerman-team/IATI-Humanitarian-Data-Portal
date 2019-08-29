/* eslint-disable no-param-reassign */
import axios, { AxiosResponse } from 'axios';
import { action, thunk } from 'easy-peasy';
import { API } from 'space-api';

import { ApiModel, Errors, RequestValues, ResponseData } from '../interfaces';

export const api = new API(
  process.env.REACT_APP_CMS_PROJECT_ID,
  process.env.REACT_APP_CMS_API
);

export const db = api.Mongo();

// so this basically describes the redux initial values
// and redux actions for the generic api model
export const apiModel = <QueryModel, ResponseModel>(
  url: string
): ApiModel<QueryModel, ResponseModel> => ({
  loading: false,
  success: false,
  data: null,
  errorData: null,
  onError: action((state, payload: Errors) => {
    state.loading = false;
    state.errorData = payload;
  }),
  onSuccess: action((state, payload: ResponseData<ResponseModel>) => {
    state.loading = false;
    state.success = true;
    state.data = payload;
  }),
  onRequest: action(state => {
    state.loading = true;
    state.success = false;
  }),
  fetch: thunk(async (actions, query: RequestValues<QueryModel>) => {
    actions.onRequest();

    if (Array.isArray(query.values)) {
      const calls = query.values.map(v => axios.get(`${url}?${v}`));
      axios.all(calls).then(
        (resp: any[]) => {
          actions.onSuccess(resp);
        },
        (error: any) => {
          actions.onError(error.response);
        }
      );
    } else {
      let formedUrl = url;
      let params: any = query.values;
      if (typeof query.values === 'string') {
        formedUrl = `${formedUrl}?${query.values}`;
        params = {};
      }
      // okay so to keep the proper type script checks
      // for our query variables and still make this solr
      // work with strings passed in as params
      // we will convert the objects passed in as values
      // to a string and pass it into q accordingly
      axios
        .get(formedUrl, {
          params,
        })
        .then(
          (resp: AxiosResponse) => {
            actions.onSuccess({ data: resp.data });
          },
          (error: any) => {
            actions.onError(error.response);
          }
        );
    }
  }),
});

export const spaceCloudAPIModel = <QueryModel, ResponseModel>(
  endpoint: string
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
    const res = await db.get(endpoint).apply();
    if (res.status === 200) {
      actions.onSuccess(res.data.result);
    } else {
      actions.onError(res);
    }
  }),
});

// and redux actions for the generic api model
export const apiPOSTModel = <QueryModel, ResponseModel>(
  url: string
): ApiModel<QueryModel, ResponseModel> => ({
  loading: false,
  success: false,
  data: null,
  errorData: null,
  onError: action((state, payload: Errors) => {
    state.loading = false;
    state.errorData = payload;
  }),
  onSuccess: action((state, payload: ResponseData<ResponseModel>) => {
    state.loading = false;
    state.success = true;
    state.data = payload;
  }),
  onRequest: action(state => {
    state.loading = true;
    state.success = false;
  }),
  fetch: thunk(async (actions, query: RequestValues<QueryModel>) => {
    actions.onRequest();

    const formData = new FormData();
    const qValues = query.values as QueryModel;
    Object.keys(qValues).forEach(key => {
      formData.append(key, qValues[key]);
    });

    axios.post(url, formData).then(
      (resp: AxiosResponse) => {
        actions.onSuccess({ data: resp.data });
      },
      (error: any) => {
        actions.onError(error.response);
      }
    );
  }),
});
