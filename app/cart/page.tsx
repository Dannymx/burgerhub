import { ShoppingCart } from "@/components/shopping-cart";

export default function Cart() {
  return (
    <div className="flex flex-col bg-muted p-6 rounded-3xl gap-6">
      <h3 className="text-4xl text-center">Shopping Cart</h3>
      <ShoppingCart />
    </div>
  );
}
