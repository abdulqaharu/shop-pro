import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import React from "react";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function page() {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="New Arrivals" limit={4} />
    </div>
  );
}
