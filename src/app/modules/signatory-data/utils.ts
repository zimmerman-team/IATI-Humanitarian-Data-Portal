/* utils */
import get from 'lodash/get';
import find from 'lodash/find';

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
    const fSig = find(gbsignatoriesFromCMS, ['IATIOrgRef', sig.val]);
    formatSigs.push([
      { name: get(fSig, 'pubName', ''), code: encodeURIComponent(sig.val) },
      get(fSig, 'name', ''),
      get(fSig, 'orgType', ''),
      sig.latest_iati_version,
      returnFlagValue(sig.pubHumData.count > 0),
      returnFlagValue(sig.pubHumData.v202 && sig.pubHumData.v202.count > 0),
      returnFlagValue(sig.pubHumData.v203 && sig.pubHumData.v203.count > 0),
      returnFlagValue(sig.traec.count > 0),
    ]);
  });
  return formatSigs;
};
