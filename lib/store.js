import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add other reducers here if needed
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
