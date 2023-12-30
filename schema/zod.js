import { z } from "zod";

/**
 * @description Schema for umrah search
 *
 */
export const umrahSchema = z.object({
  schedule: z.string().min(1, { message: "Schedule is required" }),
  type: z.string().min(1, { message: "Package is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  traveller: z.number().min(1, { message: "Traveller is required" }),
});

/**
 * @description Schema for uuid validation
 *
 */
export const uuidSchema = z.object({
  uuid: z.string().uuid({ message: "Invalid uuid" }),
});
