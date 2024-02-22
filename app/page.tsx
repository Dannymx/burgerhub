import { Navigation } from "../components/navigation";

import { Menu } from "@/components/menu";
import { menuSchema } from "@/schema/products";

export default async function Home() {
  // This runs on the server
  const getData = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}/data/products.json`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  };

  const menu = menuSchema.parse(await getData());

  return (
    <main className="container max-w-screen-lg py-6 flex flex-col gap-8">
      <Navigation />
      <Menu products={menu.products} />
    </main>
  );
}
