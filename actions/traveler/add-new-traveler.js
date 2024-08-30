import axios from "@/lib/axios";

export const addNewTraveler = async (data) => {
  const response = await axios.post("/api/umrah/travelers", data);
  return response;
};
