import Fuse from "fuse.js";

import { menuSchema } from "@/schema/products";

export const getProductData = async (query?: string) => {
  const res = await fetch(`${process.env.API_ENDPOINT}/data/products.json`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const menu = menuSchema.parse(await res.json());

  if (query && query.length) {
    const result = new Fuse(menu.products, {
      keys: ["name"],
      threshold: 0.5,
    })
      .search(query)
      .map((match) => match.item);

    return result;
  }

  return menu.products;
};
