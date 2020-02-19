import { apiModel } from './index';
import { CodeListInterface } from '../interfaces/codeListsInterface';
import { endpoints } from 'app/__consts__/endpoints';

export const codelists: CodeListInterface = {
  actStatus: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/ActivityStatus/?format=json`
    ),
  },
  transTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/TransactionType/?format=json`
    ),
  },
  orgTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/OrganisationType/?format=json`
    ),
  },
  resultTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/ResultType/?format=json`
    ),
  },
  orgRoleNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/OrganisationRole/?format=json`
    ),
  },
  othIDTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/OtherIdentifierType/?format=json`
    ),
  },
  contactTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/ContactType/?format=json`
    ),
  },
  regVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/RegionVocabulary/?format=json`
    ),
  },
  tagVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/TagVocabulary/?format=json`
    ),
  },
  budgItemVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/BudgetIdentifierVocabulary/?format=json`
    ),
  },
  humScopTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/HumanitarianScopeType/?format=json`
    ),
  },
  humVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/HumanitarianScopeVocabulary/?format=json`
    ),
  },
  polMarkCodeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/PolicyMarker/?format=json`
    ),
  },
  policMSignificanceName: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/PolicySignificance/?format=json`
    ),
  },
  polMarkerVocabNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/PolicyMarkerVocabulary/?format=json`
    ),
  },
  defAidTypeVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/AidTypeVocabulary/?format=json`
    ),
  },
  budgTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/BudgetType/?format=json`
    ),
  },
  budgStatusNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/BudgetStatus/?format=json`
    ),
  },
  actScopeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/ActivityScope/?format=json`
    ),
  },
  colabTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/CollaborationType/?format=json`
    ),
  },
  defFlowTypeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/FlowType/?format=json`
    ),
  },
  defTiedStatusName: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/TiedStatus/?format=json`
    ),
  },
  measCodeName: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/IndicatorMeasure/?format=json`
    ),
  },
  indVocCodeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/IndicatorVocabulary/?format=json`
    ),
  },
  locReachNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/GeographicLocationReach/?format=json`
    ),
  },
  locVocNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/GeographicVocabulary/?format=json`
    ),
  },
  locExNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/GeographicExactness/?format=json`
    ),
  },
  locClassNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/GeographicLocationClass/?format=json`
    ),
  },
  relActTypes: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/RelatedActivityType/?format=json`
    ),
  },
  condCodeNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/ConditionType/?format=json`
    ),
  },
  sectorVocabs: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/SectorVocabulary/?format=json`
    ),
  },
  sectors: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/api/codelists/Sector/?format=json`
    ),
  },
  countNames: {
    ...apiModel(
      `${process.env.REACT_APP_DS_API}/search/${endpoints.codelists}/country/`
    ),
  },
};
