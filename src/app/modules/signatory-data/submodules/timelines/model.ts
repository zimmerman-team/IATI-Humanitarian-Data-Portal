import { moneyType } from 'app/components/datadisplay/Table/model';

export interface TimeLinessModel {
  freqRating: string;
  timeLagName: string;
  timelagData: (
    | number
    | string
    | undefined
    | null
    | (string | number | null)[]
    | moneyType
  )[][];
  freqData: (
    | number
    | string
    | undefined
    | null
    | (string | number | null)[]
    | moneyType
  )[][];
  freqDataCSV?: any;
}
