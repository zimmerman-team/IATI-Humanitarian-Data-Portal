import get from 'lodash/get';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export const getBarChartData = (rawData): HorizontalBarChartCardModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outPledgeValue = get(rawData, 'outPledgeBar.count', 0);
  const outCommitmentValue = get(rawData, 'outCommitmentBar.count', 0);
  const disbursementsValue = get(rawData, 'outDisbursementBar.count', 0);
  const expenditureValue = get(rawData, 'outExpenditureBar.count', 0);
  return {
    title: 'Humanitarian pledges transaction types',
    data: {
      values: [
        {
          name: 'Expenditure',
          value: expenditureValue,
          percentage: Math.round((expenditureValue * 100) / allHumActCount),
        },
        {
          name: 'Disbursements',
          value: disbursementsValue,
          percentage: Math.round((disbursementsValue * 100) / allHumActCount),
        },
        {
          name: 'Out. Commitments',
          value: outCommitmentValue,
          percentage: Math.round((outCommitmentValue * 100) / allHumActCount),
        },
        {
          name: 'Out. Pledges',
          value: outPledgeValue,
          percentage: Math.round((outPledgeValue * 100) / allHumActCount),
        },
      ],
    },
  };
};
