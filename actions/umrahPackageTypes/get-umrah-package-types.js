import axios from "@/lib/axios";

/**
 * Fetches Umrah package types for customers.
 *
 * This function makes a GET request to the specified API endpoint to retrieve
 * the available Umrah package types. It handles errors by logging them to the
 * console and returning an error message if the request fails.
 *
 * @returns {Promise<Object>} An object containing either the Umrah package types
 * or an error message.
 */
export const getUmrahPackageTypesForCustomers = async () => {
  try {
    // Make a GET request to the API endpoint to fetch Umrah package types.
    const response = await axios.get("/api/umrah/package-types/customers");

    // Return the fetched Umrah package types.
    return {
      umrahPackageTypes: response?.data?.umrahPackageTypes,
    };
  } catch (error) {
    // Log the error to the console for debugging.
    console.error("Error fetching Umrah packages:", error);

    // Return an error object with the error message or a default message.
    return { error: error?.response?.data || "An unexpected error occurred" };
  }
};
