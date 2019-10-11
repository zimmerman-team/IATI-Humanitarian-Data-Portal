import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutPledgesListData = (rawData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outPledgeValue1 = get(rawData, 'outPledgeBar.count', 0);
  const outPledgeValue2 = get(rawData, 'outPledge_2.count', 0);
  const outPledgeValue3 = get(rawData, 'outPledge_3.count', 0);
  return {
    title: 'Outgoing pledges',
    elName: 'outPledges',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Pledges',
          'Total no. of activities'
        ),
        values: [
          {
            ptc: percentage(outPledgeValue1, allHumActCount),
            qtc: outPledgeValue1,
          },
        ],
      },
      {
        label: 'Funding Recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Pledges',
          'Funding Recipient details'
        ),
        values: [
          {
            ptc: percentage(outPledgeValue2, allHumActCount),
            qtc: outPledgeValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Pledges',
          'Organisation type provided'
        ),
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
