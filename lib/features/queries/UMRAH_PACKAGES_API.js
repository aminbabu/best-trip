import { apiSlice } from "../apiSlice";

export const UMRAH_PACKAGE_API = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get all Umrah packages for customers
    getUmrahPackagesForCustomers: builder.query({
      query: ({
        packageSchedule,
        packageType,
        packageDuration,
        dataLength = 10,
        adultTravelers,
        childTravelers,
        infantsTravelers,
        lastItemId,
      }) => ({
        url: "/umrah/packages/customer",
        method: "POST",
        body: {
          packageSchedule,
          packageType,
          packageDuration,
          dataLength,
          adultTravelers,
          childTravelers,
          infantsTravelers,
          lastItemId,
        },
      }),
      providesTags: ["UmrahPackages"],
    }),

    // Query to get a specific Umrah package by ID for customers
    getUmrahPackageByIdForCustomers: builder.query({
      query: (id) => ({
        url: `/umrah/packages/${id}/customers`,
        method: "GET",
      }),
      providesTags: ["UmrahPackages"],
    }),
  }),
});

// Destructure the generated hooks for ease of use
export const {
  useGetUmrahPackagesForCustomersQuery,
  useGetUmrahPackageByIdForCustomersQuery,
} = UMRAH_PACKAGE_API;
