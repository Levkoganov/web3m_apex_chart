import { configureStore } from "@reduxjs/toolkit";
import coingeckoReducer from "./coingeckoSlice";

export const store = configureStore({
  reducer: {
    coingecko: coingeckoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
