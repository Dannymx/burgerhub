import type { z } from "zod";

import type { productSchema } from "@/schema/products";

export type Product = z.infer<typeof productSchema>;

export type ProductInCart = Product & { qty: number };
