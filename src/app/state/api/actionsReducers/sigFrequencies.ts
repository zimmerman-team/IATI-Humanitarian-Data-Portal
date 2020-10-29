import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import { spaceCloudAPIModel } from './index';

const sigFrequencies: GBSignatoryResponseInterface = {
  ...spaceCloudAPIModel('signatoryFrequency'),
};

export default sigFrequencies;
