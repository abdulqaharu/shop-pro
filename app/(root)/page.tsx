import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";
import React from "react";

type Props = {};
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function page({}: Props) {
  const latestProducts = await getLatestProducts();
  console.log("latest products", latestProducts);

  return (
    <div>
      <ProductList data={latestProducts} title="New Arrivals" limit={4} />
    </div>
  );
}
