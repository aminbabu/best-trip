import { z } from "zod";

export const umrahSchema = z.object({
  schedule: z.string().min(1, { message: "Schedule is required" }),
  type: z.string().min(1, { message: "Package is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  traveller: z.string().min(1, { message: "Traveller is required" }),
});
