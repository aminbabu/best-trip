import axios from "@/lib/axios";

/**
 * Fetches exclusive offers from the API.
 *
 * @returns {Promise<Object>} An object containing the exclusive offers or an error message.
 */
export const getExclusiveOffers = async () => {
  try {
    // Make the API request to fetch exclusive offers
    const response = await axios.get("/api/settings/content/exclusive-offers");

    // Return the fetched data in a structured format
    return {
      exclusiveOffers: response?.data?.exclusiveOffers,
    };
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching exclusive offers:", error);

    // Return an error message or data if available
    return {
      error: error?.response?.data || "An unexpected error occurred",
    };
  }
};
