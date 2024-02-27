import { ProductCard } from "@/components/product-card";
import { getProductData } from "@/lib/queries/products";

export type Props = {
  searchParams: { q: string };
};

export default async function Home({ searchParams }: Props) {
  // This runs on the server
  const menu = await getProductData(searchParams.q);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
      {menu.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
