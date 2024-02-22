import Image from "next/image";
import Link from "next/link";
import type { z } from "zod";

import type { productSchema } from "@/schema/products";

type Props = {
  product: z.infer<typeof productSchema>;
};

export const ProductCard = ({ product }: Props) => (
  <div className="flex">
    <Link href={`/product/${product.slug}`} className="flex flex-col grow">
      <div className="aspect-square relative rounded-t-lg overflow-hidden">
        <Image
          src={`${product.image}?fit=crop&w=500&h=500`}
          className="object-cover object-center hover:scale-110 transition duration-300"
          alt={`Image of ${product.name}`}
          fill
        />
      </div>
      <div className="p-4 bg-muted rounded-b-lg grow">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-muted-foreground font-bold">
          ${product.price / 100}
        </p>
        <p className="text-sm">{product.description}</p>
      </div>
    </Link>
  </div>
);
