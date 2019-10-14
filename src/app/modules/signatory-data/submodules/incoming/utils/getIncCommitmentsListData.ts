import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncCommitmentsListData = (rawData, additionalData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const incCommitmentValue1 = get(rawData, 'incCommitmentBar.count', 0);
  const incCommitmentValue4 = get(additionalData, 'incCommitmentTransactions.count', 0);
  const incCommitmentValue2 = get(additionalData, 'incCommitment_2.count', 0);
  const incCommitmentValue3 = get(additionalData, 'incCommitment_3.count', 0);
  return {
    title: 'Incoming commitments',
    elName: 'incComms',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Commitments',
          'Total no. of activities'
        ),
        values: [
          {
            ptc: percentage(incCommitmentValue1, allHumActCount),
            qtc: incCommitmentValue1,
          },
        ],
      },
      {
        label: 'Total no. of incoming commitment transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Commitments',
          'Total no. of incoming commitment transactions'
        ),
        values: [
          {
            ptc: percentage(incCommitmentValue4, allHumTransactCount),
            qtc: incCommitmentValue4,
          },
        ],
      },
      {
        label: 'Funding provider details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Commitments',
          'Funding provider details'
        ),
        values: [
          {
            ptc: percentage(incCommitmentValue2, allHumTransactCount),
            qtc: incCommitmentValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Commitments',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(incCommitmentValue3, allHumTransactCount),
            qtc: incCommitmentValue3,
          },
        ],
      },
    ],
  };
};
