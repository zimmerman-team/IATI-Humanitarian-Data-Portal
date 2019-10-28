import SignatoryPrgoressResponseInterface from 'app/state/api/interfaces/signatoryProgressInterface';
import { spaceCloudAPIModel } from './index';

const signatoryProgress: SignatoryPrgoressResponseInterface = {
  ...spaceCloudAPIModel('signatoryProgress'),
};

export default signatoryProgress;
