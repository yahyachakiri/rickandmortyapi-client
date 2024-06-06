import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rickandmortyApi } from "./api";
import { favoriteSlice } from "./slices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite", "rickandmortyApi"],
};

const combinedReducers = combineReducers({
  favorite: favoriteSlice.reducer,
  [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: Action) => {
  return combinedReducers(state, action);
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(rickandmortyApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
