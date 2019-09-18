/* interfaces */
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
import { OrgRefItem } from '../store/interface';

/* utils */
import find from 'lodash/find';
import { dateRanges } from '../const';

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

export function getAllSigCount(gbsignatories: SingleDefGBSignatory[]): number {
  const realSigs: string[] = [];
  gbsignatories.forEach(sigOrg => {
    if (realSigs.indexOf(sigOrg.name) === -1) {
      realSigs.push(sigOrg.name);
    }
  });
  return realSigs.length;
}

export function getIatiSigCount(gbsignatories: SingleDefGBSignatory[]): number {
  const iatiSigs: string[] = [];
  gbsignatories.forEach(sigOrg => {
    if (
      iatiSigs.indexOf(sigOrg.name) === -1 &&
      sigOrg.IATIOrgRef &&
      sigOrg.IATIOrgRef.length > 0
    ) {
      iatiSigs.push(sigOrg.name);
    }
  });
  return iatiSigs.length;
}

interface SpecKeyModel {
  count: number | null;
  percentage: number | null;
}

// helper function to get the specific keys values from dateRanges
// according to the passed in items key
export function getSpecFixedValues(rangeItem, key: string): SpecKeyModel {
  switch (key) {
    case 'hum':
      return {
        count: rangeItem.humCount,
        percentage: rangeItem.humPerc,
      };
    case '202':
      return {
        count: rangeItem.count202,
        percentage: rangeItem.perc202,
      };
    case 'trac':
      return {
        count: rangeItem.tracCount,
        percentage: rangeItem.tracPerc,
      };
    case '203':
      return {
        count: rangeItem.count203,
        percentage: rangeItem.perc203,
      };
  }

  return {
    count: null,
    percentage: null,
  };
}
