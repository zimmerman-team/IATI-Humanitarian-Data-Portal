import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncFundsListData = (
  rawData1,
  rawData2,
  additionalData,
  tooltipsData
): ListModel => {
  const allHumActCount = get(rawData1, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const incFundsValue1 = get(rawData1, 'incFundsBar.count', 0);
  const incFundsValue5 = get(additionalData, 'incFundTransactions.count', 0);
  const incFundsValue2 = get(additionalData, 'incFunds_2.count', 0);
  const incFundsValue3 = get(additionalData, 'incFunds_3.count', 0);
  const incFundsValue4 = get(additionalData, 'incFunds_4.count', 0);
  return {
    title: 'Incoming funds',
    elName: 'incFunds',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Funds',
          'Total no. of activities'
        ),
        values: [
          {
            ptc: percentage(incFundsValue1, allHumActCount),
            qtc: incFundsValue1,
          },
        ],
      },
      {
        label: 'Total no. of incoming fund transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Funds',
          'Total no. of incoming fund transactions'
        ),
        values: [
          {
            ptc: percentage(incFundsValue5, allHumTransactCount),
            qtc: incFundsValue5,
          },
        ],
      },
      {
        label: 'Funding provider details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Funds',
          'Funding provider details'
        ),
        values: [
          {
            ptc: percentage(incFundsValue2, allHumTransactCount),
            qtc: incFundsValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Funds',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(incFundsValue3, allHumTransactCount),
            qtc: incFundsValue3,
          },
        ],
      },
      {
        label: 'Source traceability information',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Funds',
          'Source traceability information'
        ),
        values: [
          {
            ptc: percentage(incFundsValue4, allHumTransactCount),
            qtc: incFundsValue4,
          },
        ],
      },
    ],
  };
};
