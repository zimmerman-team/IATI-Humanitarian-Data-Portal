/* core */
import get from 'lodash/get';
import find from 'lodash/find';

/* data & model */
import { mockData } from 'app/modules/landing/common/StatContainer/mock';
import { StatModel } from 'app/modules/landing/common/StatContainer/models';

export const getStatsFromApiResponses = (
  humanitarian,
  gbsignatories
): StatModel[] => {
  const stats = [...mockData.items];

  const realSignatories: string[] = [];
  const sigPubToIati: string[] = [];
  const humPubSignatories: string[] = [];

  // so these are the granbargain signatory ORGANISATIONS
  // publishing humanitarian data to IATI
  const humSigOrgs = get(
    humanitarian,
    'data.facet_counts.facet_pivot.reporting_org_ref',
    []
  );

  // so here we get the counts for ACTUAL SIGNATORIES
  // not the organisation counts
  if (gbsignatories && gbsignatories.data) {
    gbsignatories.data.forEach(sigOrg => {
      if (realSignatories.indexOf(sigOrg.name) === -1) {
        realSignatories.push(sigOrg.name);
        // and if the actual signatory also has a IATIOrgRef
        // we also push this signatory to the signatories publishing
        // to IATI array
        if (sigOrg.IATIOrgRef && sigOrg.IATIOrgRef.length > 0) {
          sigPubToIati.push(sigOrg.name);
        }
      }

      // here if we don't find the
      // GB signatory name in signatories
      // publishing humanitarian data array
      // AND we do find the ORGANISATIONS
      // reference in humanitarian organisation array
      // we push in the GB SIGNATORIES name
      // into signatory publishing humanitarian data array
      if (
        humPubSignatories.indexOf(sigOrg.name) === -1 &&
        find(humSigOrgs, { value: sigOrg.IATIOrgRef.toLowerCase() })
      ) {
        humPubSignatories.push(sigOrg.name);
      }
    });
  }

  stats[0].value = realSignatories.length;
  stats[1].value = sigPubToIati.length;
  stats[2].value = humPubSignatories.length;

  return stats;
};
