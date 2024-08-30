"use server"
import axios from "@/lib/axios";

/**
 * Fetches Umrah packages for customers based on various filters.
 *
 * @param {Object} params - The parameters for fetching Umrah packages.
 * @param {string} params.packageSchedule - The schedule of the package.
 * @param {string} params.packageType - The type of Umrah package.
 * @param {string} params.packageDuration - The duration of the package.
 * @param {number} [params.dataLength=10] - The number of packages to return (default is 10).
 * @param {number} params.adultTravelers - The number of adult travelers.
 * @param {number} params.childTravelers - The number of child travelers.
 * @param {number} params.infantsTravelers - The number of infant travelers.
 * @param {string} [params.lastItemId] - The ID of the last item for pagination.
 *
 * @returns {Promise<Object>} The response object containing Umrah packages or error details.
 */

export const getUmrahPackageForCustomers = async ({
  packageSchedule,
  packageType,
  packageDuration,
  dataLength = 10,
  adultTravelers,
  childTravelers,
  infantsTravelers,
  lastItemId,
}) => {
  try {
    const response = await axios.post(
      `/api/umrah/packages/customer`,
      {
        packageSchedule,
        packageType,
        packageDuration,
        dataLength,
        adultTravelers: Number(adultTravelers),
        childTravelers: Number(childTravelers),
        infantsTravelers: Number(infantsTravelers),
        lastItemId,
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching Umrah packages:", error);
    return error;
  }
};

/**
 * Fetches a specific Umrah package for customers by its ID.
 *
 * @param {Object} params - The parameters for fetching the Umrah package.
 * @param {string} params.id - The ID of the Umrah package.
 *
 * @returns {Promise<Object>} The response object containing the Umrah package or error details.
 */
export const getUmrahPackageByIdForCustomers = async (id) => {
  try {
    const response = await axios.get(`/api/umrah/packages/${id}`);
    return response?.data?.umrahPackage;
  } catch (error) {
    console.error("Error fetching Umrah packages by ID:", error);
    return { error: error?.response?.data || "An unexpected error occurred" };
  }
};
