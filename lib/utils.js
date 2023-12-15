import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getComponents(page, components) {
  return components.filter((component) => component.page === page);
}
