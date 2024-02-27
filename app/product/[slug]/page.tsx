import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ShoppingCartAdd } from "@/components/shopping-cart-add";
import { getProductData } from "@/lib/queries/products";

export const dynamicParams = true;

export default async function Product({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Find the current product by slug
  const product = (await getProductData()).find((item) => item.slug === slug);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="flex flex-col bg-muted p-6 rounded-3xl gap-6">
      <Link
        className="flex flex-row max-w-max items-center text-xl gap-2"
        href="/"
      >
        <ArrowLeft className="inline-block" size={28} /> Go Back
      </Link>
      <div className="w-full sm:w-4/5 self-center gap-2 flex flex-col">
        <div className="aspect-video overflow-hidden rounded-2xl relative">
          <Image
            src={`${product.image}?fit=crop&w=800`}
            className="object-cover"
            alt={`Image of ${product.name}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
          />
        </div>
        <h3 className="text-4xl text-center">{product.name}</h3>
        <p>${product.price / 100}</p>
        <p>{product.description}</p>
        <p>Nutrition: {product.calorie} calories</p>
        <div className="flex items-center justify-center py-8">
          <ShoppingCartAdd product={product} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const menu = await getProductData();

  return menu.map((product) => ({ slug: product.slug }));
}
