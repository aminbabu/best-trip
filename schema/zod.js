import moment from "moment";
import { z } from "zod";

/**
 * @description Schema for umrah search
 *
 */
export const flightSchema = z.object({
  flightType: z.string().min(1, { message: "Schedule is required" }),
  classType: z.string().min(1, { message: "Package is required" }),
  travellers: z
    .string()
    .min(1, { message: "Travellers is required" })
    .or(z.number().min(1, { message: "Travellers is required" })),
  fromDestination:
    // z
    // .string()
    // .min(1, { message: "Duration is required" })
    // .or(z.number().min(1, { message: "Duration is required" })),
    z.object({
      id: z.number(),
      city: z.string(),
      country: z.string(),
      code: z.string(),
    }),
  toDestination:
    // z
    //   .string()
    //   .min(1, { message: "Travellers is required" })
    //   .or(z.number().min(1, { message: "Travellers is required" })),
    z.object({
      id: z.number(),
      city: z.string(),
      country: z.string(),
      code: z.string(),
    }),
  departureDate: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    })
    .or(
      z.date({
        message: "Please provide a valid date of birth",
      })
    ),
  returnDate: z
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
  travellers: z.object({
    adultTravelers: z
      .number()
      .min(1, "At least one adult traveler is required"),
    childTravelers: z.number().min(0),
    infantsTravelers: z.number().min(0),
  }),
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
 * @description Schema for hotel search
 *
 */
export const hotelSchema = z.object({
  roomNo: z.number().min(1, { message: "Room Number is required" }),
  destination: z.object({
    id: z.number(),
    city: z.string(),
    country: z.string(),
    code: z.string(),
  }),
  nationality: z.object({
    country: z.string(),
    id: z.number(),
    code: z.string(),
  }),
  travellers: z
    .string()
    .min(1, { message: "Travellers is required" })
    .or(z.number().min(1, { message: "Travellers is required" })),
  checkInDate: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    })
    .or(
      z.date({
        message: "Please provide a valid date of birth",
      })
    ),
  checkOutDate: z
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
  passport: z.string().min(1, { message: "Please provide a valid passport" }),
  photo: z.string().min(1, { message: "Please provide a valid photo" }),
  nid: z.string().min(1, { message: "Please provide a valid NID" }),
  covid_certificate: z
    .string()
    .min(1, { message: "Please provide a valid COVID certificate" }),
  travelerType: z.string().min(1, { message: "Please select a traveler type" }),
  firstName: z
    .string()
    .min(1, { message: "Please provide a valid first name" }),
  lastName: z.string().min(1, { message: "Please provide a valid last name" }),
  gender: z.string().min(1, { message: "Please select a valid gender" }),
  dateOfBirth: z
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
  cityName: z.string().min(1, { message: "Please provide a city name" }),
  presentAddress: z
    .string()
    .min(1, { message: "Please provide a valid present address" }),
  permanentAddress: z
    .string()
    .min(1, { message: "Please provide a valid permanent address" }),
  passportNumber: z
    .string()
    .min(1, { message: "Please provide a valid passport number" }),
  documentIssueCountry: z
    .string()
    .min(1, { message: "Please select a valid document issue country" }),
  passportExpiryDate: z
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
  phone: z.string().min(1, { message: "Please provide a valid phone number" }),
  emergencyContactNo: z
    .string()
    .min(1, { message: "Please provide an emergency contact number" }),
});


export const editTravelerSchema = z.object({
  passport: z.string().optional(),
  photo: z.string().optional(),
  nid: z.string().optional(),
  covid_certificate: z.string().optional(),
  travelerType: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  gender: z.string().optional(),
  dateOfBirth: z
    .string()
    .optional()
    .refine(val => !val || moment(val).isValid(), {
      message: "Please provide a valid date of birth",
    }),
  country: z.string().optional(),
  cityName: z.string().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  passportNumber: z.string().optional(),
  documentIssueCountry: z.string().optional(),
  passportExpiryDate: z
    .string()
    .optional()
    .refine(val => !val || moment(val).isValid(), {
      message: "Please provide a valid passport expiry date",
    }),
  email: z.string().optional(),
  phone: z.string().optional(),
  emergencyContactNo: z.string().optional(),
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

/**
 * @description Schema for edit booking status
 *
 */
export const editBookingStatusSchema = z.object({
  updated_booking_status: z
    .string()
    .min(1, { message: "Please select a booking status" }),
});

/**
 * @description Schema for edit booking
 *
 */
export const editBookingSchema = z.object({
  flight_status: z
    .string()
    .min(1, { message: "Please select a valid flight status" }),
  makkah_hotel_status: z
    .string()
    .min(1, { message: "Please select a valid makkah hotel status" }),
  madinah_hotel_status: z
    .string()
    .min(1, { message: "Please select a valid madinah hotel status" }),
  visa_status: z
    .string()
    .min(1, { message: "Please select a valid visa status" }),
});

/**
 * @description Schema for edit supplier
 *
 */
export const editSupplierSchema = z.object({
  vendor_status: z.string().min(1, { message: "Please select a valid vendor" }),
});
