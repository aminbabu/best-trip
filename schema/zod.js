import moment from "moment";
import { z } from "zod";

/**
 * @description Schema for umrah search
 *
 */
export const umrahSchema = z.object({
  schedule: z.string().min(1, { message: "Schedule is required" }),
  type: z.string().min(1, { message: "Package is required" }),
  duration: z
    .string()
    .min(1, { message: "Duration is required" })
    .or(z.number().min(1, { message: "Duration is required" })),
  travellers: z
    .string()
    .min(1, { message: "Travellers is required" })
    .or(z.number().min(1, { message: "Travellers is required" })),
});

/**
 * @description Schema for visa search
 *
 */
export const visaSchema = z.object({
  destination: z.string().min(1, { message: "Destination is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  type: z.string().min(1, { message: "Visa Type is required" }),
  travellers: z
    .string()
    .min(1, { message: "Travellers is required" })
    .or(z.number().min(1, { message: "Travellers is required" })),
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
  travellers: z.string().min(1, { message: "Please select a traveller" }),
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
  country: z.string().min(1, { message: "Please select a valid country" }),
  city: z.string().min(1, { message: "Please provide a city name" }),
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
  emergency_contact: z
    .string()
    .min(1, { message: "Please provide a emergency contact no." }),
});

/**
 * @description Schema for filter table
 *
 */
export const filterSchema = z.object({
  status: z.string().min(1, { message: "Please select a type" }),
  type: z.string().min(1, { message: "Please select a type" }),
  date: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    })
    .or(
      z.date({
        message: "Please provide a valid date of birth",
      })
    ),
});

/**
 * @description Schema for ticket number update table
 *
 */
export const ticketNumberSchema = z.object({
  ticket_no_one: z.string().min(1, { message: "Type a valid ticket number" }),
  ticket_no_two: z.number().min(1, { message: "Type a valid ticket number" }),
  ticket_no_three: z.number().min(1, { message: "Type a valid ticket number" }),
});

/**
 * @description Schema for ticket number update table
 *
 */
export const extendTimeLimitSchema = z.object({
  new_time: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    })
    .or(
      z.date({
        message: "Please provide a valid date of birth",
      })
    ),
});
