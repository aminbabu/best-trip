// src/services/packageTypesApi.ts

import { apiSlice } from "../apiSlice";

// Inject endpoints into the existing apiSlice
export const UMRAH_PACKAGE_TYPES_API = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get all package types for customers
    getPackageTypesCustomers: builder.query({
      query: () => `/umrah/package-types/customers`,
      // Provides the cache tag for "PackageTypes" for better caching
      method: "GET",
      providesTags: ["PackageTypes"],
    }),
  }),
});

// Destructure the generated hook for ease of use
export const { useGetPackageTypesCustomersQuery } = UMRAH_PACKAGE_TYPES_API;
