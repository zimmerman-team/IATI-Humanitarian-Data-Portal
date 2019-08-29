import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncFundsListData = (rawData1, rawData2): ListModel => {
  const allHumActCount = get(rawData1, 'count', 0);
  const incFundsValue1 = get(rawData1, 'incFundsBar.count', 0);
  const incFundsValue2 = get(rawData1, 'incFunds_2.count', 0);
  const incFundsValue3 = get(rawData1, 'incFunds_3.count', 0);
  const incFundsValue4 = get(rawData2, 'incFunds_4.count', 0);
  return {
    title: 'Incoming funds',
    items: [
      {
        label: 'Total no. of activities with Incoming Funds',
        tooltip: 'Total no. of activities with Incoming Funds',
        values: [
          {
            ptc: percentage(incFundsValue1, allHumActCount),
            qtc: incFundsValue1,
          },
        ],
      },
      {
        label: 'With funding provider details specified',
        tooltip: 'With funding provider details specified',
        values: [
          {
            ptc: percentage(incFundsValue2, allHumActCount),
            qtc: incFundsValue2,
          },
        ],
      },
      {
        label: 'With funding organisation type provided',
        tooltip: 'With funding organisation type provided',
        values: [
          {
            ptc: percentage(incFundsValue3, allHumActCount),
            qtc: incFundsValue3,
          },
        ],
      },
      {
        label: 'With source traceability information',
        tooltip: 'With source traceability information',
        values: [
          {
            ptc: percentage(incFundsValue4, allHumActCount),
            qtc: incFundsValue4,
          },
        ],
      },
    ],
  };
};
