import type { z } from "zod";
import { ProductCard } from "./product-card";

import type { productSchema } from "@/schema/products";

type Props = {
  products: Array<z.infer<typeof productSchema>>;
};

export const Menu = ({ products }: Props) => (
  <div className="grid grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
);
