import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

import { type CartState } from "@/lib/stores/cart";
import type { ProductInCart } from "@/lib/types/products";

type Props = {
  product: ProductInCart;
  cart: CartState;
};

export const ShoppingCartItem = ({ product, cart }: Props) => {
  const onQtyChange = (qty: number) => {
    if (qty === 0) {
      // cart.delete(product); // Or do nothing since we're deleting with the trash icon
    } else {
      cart.update(product, qty);
    }
  };

  return (
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
      <div className="gap-4 items-center justify-end flex-row flex">
        <span>${(product.price * product.qty) / 100}</span>
        <div className="gap-1 flex">
          <Button
            className="inline-flex p-0 aspect-square items-center justify-center"
            disabled={product.qty === 1 ?? false}
            onClick={() => onQtyChange(product.qty - 1)}
          >
            <Minus size={24} />
          </Button>
          <Button
            className="inline-flex p-0 aspect-square items-center justify-center"
            onClick={() => onQtyChange(product.qty + 1)}
          >
            <Plus size={24} />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => cart.delete(product)}
        >
          <Trash2 size={24} />
        </Button>
      </div>
    </div>
  );
};
