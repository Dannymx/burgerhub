import { Menu } from "@/components/menu";
import { getProductData } from "@/lib/queries/products";

export default async function Home() {
  // This runs on the server
  const menu = await getProductData();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Menu products={menu.products} />
    </div>
  );
}
