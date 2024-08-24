import axios from "axios";
import { signOut } from "@/auth";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    //  Ensures that the code runs only on the client side
    if (typeof window !== "undefined") {
      // Retrieve token from local storage or cookies
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      if (typeof window !== "undefined") {
        // Logout the user and redirect to sign in if unauthorized
        await signOut({ redirect: false });
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
