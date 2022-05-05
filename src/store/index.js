import { createStore } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "redux-store-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {});
export const persistor = persistStore(store);

export default store;
