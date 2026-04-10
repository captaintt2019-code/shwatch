import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(1).max(80),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(20)
    .regex(/^[+()\-\s\d]+$/),
  brand: z.string().trim().max(80).optional(),
  model: z.string().trim().max(120).optional(),
  issue: z.string().trim().max(1200).optional(),
  locale: z.enum(["zh-CN", "zh-TW", "en"]),
});

export type BookingPayload = z.infer<typeof bookingSchema>;
