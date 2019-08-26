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
    axios
      .get(url, {
        params: query.values,
      })
      .then(
        (resp: AxiosResponse) => {
          actions.onSuccess({ data: resp.data });
        },
        (error: any) => {
          actions.onError(error.response);
        }
      );
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
    const res = await db.get('signatories').apply();
    if (res.status === 200) {
      actions.onSuccess(res.data.result);
    } else {
      actions.onError(res);
    }
  }),
});
