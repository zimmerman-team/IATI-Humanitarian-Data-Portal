import React from 'react';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from '../state/store/hooks';

export function InitialDataLoad() {
  const gbsignatoriesData = useStoreState(
    reduxstate => reduxstate.gbsignatories
  );
  const getGBSignatories = useStoreActions(
    actions => actions.gbsignatories.fetch
  );
  const actStatus = useStoreState(reduxstate => reduxstate.codelists.actStatus);
  const getActStatus = useStoreActions(
    actions => actions.codelists.actStatus.fetch
  );
  const transTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.transTypeNames
  );
  const getTransTypes = useStoreActions(
    actions => actions.codelists.transTypeNames.fetch
  );
  const orgTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.orgTypeNames
  );
  const getOrgTypes = useStoreActions(
    actions => actions.codelists.orgTypeNames.fetch
  );
  const resultTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.resultTypeNames
  );
  const getResultTypes = useStoreActions(
    actions => actions.codelists.resultTypeNames.fetch
  );
  const orgRoleNames = useStoreState(
    reduxstate => reduxstate.codelists.orgRoleNames
  );
  const getOrgRoles = useStoreActions(
    actions => actions.codelists.orgRoleNames.fetch
  );
  const othIDTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.othIDTypeNames
  );
  const getOthIDsTypes = useStoreActions(
    actions => actions.codelists.othIDTypeNames.fetch
  );
  const contactTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.contactTypeNames
  );
  const getContactTypes = useStoreActions(
    actions => actions.codelists.contactTypeNames.fetch
  );
  const regVocNames = useStoreState(
    reduxstate => reduxstate.codelists.regVocNames
  );
  const getRegVocs = useStoreActions(
    actions => actions.codelists.regVocNames.fetch
  );
  const tagVocNames = useStoreState(
    reduxstate => reduxstate.codelists.tagVocNames
  );
  const getTagVocs = useStoreActions(
    actions => actions.codelists.tagVocNames.fetch
  );
  const budgItemVocNames = useStoreState(
    reduxstate => reduxstate.codelists.budgItemVocNames
  );
  const getBudgetItemVocs = useStoreActions(
    actions => actions.codelists.budgItemVocNames.fetch
  );
  const humScopTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.humScopTypeNames
  );
  const getHumScopTypes = useStoreActions(
    actions => actions.codelists.humScopTypeNames.fetch
  );
  const humVocNames = useStoreState(
    reduxstate => reduxstate.codelists.humVocNames
  );
  const getHumVocs = useStoreActions(
    actions => actions.codelists.humVocNames.fetch
  );
  const polMarkCodeNames = useStoreState(
    reduxstate => reduxstate.codelists.polMarkCodeNames
  );
  const getPolMarkCodes = useStoreActions(
    actions => actions.codelists.polMarkCodeNames.fetch
  );
  const policMSignificanceName = useStoreState(
    reduxstate => reduxstate.codelists.policMSignificanceName
  );
  const getPolMSgnificance = useStoreActions(
    actions => actions.codelists.policMSignificanceName.fetch
  );
  const polMarkerVocabNames = useStoreState(
    reduxstate => reduxstate.codelists.polMarkerVocabNames
  );
  const getPolMarkerVocs = useStoreActions(
    actions => actions.codelists.polMarkerVocabNames.fetch
  );
  const defAidTypeVocNames = useStoreState(
    reduxstate => reduxstate.codelists.defAidTypeVocNames
  );
  const getAidTypeVocs = useStoreActions(
    actions => actions.codelists.defAidTypeVocNames.fetch
  );
  const budgTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.budgTypeNames
  );
  const getBudgetTypes = useStoreActions(
    actions => actions.codelists.budgTypeNames.fetch
  );
  const budgStatusNames = useStoreState(
    reduxstate => reduxstate.codelists.budgStatusNames
  );
  const getBudgetStats = useStoreActions(
    actions => actions.codelists.budgStatusNames.fetch
  );
  const actScopeNames = useStoreState(
    reduxstate => reduxstate.codelists.actScopeNames
  );
  const getActScopes = useStoreActions(
    actions => actions.codelists.actScopeNames.fetch
  );
  const colabTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.colabTypeNames
  );
  const getColabTypes = useStoreActions(
    actions => actions.codelists.colabTypeNames.fetch
  );
  const defFlowTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.defFlowTypeNames
  );
  const getFlowTypes = useStoreActions(
    actions => actions.codelists.defFlowTypeNames.fetch
  );
  const defTiedStatusName = useStoreState(
    reduxstate => reduxstate.codelists.defTiedStatusName
  );
  const getTiedStats = useStoreActions(
    actions => actions.codelists.defTiedStatusName.fetch
  );
  const measCodeName = useStoreState(
    reduxstate => reduxstate.codelists.measCodeName
  );
  const getMeasCodes = useStoreActions(
    actions => actions.codelists.measCodeName.fetch
  );
  const indVocCodeNames = useStoreState(
    reduxstate => reduxstate.codelists.indVocCodeNames
  );
  const getIndVocCodes = useStoreActions(
    actions => actions.codelists.indVocCodeNames.fetch
  );
  const locReachNames = useStoreState(
    reduxstate => reduxstate.codelists.locReachNames
  );
  const getLocReaches = useStoreActions(
    actions => actions.codelists.locReachNames.fetch
  );
  const locVocNames = useStoreState(
    reduxstate => reduxstate.codelists.locVocNames
  );
  const getLocVocs = useStoreActions(
    actions => actions.codelists.locVocNames.fetch
  );
  const locExNames = useStoreState(
    reduxstate => reduxstate.codelists.locExNames
  );
  const getLocExactnes = useStoreActions(
    actions => actions.codelists.locExNames.fetch
  );
  const locClassNames = useStoreState(
    reduxstate => reduxstate.codelists.locClassNames
  );
  const getLocClasses = useStoreActions(
    actions => actions.codelists.locClassNames.fetch
  );
  const relActTypes = useStoreState(
    reduxstate => reduxstate.codelists.relActTypes
  );
  const getRelActTypes = useStoreActions(
    actions => actions.codelists.relActTypes.fetch
  );
  const condCodeNames = useStoreState(
    reduxstate => reduxstate.codelists.condCodeNames
  );
  const getCondCodes = useStoreActions(
    actions => actions.codelists.condCodeNames.fetch
  );
  const sectorVocabs = useStoreState(
    reduxstate => reduxstate.codelists.sectorVocabs
  );
  const getSectorVocabs = useStoreActions(
    actions => actions.codelists.sectorVocabs.fetch
  );
  const sectors = useStoreState(
    reduxstate => reduxstate.codelists.sectors
  );
  const getSectors = useStoreActions(
    actions => actions.codelists.sectors.fetch
  );
  const countNames = useStoreState(
    reduxstate => reduxstate.codelists.countNames
  );
  const getCountNames = useStoreActions(
    actions => actions.codelists.countNames.fetch
  );
  // const tooltipsData = useStoreState(reduxstate => reduxstate.tooltips);
  const getTooltips = useStoreActions(actions => actions.tooltips.fetch);
  const getSignatoryProgress = useStoreActions(
    actions => actions.signatoryProgress.fetch
  );

  React.useEffect(() => {
    // if (!gbsignatoriesData.data) {
    getGBSignatories({});
    // }
    if (!actStatus.data) {
      getActStatus({});
    }
    if (!transTypeNames.data) {
      getTransTypes({});
    }
    if (!orgTypeNames.data) {
      getOrgTypes({});
    }
    if (!resultTypeNames.data) {
      getResultTypes({});
    }
    if (!orgRoleNames.data) {
      getOrgRoles({});
    }
    if (!othIDTypeNames.data) {
      getOthIDsTypes({});
    }
    if (!contactTypeNames.data) {
      getContactTypes({});
    }
    if (!regVocNames.data) {
      getRegVocs({});
    }
    if (!tagVocNames.data) {
      getTagVocs({});
    }
    if (!budgItemVocNames.data) {
      getBudgetItemVocs({});
    }
    if (!humScopTypeNames.data) {
      getHumScopTypes({});
    }
    if (!humVocNames.data) {
      getHumVocs({});
    }
    if (!polMarkCodeNames.data) {
      getPolMarkCodes({});
    }
    if (!policMSignificanceName.data) {
      getPolMSgnificance({});
    }
    if (!polMarkerVocabNames.data) {
      getPolMarkerVocs({});
    }
    if (!defAidTypeVocNames.data) {
      getAidTypeVocs({});
    }
    if (!budgTypeNames.data) {
      getBudgetTypes({});
    }
    if (!budgStatusNames.data) {
      getBudgetStats({});
    }
    if (!actScopeNames.data) {
      getActScopes({});
    }
    if (!colabTypeNames.data) {
      getColabTypes({});
    }
    if (!defFlowTypeNames.data) {
      getFlowTypes({});
    }
    if (!defTiedStatusName.data) {
      getTiedStats({});
    }
    if (!measCodeName.data) {
      getMeasCodes({});
    }
    if (!indVocCodeNames.data) {
      getIndVocCodes({});
    }
    if (!locReachNames.data) {
      getLocReaches({});
    }
    if (!locVocNames.data) {
      getLocVocs({});
    }
    if (!locExNames.data) {
      getLocExactnes({});
    }
    if (!locClassNames.data) {
      getLocClasses({});
    }
    if (!relActTypes.data) {
      getRelActTypes({});
    }
    if (!condCodeNames.data) {
      getCondCodes({});
    }
    if (!sectorVocabs.data) {
      getSectorVocabs({});
    }
    if (!sectors.data) {
      getSectors({});
    }
    if (!countNames.data) {
      getCountNames({
        values: {
          q: '*:*',
          fl: 'code,name',
          rows: 1000,
        },
      });
    }
    getTooltips({});
    getSignatoryProgress({});
  }, []);
}
