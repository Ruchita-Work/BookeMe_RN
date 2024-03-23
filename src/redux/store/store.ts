import {
  configureStore,
  combineReducers,
  PayloadAction,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { authSlice, onboardingSlice } from "@redux/features";
import { reduxMmkvStorage } from "@utils/storage/reduxMmkvStorage";

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "bookme-redux-root",
  storage: reduxMmkvStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth"],
};

const combinedRootReducer = combineReducers({
  auth: authSlice,
  onboarding: onboardingSlice,
});

export type RootState = ReturnType<typeof combinedRootReducer>;

const rootReducer = (state: RootState, action: PayloadAction) => {
  if (action.type === "LOGOUT") {
    // check for action type
    state = undefined;
  }
  return combinedRootReducer(state, action);
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistRootReducer,
  middleware: gDM => gDM({ serializableCheck: false }).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
