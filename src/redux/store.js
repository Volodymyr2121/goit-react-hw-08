import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistedAuthReducer = persistReducer(
  {
    key: "auth-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedAuthReducer,
    },
   
});

export const persistor = persistStore(store);