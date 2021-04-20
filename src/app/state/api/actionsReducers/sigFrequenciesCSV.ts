import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';

const sigFrequenciesCSV: ActivityResponceInterface = {
  ...apiModel(
    'https://cors.mlt.nyuki.io/http://publishingstats.iatistandard.org/timeliness_frequency.csv'
  ),
};

export default sigFrequenciesCSV;
