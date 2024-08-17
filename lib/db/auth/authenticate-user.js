import axios from "@/lib/axios";
import { jwtDecode } from "jwt-decode";

const authenticateUser = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/customers/login", {
      email,
      password,
    });

    const { user } = jwtDecode(response?.data?.token) || {};

    return {
      user,
      token: response.data.token,
    };
  } catch (error) {
    return { error: error.response.data };
  }
};

export default authenticateUser;
