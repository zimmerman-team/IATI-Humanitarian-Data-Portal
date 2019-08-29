import get from 'lodash/get';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncFundsListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incFundsValue1 = get(rawData, 'incFundsBar.count', 0);
  const incFundsValue2 = get(rawData, 'incFunds_2.count', 0);
  const incFundsValue3 = get(rawData, 'incFunds_3.count', 0);
  // const incFundsValue4 = get(rawData, 'incFunds_4.count', 0);
  return {
    title: 'Incoming funds',
    items: [
      {
        label: 'Total no. of activities with Incoming Funds',
        tooltip: 'Total no. of activities with Incoming Funds',
        values: [
          {
            ptc: `${Math.round((incFundsValue1 * 100) / allHumActCount)}%`,
            qtc: incFundsValue1,
          },
        ],
      },
      {
        label: 'With funding provider details specified',
        tooltip: 'With funding provider details specified',
        values: [
          {
            ptc: `${Math.round((incFundsValue2 * 100) / allHumActCount)}%`,
            qtc: incFundsValue2,
          },
        ],
      },
      {
        label: 'With funding organisation type provided',
        tooltip: 'With funding organisation type provided',
        values: [
          {
            ptc: `${Math.round((incFundsValue3 * 100) / allHumActCount)}%`,
            qtc: incFundsValue3,
          },
        ],
      },
      {
        label: 'With source traceability information',
        tooltip: 'With source traceability information',
        values: [
          {
            // ptc: `${Math.round((incFundsValue4 * 100) / allHumActCount)}%`,
            // qtc: incFundsValue4,
            ptc: 'TBD',
            qtc: 'TBD',
          },
        ],
      },
    ],
  };
};