import { Home, Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { ThemeSelector } from "./theme-selector";

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-center items-center gap-4">
        <h1 className="uppercase font-bold text-xl">Burger</h1>
        <Home size={24} />
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <ThemeSelector />
        <div className="relative flex items-center">
          <Search className="absolute left-2 text-muted-foreground" size={20} />
          <Input
            className="pl-8 text-md"
            placeholder="Type to search"
            size={18}
          />
        </div>
        <ShoppingCart size={24} />
      </div>
    </div>
  );
};
