import get from 'lodash/get';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export const getBarChartData = (rawData): HorizontalBarChartCardModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incPledgeValue = get(rawData, 'incPledgeBar.count', 0);
  const incCommitmentValue = get(rawData, 'incCommitmentBar.count', 0);
  const incFundsValue = get(rawData, 'incFundsBar.count', 0);
  return {
    title: 'Incoming humanitarian transaction type breakdown',
    data: {
      values: [
        {
          name: 'Incoming funds',
          value: incFundsValue,
          percentage: Math.round((incFundsValue * 100) / allHumActCount),
        },
        {
          name: 'Incoming commitment',
          value: incCommitmentValue,
          percentage: Math.round((incCommitmentValue * 100) / allHumActCount),
        },
        {
          name: 'Incoming pledge',
          value: incPledgeValue,
          percentage: Math.round((incPledgeValue * 100) / allHumActCount),
        },
      ],
    },
  };
};
