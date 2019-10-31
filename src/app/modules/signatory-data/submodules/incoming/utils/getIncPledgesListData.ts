import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncPledgesListData = (
  rawData,
  additionalData,
  tooltipsData
): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const incPledgeValue1 = get(rawData, 'incPledgeBar.count', 0);
  const incPledgeValue4 = get(additionalData, 'incPledgeTransactions.count', 0);
  const incPledgeValue2 = get(additionalData, 'incPledge_2.count', 0);
  const incPledgeValue3 = get(additionalData, 'incPledge_3.count', 0);
  return {
    title: 'Incoming pledges',
    elName: 'incPledge',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Total no. of activities'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue1, allHumActCount),
            qtc: incPledgeValue1,
          },
        ],
      },
      {
        label: 'Total no. of incoming pledge transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Total no. of incoming pledge transactions'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue4, allHumTransactCount),
            qtc: incPledgeValue4,
          },
        ],
      },
      {
        label: 'Funding provider details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Funding provider details'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue2, allHumTransactCount),
            qtc: incPledgeValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue3, allHumTransactCount),
            qtc: incPledgeValue3,
          },
        ],
      },
    ],
  };
};
