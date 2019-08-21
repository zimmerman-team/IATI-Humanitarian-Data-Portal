import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import apiModel from './index';

const gbsignatories: GBSignatoryResponseInterface = {
  ...apiModel(`${process.env.REACT_APP_CMS_API}/static/publishers.json`),
};

export default gbsignatories;
