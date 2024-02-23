"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cart";

export default function Cart() {
  const cart = useCartStore();

  return (
    <div className="flex flex-col bg-muted p-6 rounded-3xl gap-6">
      <h3 className="text-4xl text-center">Shopping Cart</h3>
      {cart.products.length ? (
        <div className="flex flex-col gap-8 w-4/5 self-center">
          {cart.products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between gap-4 h-[80px] "
            >
              <div className="gap-8 items-center flex-row flex grow w-1/2">
                <div className="rounded-full aspect-square relative h-full overflow-hidden">
                  <Image
                    src={`${product.image}?fit=crop&w=200`}
                    className="object-cover"
                    alt={`Image of ${product.name}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    fill
                  />
                </div>
                <span className="text-xl">
                  {product.name} ({product.qty})
                </span>
              </div>
              <div className="gap-8 items-center justify-end flex-row flex">
                <span className="text-xl">
                  ${(product.price * product.qty) / 100}
                </span>
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
        </div>
      ) : (
        <h1 className="text-center">Your shopping cart is empty</h1>
      )}
    </div>
  );
}
