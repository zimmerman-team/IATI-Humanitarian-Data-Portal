import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutCommitmentsListData = (rawData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const outCommitmentValue1 = get(rawData, 'outCommitmentBar.count', 0);
  const outCommitmentValue2 = get(rawData, 'outCommitment_2.count', 0);
  const outCommitmentValue3 = get(rawData, 'outCommitment_3.count', 0);
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
        label: 'Funding Recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Commitments',
          'Funding Recipient details'
        ),
        values: [
          {
            ptc: percentage(outCommitmentValue2, allHumActCount),
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
            ptc: percentage(outCommitmentValue3, allHumActCount),
            qtc: outCommitmentValue3,
          },
        ],
      },
    ],
  };
};
