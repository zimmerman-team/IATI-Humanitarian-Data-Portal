/* utils */
import get from 'lodash/get';
import find from 'lodash/find';

const returnFlagValue = value => {
  switch (value) {
    case 'na':
      return 'NA';
    case '0':
      return 'False';
    case '1':
      return 'True';
    case false:
      return 'False';
    case true:
      return 'True';
    default:
      return 'NA';
  }
};

export const formatTableSignatories = (signatories, gbsignatoriesFromCMS) => {
  const formatSigs: any = [];

  signatories.forEach((sig: any) => {
    const fSig = find(gbsignatoriesFromCMS, ['IATIOrgRef', sig.val]);
    const orgType = get(fSig, 'orgType', '');
    formatSigs.push([
      { name: get(fSig, 'pubName', ''), code: encodeURIComponent(sig.val) },
      get(fSig, 'name', ''),
      orgType,
      sig.latest_iati_version,
      returnFlagValue(sig.pubHumData.count > 0),
      returnFlagValue(sig.pubHumData.v202 && sig.pubHumData.v202.count > 0),
      returnFlagValue(sig.pubHumData.v203 && sig.pubHumData.v203.count > 0),
      orgType === 'Government'
        ? returnFlagValue(sig.traec.count > 0 ? true : null)
        : returnFlagValue(sig.traec.count > 0),
    ]);
  });
  return formatSigs;
};
