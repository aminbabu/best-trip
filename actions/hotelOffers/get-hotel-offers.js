import axios from "@/lib/axios";

/**
 * Fetches hotel offers from the API.
 *
 * @returns {Promise<Object>} An object containing the hotel offers or an error message.
 */
export const getHotelOffers = async () => {
  try {
    // Make the API request to fetch hotel offers
    const response = await axios.get("/api/settings/content/hotel-offers");

    // Return the fetched data in a structured format
    return {
      hotelOffers: response?.data?.hotelOffers,
    };
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching hotel offers:", error);

    // Return an error message or data if available
    return {
      error: error?.response?.data || "An unexpected error occurred",
    };
  }
};
