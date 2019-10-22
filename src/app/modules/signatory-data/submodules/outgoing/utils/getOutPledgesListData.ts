import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutPledgesListData = (rawData, additionalData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const outPledgeValue1 = get(rawData, 'outPledgeBar.count', 0);
  const outPledgeValue4 = get(additionalData, 'outPledgeTransactions.count', 0);
  const outPledgeValue2 = get(additionalData, 'outPledge_2.count', 0);
  const outPledgeValue3 = get(additionalData, 'outPledge_3.count', 0);
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
        label: 'Total no. of outgoing pledge transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Pledges',
          'Total no. of outgoing pledge transactions'
        ),
        values: [
          {
            ptc: percentage(outPledgeValue4, allHumTransactCount),
            qtc: outPledgeValue4,
          },
        ],
      },
      {
        label: 'Funding recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Pledges',
          'Funding recipient details'
        ),
        values: [
          {
            ptc: percentage(outPledgeValue2, allHumTransactCount),
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
            ptc: percentage(outPledgeValue3, allHumTransactCount),
            qtc: outPledgeValue3,
          },
        ],
      },
    ],
  };
};
