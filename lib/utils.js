import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param {*} errors
 * @returns {Object<{field: string, message: string}>}
 */
export function formatError(errors) {
  const result = {};

  if (errors instanceof ZodError) {
    errors.errors.forEach((error) => {
      const { path, message } = error;
      result[path.join(".")] = message;
    });
  }

  return result;
}

/**
 *
 * @param {*} event
 * @returns {Object<{file: File, displayUrl: string}>}
 */
export const getImageData = (event) => {
  const file = event.target.files[0];
  const displayUrl = URL.createObjectURL(file);

  return { file, displayUrl };
};
