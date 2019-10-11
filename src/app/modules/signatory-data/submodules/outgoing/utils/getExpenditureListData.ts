import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getExpenditureListData = (rawData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outExpenditure1 = get(rawData, 'outExpenditureBar.count', 0);
  const outExpenditure3 = get(rawData, 'expenditure_3.count', 0);
  const outExpenditure4 = get(rawData, 'expenditure_4.count', 0);
  return {
    title: 'Expenditure',
    elName: 'exp',
    items: [
      {
        label: 'Total no. of Activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Expenditure',
          'Total no. of Activities'
        ),
        values: [
          {
            ptc: percentage(outExpenditure1, allHumActCount),
            qtc: outExpenditure1,
          },
        ],
      },
      {
        label: 'Total no. of expenditure transactions (!)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Expenditure',
          'Total no. of expenditure transactions'
        ),
        values: [
          {
            ptc: percentage(outExpenditure1, allHumActCount),
            qtc: outExpenditure1,
          },
        ],
      },
      {
        label: 'Funding Recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Expenditure',
          'Funding Recipient details'
        ),
        values: [
          {
            ptc: percentage(outExpenditure3, allHumActCount),
            qtc: outExpenditure3,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Expenditure',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(outExpenditure4, allHumActCount),
            qtc: outExpenditure4,
          },
        ],
      },
    ],
  };
};
