import { z } from 'zod';
import { BUILDING_TYPES, PRODUCT_SERVICE_OPTIONS } from '@/types/quote';

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export const quotationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),
  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: 'Please enter a valid phone number with at least 10 digits.' })
    .max(16, { message: 'Phone number cannot exceed 16 characters.' })
    .refine((val) => phoneRegex.test(val.replace(/\s+/g, '')), {
      message: 'Please enter a valid contact phone number (e.g. +91 9876543210).',
    }),
  productOrService: z.enum(PRODUCT_SERVICE_OPTIONS, {
    errorMap: () => ({ message: 'Please select a valid product or service.' }),
  }),
  buildingType: z.union([z.enum(BUILDING_TYPES), z.literal('')]).optional(),
  projectLocation: z
    .string()
    .trim()
    .max(150, { message: 'Location cannot exceed 150 characters.' })
    .optional(),
  requirements: z
    .string()
    .trim()
    .max(1000, { message: 'Requirements cannot exceed 1000 characters.' })
    .optional(),
});

export type QuotationSchemaType = z.infer<typeof quotationSchema>;
