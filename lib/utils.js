import {
  BusIcon,
  BusRedIcon,
  GuideIcon,
  HotelIcon,
  PassportCircleIcon,
  PlaneIcon,
  SpoonKnifeIcon,
} from "@/components/icons/svgr";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

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

export const getImageData = (event) => {
  const file = event.target.files[0];
  const displayUrl = URL.createObjectURL(file);

  return { file, displayUrl };
};

export const generateImage = (path) => {
  if (!path) {
    return "";
  }

  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};

export const renderInclusionIcon = (item) => {
  switch (item.toLowerCase()) {
    case "flight":
      return <PlaneIcon className="w-4 h-4" viewBox="0 0 14 14" />;
    case "hotel":
      return <HotelIcon className="w-4 h-4" viewBox="0 0 14 14" />;
    case "visa":
      return <PassportCircleIcon className="w-4 h-4" viewBox="0 0 14 14" />;
    case "trns":
      return <BusRedIcon className="w-4 h-4" viewBox="0 0 16 16" />;
    case "food":
      return <SpoonKnifeIcon className="w-4 h-4" viewBox="0 0 16 16" />;
    case "transport":
      return <BusIcon className="w-4 h-4" viewBox="0 0 12 12" />;
    case "guide":
      return <GuideIcon className="w-4 h-4" viewBox="0 0 12 12" />;
    default:
      return null;
  }
};
