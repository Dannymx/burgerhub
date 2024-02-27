"use client";

import type { ReactNode } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

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
        <div
          key={product.id}
          className="flex justify-between gap-4 h-[80px] text:md sm:text-xl"
        >
          <div className="gap-2 sm:gap-8 items-center flex-row flex grow w-1/2">
            <div className="rounded-full aspect-square relative h-2/3 sm:h-full overflow-hidden">
              <Image
                src={`${product.image}?fit=crop&w=200`}
                className="object-cover"
                alt={`Image of ${product.name}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                fill
              />
            </div>
            <span>
              {product.name} ({product.qty})
            </span>
          </div>
          <div className="gap-8 items-center justify-end flex-row flex">
            <span>${(product.price * product.qty) / 100}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => cart.delete(product)}
            >
              <Trash2 size={24} />
            </Button>
          </div>
        </div>
      ))}
      <p className="text-2xl text-right">Your total is: ${total / 100}</p>
      {children}
    </div>
  );
};
