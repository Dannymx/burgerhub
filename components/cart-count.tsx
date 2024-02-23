"use client";

import { Badge } from "./ui/badge";

import { useCartStore } from "@/lib/stores/cart";

export const CartCount = () => {
  const products = useCartStore((state) => state.products);

  return (
    <Badge className="absolute -top-2 -right-2 px-1.5 bg-lime-600 dark:bg-lime-300">
      {products.length}
    </Badge>
  );
};
