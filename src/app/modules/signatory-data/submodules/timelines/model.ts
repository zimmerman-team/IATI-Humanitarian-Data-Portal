import { moneyType } from 'app/components/datadisplay/Table/model';

export interface TimeLinessModel {
  timelagData: (
    | number
    | string
    | undefined
    | null
    | (string | number | null)[]
    | moneyType)[][];
  freqData: (
    | number
    | string
    | undefined
    | null
    | (string | number | null)[]
    | moneyType)[][];
}
