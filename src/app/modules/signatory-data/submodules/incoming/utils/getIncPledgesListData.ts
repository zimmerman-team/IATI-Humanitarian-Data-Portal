import get from 'lodash/get';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncPledgesListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incPledgeValue1 = get(rawData, 'incPledgeBar.count', 0);
  const incPledgeValue2 = get(rawData, 'incPledge_2.count', 0);
  const incPledgeValue3 = get(rawData, 'incPledge_3.count', 0);
  return {
    title: 'Incoming pledges',
    items: [
      {
        label: 'Total no. of activities with Incoming Pledges',
        tooltip: 'Total no. of activities with Incoming Pledges',
        values: [
          {
            ptc: `${Math.round((incPledgeValue1 * 100) / allHumActCount)}%`,
            qtc: incPledgeValue1,
          },
        ],
      },
      {
        label: 'With funding provider details specified',
        tooltip: 'With funding provider details specified',
        values: [
          {
            ptc: `${Math.round((incPledgeValue2 * 100) / allHumActCount)}%`,
            qtc: incPledgeValue2,
          },
        ],
      },
      {
        label: 'With funding organisation type provided',
        tooltip: 'With funding organisation type provided',
        values: [
          {
            ptc: `${Math.round((incPledgeValue3 * 100) / allHumActCount)}%`,
            qtc: incPledgeValue3,
          },
        ],
      },
    ],
  };
};
