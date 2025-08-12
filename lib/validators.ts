import { z } from "zod";
import { formatNumWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumWithDecimal(value)),
    "price must have 2 digits"
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 character"),
  slug: z.string().min(3, "Slug must be at least 3 character"),
  category: z.string().min(3, "Category must be at least 3 character"),
  brand: z.string().min(3, "Brand must be at least 3 character"),
  description: z.string().min(3, "Description must be at least 3 character"),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(3, "Product must must have at least one image"),
  isFeatured: z.boolean,
  banner: z.string().nullable(),
  price: currency,
});

// schema for signing user in
export const signInFormSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
// schema for signing up user
export const signUpFormSchema = z
  .object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(3, "Must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword']
  });
