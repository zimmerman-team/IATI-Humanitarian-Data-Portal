import { createTypedHooks } from "easy-peasy";
import { ApplicationStoreModel } from './index';

const typedHooks = createTypedHooks<ApplicationStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
