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

export const formatTableSignatories = (
  signatories,
  gbsignatoriesFromCMS,
  organisationNarrative
) => {
  const formatSigs: any = [];
  if (gbsignatoriesFromCMS && gbsignatoriesFromCMS.length > 0) {
    gbsignatoriesFromCMS.forEach((cmsSig: any) => {
      const narrative = find(organisationNarrative, [
        'groupValue',
        cmsSig.IATIOrgRef,
      ]);
      const fSig = find(signatories, ['val', cmsSig.IATIOrgRef]);
      const orgType = get(cmsSig, 'orgType', '');
      let sigOrgName = get(
        narrative,
        'doclist.docs[0].reporting_org_narrative[0]',
        ''
      );

      sigOrgName = sigOrgName || cmsSig.pubName;

      formatSigs.push([
        //{name: get(fSig,'pubName',''), code: encodeURIComponent(sig.val)},
        {
          name: sigOrgName,
          code: encodeURIComponent(cmsSig.IATIOrgRef),
        },
        get(cmsSig, 'name', ''),
        orgType,
        fSig && fSig.latest_iati_version,
        returnFlagValue(fSig ? fSig.pubHumData.count > 0 : '0'),
        returnFlagValue(
          fSig ? fSig.pubHumData.v202 && fSig.pubHumData.v202.count > 0 : '0'
        ),
        returnFlagValue(
          fSig ? fSig.pubHumData.v203 && fSig.pubHumData.v203.count > 0 : '0'
        ),
        orgType === 'Government'
          ? returnFlagValue(fSig ? (fSig.traec.count > 0 ? true : null) : '0')
          : returnFlagValue(fSig ? fSig.traec.count > 0 : '0'),
      ]);
    });
  }
  return formatSigs;
};
