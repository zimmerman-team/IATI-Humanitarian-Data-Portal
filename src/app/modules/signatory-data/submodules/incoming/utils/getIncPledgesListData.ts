import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncPledgesListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incPledgeValue1 = get(rawData, 'incPledgeBar.count', 0);
  const incPledgeValue2 = get(rawData, 'incPledge_2.count', 0);
  const incPledgeValue3 = get(rawData, 'incPledge_3.count', 0);
  return {
    title: 'Incoming pledges',
    elName: 'incPledge',
    items: [
      {
        label: 'Total no. of activities with Incoming Pledges',
        tooltip: 'Total no. of activities with Incoming Pledges',
        values: [
          {
            ptc: percentage(incPledgeValue1, allHumActCount),
            qtc: incPledgeValue1,
          },
        ],
      },
      {
        label: 'With funding provider details specified',
        tooltip: 'With funding provider details specified',
        values: [
          {
            ptc: percentage(incPledgeValue2, allHumActCount),
            qtc: incPledgeValue2,
          },
        ],
      },
      {
        label: 'With funding organisation type provided',
        tooltip: 'With funding organisation type provided',
        values: [
          {
            ptc: percentage(incPledgeValue3, allHumActCount),
            qtc: incPledgeValue3,
          },
        ],
      },
    ],
  };
};
