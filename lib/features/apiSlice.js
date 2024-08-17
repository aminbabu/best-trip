import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: [
    "PackageDurations",
    "PackageTypes",
    "UmrahPackages",
    "UmrahBookings",
    "Travelers",
    "Invoice",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}), // Endpoints will be injected here
});

export const { useLazyApiRequest } = apiSlice;

// Export the hook that will be used to inject endpoints in another file
export const { injectEndpoints } = apiSlice;
