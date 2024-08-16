import { apiSlice } from "../apiSlice";

export const UMRAH_BOOKING_API = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to view own Umrah bookings for customers
    viewCustomerBookings: builder.query({
      query: () => ({
        url: "/umrah/booking/my-bookings",
        method: "GET",
      }),
      providesTags: ["UmrahBookings"],
    }),

    // Mutation to create a new Umrah booking
    createUmrahBooking: builder.mutation({
      query: (newBooking) => ({
        url: "/umrah/booking",
        method: "POST",
        body: newBooking,
      }),
      invalidatesTags: ["UmrahBookings"],
    }),

    // Mutation to create a new Umrah booking
    makeUmrahBookingPayment: builder.mutation({
      query: ({ id, paymentType }) => ({
        url: `/umrah/booking/${id}/make-payment`,
        method: "POST",
        body: paymentType,
      }),
      invalidatesTags: ["UmrahBookings"],
    }),

    // Query to get a specific Umrah booking by ID for a customer
    getUmrahBookingByIdForCustomer: builder.query({
      query: (id) => ({
        url: `/umrah/booking/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["UmrahBookings"],
    }),

    // Mutation to submit a booking for review
    submitBookingForReview: builder.mutation({
      query: (id) => ({
        url: `/umrah/booking/${id}/submit-review`,
        method: "POST",
      }),
      invalidatesTags: ["UmrahBookings"],
    }),
  }),
});

// Destructure the generated hooks for ease of use
export const {
  useViewCustomerBookingsQuery,
  useCreateUmrahBookingMutation,
  useMakeUmrahBookingPaymentMutation,
  useGetUmrahBookingByIdForCustomerQuery,
  useSubmitBookingForReviewMutation,
} = UMRAH_BOOKING_API;
