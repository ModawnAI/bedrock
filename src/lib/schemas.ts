import { z } from "zod"

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  role: z
    .string()
    .min(2, "Role/Title must be at least 2 characters")
    .max(100, "Role/Title must be less than 100 characters"),
  workEmail: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  challenge: z
    .string()
    .min(10, "Please describe your challenge in at least 10 characters")
    .max(1000, "Challenge description must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
