import { ApiModel } from './index';
import { BaseQuery } from 'app/interfaces/queries';
import { BaseRespModel } from 'app/interfaces/response';

export interface CodeItemInterface {
  code: string;
  name: string;
}

export interface CodeListInterface {
  actStatus: ApiModel<any, CodeItemInterface[]>;
  transTypeNames: ApiModel<any, CodeItemInterface[]>;
  orgTypeNames: ApiModel<any, CodeItemInterface[]>;
  resultTypeNames: ApiModel<any, CodeItemInterface[]>;
  orgRoleNames: ApiModel<any, CodeItemInterface[]>;
  othIDTypeNames: ApiModel<any, CodeItemInterface[]>;
  contactTypeNames: ApiModel<any, CodeItemInterface[]>;
  regVocNames: ApiModel<any, CodeItemInterface[]>;
  tagVocNames: ApiModel<any, CodeItemInterface[]>;
  budgItemVocNames: ApiModel<any, CodeItemInterface[]>;
  humScopTypeNames: ApiModel<any, CodeItemInterface[]>;
  humVocNames: ApiModel<any, CodeItemInterface[]>;
  polMarkCodeNames: ApiModel<any, CodeItemInterface[]>;
  policMSignificanceName: ApiModel<any, CodeItemInterface[]>;
  polMarkerVocabNames: ApiModel<any, CodeItemInterface[]>;
  defAidTypeVocNames: ApiModel<any, CodeItemInterface[]>;
  budgTypeNames: ApiModel<any, CodeItemInterface[]>;
  budgStatusNames: ApiModel<any, CodeItemInterface[]>;
  actScopeNames: ApiModel<any, CodeItemInterface[]>;
  colabTypeNames: ApiModel<any, CodeItemInterface[]>;
  defFlowTypeNames: ApiModel<any, CodeItemInterface[]>;
  defTiedStatusName: ApiModel<any, CodeItemInterface[]>;
  measCodeName: ApiModel<any, CodeItemInterface[]>;
  indVocCodeNames: ApiModel<any, CodeItemInterface[]>;
  locReachNames: ApiModel<any, CodeItemInterface[]>;
  locVocNames: ApiModel<any, CodeItemInterface[]>;
  locExNames: ApiModel<any, CodeItemInterface[]>;
  locClassNames: ApiModel<any, CodeItemInterface[]>;
  relActTypes: ApiModel<any, CodeItemInterface[]>;
  condCodeNames: ApiModel<any, CodeItemInterface[]>;
  sectorVocabs: ApiModel<any, CodeItemInterface[]>;
  countNames: ApiModel<BaseQuery, BaseRespModel<BaseQuery, CodeItemInterface>>;
}
