import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutDisbursementsListData = (
  rawData1,
  additionalData,
  tooltipsData
): ListModel => {
  const allHumActCount = get(rawData1, 'count', 0);
  const allHumTransactCount = get(additionalData, 'count', 0);
  const outDisbursement1 = get(rawData1, 'outDisbursementBar.count', 0);
  const outDisbursement5 = get(additionalData, 'disbTransactions.count', 0);
  const outDisbursement2 = get(additionalData, 'outDisbursement_2.count', 0);
  const outDisbursement3 = get(additionalData, 'outDisbursement_3.count', 0);
  return {
    title: 'Disbursements',
    elName: 'outDisbs',
    items: [
      {
        label: 'Total no. of Activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Total no. of Activities'
        ),
        values: [
          {
            ptc: percentage(outDisbursement1, allHumActCount),
            qtc: outDisbursement1,
          },
        ],
      },
      {
        label: 'Total no. of disbursement transactions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Total no. of disbursement transactions'
        ),
        values: [
          {
            ptc: percentage(outDisbursement5, allHumTransactCount),
            qtc: outDisbursement5,
          },
        ],
      },
      {
        label: 'Funding Recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Funding Recipient details'
        ),
        values: [
          {
            ptc: percentage(outDisbursement2, allHumTransactCount),
            qtc: outDisbursement2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(outDisbursement3, allHumTransactCount),
            qtc: outDisbursement3,
          },
        ],
      },
    ],
  };
};
