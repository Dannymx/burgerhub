import { Suspense } from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SearchBox } from "./search";
import { ShoppingCartStatus } from "./shopping-cart-status";
import { ThemeSelector } from "./theme-selector";
import { UserStatus } from "./user-status";

export const Navigation = () => (
  <div className="flex flex-col sm:flex-row justify-between">
    <div className="flex flex-row justify-center items-center gap-4">
      <h1 className="uppercase font-bold text-xl text-lime-600 dark:text-lime-300">
        Burger
      </h1>
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <Home size={24} />
        </Link>
      </Button>
    </div>
    <div className="flex flex-row justify-center items-center gap-4">
      <ThemeSelector />
      <div className="relative flex items-center order-first sm:order-none flex-grow">
        <Suspense>
          <SearchBox />
        </Suspense>
      </div>
      <ShoppingCartStatus />
      <UserStatus />
    </div>
  </div>
);
