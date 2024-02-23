import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductInCart } from "../types/products";

type CartState = {
  products: Array<ProductInCart>;
  add: (product: Product, qty?: number) => void;
  delete: (product: Product) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      products: [],
      add: (product, qty = 1) =>
        set((state) => {
          // We could make this better by switching to a O(1) Map, but for now this is sufficient
          const productInCart = state.products.find(
            (item) => item.id === product.id,
          );

          // If we already have this product in the cart, update its qty
          if (productInCart) {
            const updatedProducts = state.products.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + qty } : item,
            );

            return { products: updatedProducts };
          }

          // If not present, just add it with the requested qty
          return { products: [...state.products, { ...product, qty }] };
        }),
      delete: (product) =>
        set((state) => {
          const updatedProducts = state.products.filter(
            (item) => item.id !== product.id,
          );

          return { products: [...updatedProducts] };
        }),
    }),
    {
      name: "cart",
    },
  ),
);
