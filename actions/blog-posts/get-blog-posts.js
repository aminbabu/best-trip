"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getBlogPosts = async () => {
  try {
    const response = await axios.get("/api/settings/content/blog-posts");
    return response?.data?.blogPosts;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
