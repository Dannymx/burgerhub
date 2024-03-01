import { ShoppingCart } from "@/components/shopping-cart";
import { ShoppingCartOrder } from "@/components/shopping-cart/shopping-cart-order";

export default function Cart() {
  return (
    <div className="flex flex-col bg-muted p-6 rounded-3xl gap-6">
      <h3 className="text-4xl text-center">Shopping Cart</h3>
      <ShoppingCart>
        <div className="flex items-center justify-center py-8">
          <ShoppingCartOrder />
        </div>
      </ShoppingCart>
    </div>
  );
}
