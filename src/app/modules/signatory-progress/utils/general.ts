/* interfaces */
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
import { OrgRefItem } from '../store/interface';

/* utils */
import find from 'lodash/find';

// util function to check if data exists
// and can be processed/formatted
export function checkIfValid(item, publisherData, rangeKey): boolean {
  return (
    item.specPub &&
    item.specPub[rangeKey] &&
    publisherData[rangeKey] &&
    item.specPub[rangeKey].org_refs &&
    publisherData[rangeKey].sigCount !== null
  );
}

// a helper function which takes in
// all of the signatory organisations
// from the cms
// and the organisation refs returned
// from datastore
// and returns the amount
// of actual signatories in the datastore
// results
export function getRealSigCount(
  sigData: SingleDefGBSignatory[],
  dsData: OrgRefItem[]
): number {
  const realSignatories: string[] = [];
  dsData.forEach(orgRef => {
    const signatory = find(sigData, ['IATIOrgRef', orgRef.val]);
    if (signatory && realSignatories.indexOf(signatory.name) === -1) {
      realSignatories.push(signatory.name);
    }
  });

  return realSignatories.length;
}
