import { Action, Thunk } from 'easy-peasy';

export interface AboutTextBlock {
  _id?: string;
  title: string;
  body: string;
  moreLink: string;
}

export interface AboutStoreModel {
  aboutTextBlocks: Array<AboutTextBlock>;
  setAllItems: Action<AboutStoreModel, Array<AboutTextBlock>>;
  getAllItems: Thunk<AboutStoreModel>;
}
