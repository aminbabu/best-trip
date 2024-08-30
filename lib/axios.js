import axios from "axios";
import { auth, signOut } from "@/auth";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const session =await auth();
    const accessToken = session?.user?.accessToken;
    // Retrieve token from local storage or cookies
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
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
