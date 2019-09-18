/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

const returnFlagValue = value => {
  switch (value) {
    case 'na':
      return 'na';
    case '0':
      return 'false';
    case '1':
      return 'true';
    case false:
      return 'false';
    case true:
      return 'true';
    default:
      return 'na';
  }
};

export const formatTableSignatories = (signatories, gbsignatoriesFromCMS) => {
  const formatSigs: any = [];
  signatories.forEach((sig: any) => {
    const versions = sig.pivot[0].pivot;
    const fSig = find(
      gbsignatoriesFromCMS,
      gbsig => gbsig.IATIOrgRef === sig.value
    );
    formatSigs.push([
      { name: get(fSig, 'pubName', ''), code: encodeURIComponent(sig.value) },
      get(fSig, 'name', ''),
      get(fSig, 'orgType', ''),
      versions[0].value,
      returnFlagValue(
        findIndex(
          versions,
          (v: any) =>
            findIndex(
              v.pivot,
              (humanitarian: any) => humanitarian.value === '1'
            ) > -1
        ) > -1
      ),
      returnFlagValue(
        findIndex(
          versions,
          (v: any) =>
            v.value === '2.02' && get(v, 'pivot[0].value', '0') === '1'
        ) > -1
      ),
      returnFlagValue(
        findIndex(
          versions,
          (v: any) =>
            v.value === '2.03' && get(v, 'pivot[0].value', '0') === '1'
        ) > -1
      ),
      returnFlagValue(
        findIndex(
          versions,
          (v: any) =>
            findIndex(
              v.pivot,
              (humanitarian: any) =>
                findIndex(
                  humanitarian.pivot,
                  (transactionType: any) =>
                    transactionType.value === '1' &&
                    get(transactionType, 'pivot', []).length > 0
                ) > -1
            ) > -1
        ) > -1
      ),
    ]);
  });
  return formatSigs;
};
