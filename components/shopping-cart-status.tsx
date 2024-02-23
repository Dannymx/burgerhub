"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { useCartStore } from "@/lib/stores/cart";

export const ShoppingCartStatus = () => {
  const products = useCartStore((state) => state.products);

  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/cart" className="relative">
        <ShoppingCart size={24} />
        {products.length ? (
          <Badge className="absolute -top-2 -right-2 px-1.5 bg-lime-600 dark:bg-lime-300">
            {products.length}
          </Badge>
        ) : null}
      </Link>
    </Button>
  );
};
