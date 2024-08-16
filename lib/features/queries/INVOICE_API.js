import { apiSlice } from "../apiSlice";

export const INVOICE_API = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get an invoice for a customer by ID
    getInvoiceForCustomer: builder.query({
      query: (id) => ({
        url: `/api/invoice/${id}/customer`,
        method: "GET",
      }),
      providesTags: ["Invoice"],
    }),
  }),
});

// Destructure the generated hook for ease of use
export const { useGetInvoiceForCustomerQuery } = INVOICE_API;
