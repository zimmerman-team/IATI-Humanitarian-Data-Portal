import { action, createComponentStore, thunk } from 'easy-peasy';
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { AboutTextBlock, AboutStoreModel } from './interface';

const aboutText: AboutStoreModel = {
  aboutTextBlocks: [],
  setAllItems: action((state, payload: Array<AboutTextBlock>) => {
    state.aboutTextBlocks = payload;
  }),
  getAllItems: thunk(async actions => {
    const res = await db.get('aboutTextBlocks').apply();
    if (res.status === 200) {
      actions.setAllItems(res.data.result);
    }
  }),
};

export const aboutStore = createComponentStore(aboutText);
