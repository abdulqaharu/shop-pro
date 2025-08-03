import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({
  data: products,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? products?.slice(0, limit) : products;

  return (
    <div className="my-10">
      {title && <h2 className="h2-bold mb4">{title}</h2>}
      {limitedData?.length > 0 ? (
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData?.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
