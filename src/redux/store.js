import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactsReducer } from "./contacts";
import { authReducer } from "./auth";
import storage from "redux-persist/lib/storage";
import error from "./errorReducer";
import loading from "./loadingReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    error: error,
    loading: loading,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

export default { store, persistor };
