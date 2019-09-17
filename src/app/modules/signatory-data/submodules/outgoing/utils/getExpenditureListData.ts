import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getExpenditureListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outExpenditure1 = get(rawData, 'outExpenditureBar.count', 0);
  const outExpenditure3 = get(rawData, 'outExpenditure_3.count', 0);
  const outExpenditure4 = get(rawData, 'outExpenditure_4.count', 0);
  return {
    title: 'Expenditure',
    elName: 'incComms',
    items: [
      {
        label: 'Total',
        tooltip: 'Total',
        values: [
          {
            ptc: percentage(outExpenditure1, allHumActCount),
            qtc: outExpenditure1,
          },
        ],
      },
      {
        label: 'For humanitarian activities',
        tooltip: 'For humanitarian activities',
        values: [
          {
            ptc: percentage(outExpenditure1, allHumActCount),
            qtc: outExpenditure1,
          },
        ],
      },
      {
        label: 'Has funding recipient details',
        tooltip: 'Has funding recipient details',
        values: [
          {
            ptc: percentage(outExpenditure3, allHumActCount),
            qtc: outExpenditure3,
          },
        ],
      },
      {
        label: 'With organisation type provided',
        tooltip: 'With organisation type provided',
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
