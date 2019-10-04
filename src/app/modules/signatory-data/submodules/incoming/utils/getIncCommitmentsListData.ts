import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncCommitmentsListData = (rawData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incCommitmentValue1 = get(rawData, 'incCommitmentBar.count', 0);
  const incCommitmentValue2 = get(rawData, 'incCommitment_2.count', 0);
  const incCommitmentValue3 = get(rawData, 'incCommitment_3.count', 0);
  return {
    title: 'Incoming commitments',
    elName: 'incComms',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: 'Total no. of activities',
        values: [
          {
            ptc: percentage(incCommitmentValue1, allHumActCount),
            qtc: incCommitmentValue1,
          },
        ],
      },
      {
        label: 'Funding provider details',
        tooltip: 'Funding provider details',
        values: [
          {
            ptc: percentage(incCommitmentValue2, allHumActCount),
            qtc: incCommitmentValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: 'Organisation type provided',
        values: [
          {
            ptc: percentage(incCommitmentValue3, allHumActCount),
            qtc: incCommitmentValue3,
          },
        ],
      },
    ],
  };
};
