import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import { spaceCloudAPIModel } from './index';

const tooltips: GBSignatoryResponseInterface = {
  ...spaceCloudAPIModel('tooltips'),
};

export default tooltips;
