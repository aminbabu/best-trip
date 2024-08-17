import { apiSlice } from "../apiSlice";

export const { injectEndpoints } = apiSlice;

export const PACKAGE_DURATION_API = injectEndpoints({
  endpoints: (builder) => ({
    // Query to get all package durations
    getPackageDurations: builder.query({
      query: () => `/umrah/package-durations/customer`,
      method: "GET",
      // Provides the cache tag for "PackageDurations" for better caching
      providesTags: ["PackageDurations"],
    }),
  }),
});

// Destructure the generated hook for ease of use
export const { useGetPackageDurationsQuery } = PACKAGE_DURATION_API;
