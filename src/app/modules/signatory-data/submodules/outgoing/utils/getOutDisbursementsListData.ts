import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutDisbursementsListData = (rawData1, rawData2): ListModel => {
  const allHumActCount = get(rawData1, 'count', 0);
  const outDisbursement1 = get(rawData1, 'outDisbursementBar.count', 0);
  const outDisbursement2 = get(rawData1, 'outDisbursement_2.count', 0);
  const outDisbursement3 = get(rawData1, 'outDisbursement_3.count', 0);
  const outDisbursement4 = get(rawData2, 'outDisbursement_4.count', 0);
  return {
    title: 'Disbursements',
    elName: 'outDisbs',
    items: [
      {
        label: 'For humanitarian activities',
        tooltip: 'For humanitarian activities',
        values: [
          {
            ptc: percentage(outDisbursement1, allHumActCount),
            qtc: outDisbursement1,
          },
        ],
      },
      {
        label: 'Has funding recipient details',
        tooltip: 'Has funding recipient details',
        values: [
          {
            ptc: percentage(outDisbursement2, allHumActCount),
            qtc: outDisbursement2,
          },
        ],
      },
      {
        label: 'With organisation type provided',
        tooltip: 'With organisation type provided',
        values: [
          {
            ptc: percentage(outDisbursement3, allHumActCount),
            qtc: outDisbursement3,
          },
        ],
      },

      {
        label: 'With source traceability information',
        tooltip: 'With source traceability information',
        values: [
          {
            ptc: percentage(outDisbursement4, allHumActCount),
            qtc: outDisbursement4,
          },
        ],
      },
    ],
  };
};
