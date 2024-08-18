import axios from "@/lib/axios";

/**
 * Fetches flight offers from the API.
 *
 * @returns {Promise<Object>} An object containing the flight offers or an error message.
 */
export const getFlightOffers = async () => {
  try {
    // Make the API request to fetch flight offers
    const response = await axios.get("/api/settings/content/flight-offers");

    // Return the fetched data in a structured format
    return {
      flightOffers: response?.data?.flightOffers,
    };
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching flight offers:", error);

    // Return an error message or data if available
    return {
      error: error?.response?.data || "An unexpected error occurred",
    };
  }
};
