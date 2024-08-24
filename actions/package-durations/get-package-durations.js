import axios from "@/lib/axios";

/**
 * Fetches the package durations for Umrah packages for customers.
 *
 * This function makes a GET request to the `/umrah/package-durations/customer` endpoint
 * to retrieve the available durations for Umrah packages.
 *
 * @param {Object} params - An object containing parameters (currently empty).
 * @returns {Promise<Object>} - A promise that resolves to an object containing either:
 *    - `umrahPackages`: The package durations data retrieved from the API, or
 *    - `error`: Error details if the request fails.
 */
export const getPackageDurationsForCustomers = async () => {
  // Make a GET request to fetch the package durations
  const response = await axios.get("/api/umrah/package-durations/customer");
  return response;
};
