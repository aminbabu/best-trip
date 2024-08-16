"use server";

import { signIn } from "@/auth";

const credentialSignIn = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (response?.error) {
      throw new Error("An error occurred. Please try again");
    }

    return response;
  } catch (error) {
    throw new Error(
      error.cause.err.message ||
        "An error occurred. Please check your credentials and try again"
    );
  }
};

export default credentialSignIn;
