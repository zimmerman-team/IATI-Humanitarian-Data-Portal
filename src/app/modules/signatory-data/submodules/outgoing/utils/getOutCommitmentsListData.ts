import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutCommitmentsListData = (
  rawData,
  additionalData,
  tooltipsData
): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const outCommitmentValue1 = get(rawData, 'outCommitmentBar.count', 0);
  const outCommitmentValue4 = get(
    additionalData,
    'outCommitmentTransactions.count',
    0
  );
  const outCommitmentValue2 = get(additionalData, 'outCommitment_2.count', 0);
  const outCommitmentValue3 = get(additionalData, 'outCommitment_3.count', 0);
  return {
    title: 'Outgoing commitments',
    elName: 'outComms',
    items: [
      {
        label: 'For humanitarian activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Commitments',
          'For humanitarian activities'
        ),
        values: [
          {
            ptc: percentage(outCommitmentValue1, allHumActCount),
            qtc: outCommitmentValue1,
          },
        ],
      },
      {
        label: 'Total no. of outgoing commitment transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Commitments',
          'Total no. of outgoing commitment transactions'
        ),
        values: [
          {
            ptc: percentage(outCommitmentValue4, allHumTransactCount),
            qtc: outCommitmentValue4,
          },
        ],
      },
      {
        label: 'Funding recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Commitments',
          'Funding recipient details'
        ),
        values: [
          {
            ptc: percentage(outCommitmentValue2, allHumTransactCount),
            qtc: outCommitmentValue2,
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
            ptc: percentage(outCommitmentValue3, allHumTransactCount),
            qtc: outCommitmentValue3,
          },
        ],
      },
    ],
  };
};
