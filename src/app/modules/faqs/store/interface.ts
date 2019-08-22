import { Action, Thunk } from 'easy-peasy';

export interface FaqItem {
  _id?: string;
  title: string;
  expl: string;
}

export interface FaqStoreModel {
  faqItems: Array<FaqItem>;
  setAllItems: Action<FaqStoreModel, Array<FaqItem>>;
  getAllItems: Thunk<FaqStoreModel>;
}
