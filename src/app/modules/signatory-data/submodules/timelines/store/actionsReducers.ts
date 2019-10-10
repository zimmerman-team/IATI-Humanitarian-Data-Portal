import { apiModel, db } from 'app/state/api/actionsReducers';
import {
  FrequencyInterface,
  FrequencyQuery,
  TimelagInterface,
} from 'app/modules/signatory-data/submodules/timelines/store/interfaces';
import { endpoints } from 'app/__consts__/endpoints';
import { thunk } from 'easy-peasy';
import { RequestValues } from 'app/state/api/interfaces';
import { cond } from 'space-api';

export const timeLag: TimelagInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const frequency: FrequencyInterface = {
  ...apiModel(``),
  fetch: thunk(async (actions, query: RequestValues<FrequencyQuery>) => {
    actions.onRequest();
    const qValues = query.values;
    if (qValues) {
      const res = await db
        .get(qValues.tableName)
        .where(cond(qValues.qField, qValues.qOperator, qValues.qValue))
        .sort(qValues.sort)
        .apply();
      if (res.status === 200) {
        actions.onSuccess({
          data: res.data.result,
        });
      } else {
        actions.onError(res);
      }
    } else {
      actions.onError({
        status: 500,
        statusText: 'invalid query params',
        result: null,
      });
    }
  }),
};
