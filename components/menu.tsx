import { ProductCard } from "./product-card";

import type { Product } from "@/lib/types/products";

type Props = {
  products: Array<Product>;
};

export const Menu = ({ products }: Props) => (
  <>
    {products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </>
);
