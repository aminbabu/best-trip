import moment from "moment";
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
export const uuidSchema = z.string().uuid({ message: "Invalid uuid" });

/**
 * @description Schema for number validation
 *
 */
export const numberSchema = z.number().min(1, { message: "Invalid number" });

/**
 * @description Schema for traveller form
 *
 */
export const travellerSchema = z.object({
  passport: z.string().min(1, { message: "Please provide a valid password" }),
  photo: z.string().min(1, { message: "Please provide a valid photo" }),
  nid: z.string().min(1, { message: "Please provide a valid nid" }),
  covid_certificate: z
    .string()
    .min(1, { message: "Please provide a valid covid certificate" }),
  first_name: z
    .string()
    .min(1, { message: "Please provide a valid first name" }),
  last_name: z.string().min(1, { message: "Please provide a valid last name" }),
  gender: z.string().min(1, { message: "Please select a valid gender" }),
  dob: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    })
    .or(
      z.date({
        message: "Please provide a valid date of birth",
      })
    ),
  marital_status: z
    .string()
    .min(1, { message: "Please select a valid marital status" }),
  country: z.string().min(1, { message: "Please select a valid country" }),
  division: z.string().min(1, { message: "Please select a valid division" }),
  present_address: z
    .string()
    .min(1, { message: "Please provide a valid present address" }),
  permanent_address: z
    .string()
    .min(1, { message: "Please provide a valid permanent address" }),
  passport_no: z
    .string()
    .min(1, { message: "Please provide a valid passport no" }),
  document_issue_country: z
    .string()
    .min(1, { message: "Please select a valid document issue country" }),
  passport_expiry_date: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid passport expiry date",
    })
    .or(
      z.date({
        message: "Please provide a valid passport expiry date",
      })
    ),
  email: z.string().email({ message: "Please provide a valid email" }),
  phone: z.string().min(1, { message: "Please provide a valid phone" }),
});
