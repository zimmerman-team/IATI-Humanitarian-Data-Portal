import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutPledgesListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outPledgeValue1 = get(rawData, 'outPledgeBar.count', 0);
  const outPledgeValue2 = get(rawData, 'outPledge_2.count', 0);
  const outPledgeValue3 = get(rawData, 'outPledge_3.count', 0);
  return {
    title: 'Outgoing pledges',
    elName: 'outPledges',
    items: [
      {
        label: 'For humanitarian activities',
        tooltip: 'For humanitarian activities',
        values: [
          {
            ptc: percentage(outPledgeValue1, allHumActCount),
            qtc: outPledgeValue1,
          },
        ],
      },
      {
        label: 'Has funding recipient details',
        tooltip: 'Has funding recipient details',
        values: [
          {
            ptc: percentage(outPledgeValue2, allHumActCount),
            qtc: outPledgeValue2,
          },
        ],
      },
      {
        label: 'With organisation type provided',
        tooltip: 'With organisation type provided',
        values: [
          {
            ptc: percentage(outPledgeValue3, allHumActCount),
            qtc: outPledgeValue3,
          },
        ],
      },
    ],
  };
};
