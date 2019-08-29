import get from 'lodash/get';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export const getBarChartData = (rawData): HorizontalBarChartCardModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incPledgeValue = get(rawData, 'incPledgeBar.count', 0);
  const incCommitmentValue = get(rawData, 'incCommitmentBar.count', 0);
  const incFundsValue = get(rawData, 'incFundsBar.count', 0);
  return {
    title: 'Humanitarian transaction type breakdown',
    data: {
      values: [
        {
          name: 'Inc. Funds',
          value: incFundsValue,
          percentage: Math.round((incFundsValue * 100) / allHumActCount),
        },
        {
          name: 'Inc. Commitment',
          value: incCommitmentValue,
          percentage: Math.round((incCommitmentValue * 100) / allHumActCount),
        },
        {
          name: 'Inc. Pledge',
          value: incPledgeValue,
          percentage: Math.round((incPledgeValue * 100) / allHumActCount),
        },
      ],
    },
  };
};
