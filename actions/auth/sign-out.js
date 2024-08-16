"use server";

import { signOut } from "@/auth";

export const signOutArtist = async () => {
  try {
    await signOut({ redirect: false });

    return { message: "You have been signed out" };
  } catch (error) {
    throw new Error("An error occurred. Please try again");
  }
};

export const signOutAdmin = async () => {
  try {
    await signOut({ redirect: false });

    return { message: "You have been signed out" };
  } catch (error) {
    throw new Error("An error occurred. Please try again");
  }
};
