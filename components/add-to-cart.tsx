"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

import { useCartStore } from "@/lib/stores/cart";
import type { Product } from "@/lib/types/products";

type Props = {
  product: Product;
};

export const AddToCart = ({ product }: Props) => {
  const cart = useCartStore();

  const handleAddToCart = () => {
    cart.addToCart(product);

    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Button
      className="bg-muted-foreground rounded-full text-xl p-6 px-10"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
};
