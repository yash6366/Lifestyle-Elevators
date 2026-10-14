import { z } from 'zod';

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),
  contactNumber: z
    .string()
    .trim()
    .min(10, { message: 'Please enter a valid phone number with at least 10 digits.' })
    .max(16, { message: 'Phone number cannot exceed 16 characters.' })
    .refine((val) => phoneRegex.test(val.replace(/\s+/g, '')), {
      message: 'Please enter a valid telephone number.',
    }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' })
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(150, { message: 'Subject cannot exceed 150 characters.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
