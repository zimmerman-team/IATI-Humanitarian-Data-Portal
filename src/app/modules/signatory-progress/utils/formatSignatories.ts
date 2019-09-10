/* interfaces */
import { FacetsModel } from '../store/interface';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
import { dateRanges } from '../const';
import { SigItemModel } from './intefaces';

/* utils */
import { getRealSigCount } from './general';

// basically this function will take in
// the response containing organisation ref
// lists and it will create counts of
// actual signatories from the org_ref list
// per date period. Signatory !== Reporting Organisation
export function formatSignatories(
  publisherData: FacetsModel | null,
  gbsignatories: SingleDefGBSignatory[]
): SigItemModel {
  const sigCounts: SigItemModel = {
    'orgs_[1900-01-01_TO_2017-06-30]': {
      sigCount: null,
    },
    'orgs_[1900-01-01_TO_2018-12-31]': {
      sigCount: null,
    },
    'orgs_[1900-01-01_TO_2019-05-31]': {
      sigCount: null,
    },
    'orgs_[1900-01-01_TO_NOW]': {
      sigCount: null,
    },
  };

  if (publisherData && gbsignatories.length > 0) {
    dateRanges.forEach(range => {
      const rangeKey = `orgs_[${range.value}]`;
      sigCounts[rangeKey].sigCount = getRealSigCount(
        gbsignatories,
        publisherData[rangeKey].org_refs.buckets
      );
    });
  }

  return sigCounts;
}
