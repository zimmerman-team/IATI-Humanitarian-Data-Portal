import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import { spaceCloudAPIModel } from './index';

const gbsignatories: GBSignatoryResponseInterface = {
  ...spaceCloudAPIModel('signatories'),
};

export default gbsignatories;
