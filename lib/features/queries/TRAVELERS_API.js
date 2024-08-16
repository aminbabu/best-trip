import { apiSlice } from "../apiSlice";

export const TRAVELERS_API = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get all travelers for a specific umrah booking
    getAllTravelers: builder.query({
      query: (umrahBookingId) => ({
        url: `/umrah/travelers/${umrahBookingId}`,
        method: "GET",
      }),
      providesTags: ["Travelers"],
    }),

    // Query to get a specific traveler by umrahBookingId and travelerId
    getTravelerById: builder.query({
      query: ({ umrahBookingId, travelerId }) => ({
        url: `/umrah/travelers/${umrahBookingId}/${travelerId}`,
        method: "GET",
      }),
      providesTags: ["Traveler"],
    }),

    // Mutation to create a new traveler
    createTraveler: builder.mutation({
      query: (newTraveler) => ({
        url: "/umrah/travelers",
        method: "POST",
        body: newTraveler,
      }),
      invalidatesTags: ["Travelers"],
    }),

    // Mutation to update a traveler by umrahBookingId and travelerId
    updateTraveler: builder.mutation({
      query: ({ umrahBookingId, travelerId, updatedTraveler }) => ({
        url: `/umrah/travelers/${umrahBookingId}/${travelerId}`,
        method: "PATCH",
        body: updatedTraveler,
      }),
      invalidatesTags: ["Traveler"],
    }),

    // Mutation to delete a traveler by umrahBookingId and travelerId
    deleteTravelerById: builder.mutation({
      query: ({ umrahBookingId, travelerId }) => ({
        url: `/umrah/travelers/${umrahBookingId}/${travelerId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Travelers"],
    }),
  }),
});

// Destructure the generated hooks for ease of use
export const {
  useGetAllTravelersQuery,
  useGetTravelerByIdQuery,
  useCreateTravelerMutation,
  useUpdateTravelerMutation,
  useDeleteTravelerByIdMutation,
} = TRAVELERS_API;
