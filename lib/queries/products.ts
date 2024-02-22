import { menuSchema } from "@/schema/products";

export const getProductData = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}/data/products.json`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return menuSchema.parse(data);
};
