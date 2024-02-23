"use client";

import { Button } from "./ui/button";

import { useCartStore } from "@/lib/stores/cart";
import type { Product } from "@/lib/types/products";

type Props = {
  product: Product;
};

export const AddToCart = ({ product }: Props) => {
  const cart = useCartStore();

  return (
    <Button
      className="bg-muted-foreground rounded-full text-xl p-6 px-10"
      onClick={() => cart.addToCart(product)}
    >
      Add to cart
    </Button>
  );
};
