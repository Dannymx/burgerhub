"use client";

import { useEffect } from "react";

import { useCartStore } from "@/lib/stores/cart";

export default function Checkout() {
  const cart = useCartStore();

  useEffect(() => {
    cart.clear();
  }, []);

  return (
    <div className="flex flex-col bg-muted p-6 rounded-3xl gap-6 text-center">
      <h3 className="text-4xl py-28">Thank you for your order!</h3>
    </div>
  );
}
