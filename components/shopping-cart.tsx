"use client";

import type { ReactNode } from "react";
import { ShoppingCartItem } from "./shopping-cart/shopping-cart-item";

import { useCartStore } from "@/lib/stores/cart";

export const ShoppingCart = ({ children }: { children: ReactNode }) => {
  const cart = useCartStore((state) => state);

  // Wait for state to be hydrated from localstorage
  if (!cart.hasHydrated)
    return <h1 className="text-center">Loading your cart...</h1>;

  if (!cart.products.length)
    return <h1 className="text-center">Your shopping cart is empty</h1>;

  const total = cart.products.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0,
  );

  return (
    <div className="flex flex-col gap-8 w-full sm:w-4/5 self-center">
      {cart.products.map((product) => (
        <ShoppingCartItem product={product} cart={cart} key={product.id} />
      ))}
      <p className="text-2xl text-right">Your total is: ${total / 100}</p>
      {children}
    </div>
  );
};
