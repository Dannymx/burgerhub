import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  calorie: z.number(),
  slug: z.string(),
});

export const menuSchema = z.object({
  products: z.array(productSchema),
});
