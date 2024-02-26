import Link from "next/link";
import { Button } from "./ui/button";

import { auth } from "@/auth";
import { signInAction } from "@/lib/actions/auth";

export const ShoppingCartOrder = async () => {
  const session = await auth();

  if (session)
    return (
      <Button
        className="bg-muted-foreground rounded-full text-xl p-6 px-10 bg-lime-600 dark:bg-lime-300"
        asChild
      >
        <Link href="/checkout">Order</Link>
      </Button>
    );

  return (
    <form action={signInAction}>
      <Button className="bg-muted-foreground rounded-full text-xl p-6 px-10 ">
        Sign in to Order
      </Button>
    </form>
  );
};
