// interface to get humanitarian activities
// associated with the signatory
import { ApiModel } from 'app/state/api/interfaces';
import { BaseQuery } from 'app/interfaces/queries';
import { BaseRespModel } from 'app/interfaces/response';

export interface HumActQueryModel extends BaseQuery {
  fl: string;
}

export interface ActivityItemModel {
  iati_identifier: string;
}

export interface HumActInterface
  extends ApiModel<
    HumActQueryModel,
    BaseRespModel<HumActQueryModel, ActivityItemModel>
  > {}
