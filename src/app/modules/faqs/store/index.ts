import { action, createComponentStore, thunk } from 'easy-peasy';
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { FaqItem, FaqStoreModel } from './interface';

const faqs: FaqStoreModel = {
  faqItems: [],
  setAllItems: action((state, payload: Array<FaqItem>) => {
    state.faqItems = payload;
  }),
  getAllItems: thunk(async actions => {
    const res = await db.get('faq_items').apply();
    if (res.status === 200) {
      actions.setAllItems(res.data.result);
    }
  }),
};

export const faqStore = createComponentStore(faqs);
