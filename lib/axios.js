import { auth, signOut } from "@/auth";
import axios from "axios";
import { redirect } from "next/navigation";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const { user } = (await auth()) || {};

    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
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
      await signOut({ redirect: false });

      return redirect("/sign-in");
    }

    return Promise.reject(error);
  }
);

export default instance;
