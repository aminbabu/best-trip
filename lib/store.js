import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import packageReducer from "./features/umrahPackageSlice/packageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add other reducers here if needed
      [apiSlice.reducerPath]: apiSlice.reducer,
      package: packageReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
