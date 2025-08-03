import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductImages from "@/components/ui/shared/product/product-images";
import ProductPrice from "@/components/ui/shared/product/product-price";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 items-start">
          {/* Images column */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* prodict details coumn */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand}
                {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 py-2 px-5"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* action column */}
          <Card className="py-0">
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Stock</div>
                {product.stock > 0 ? (
                  <Badge variant={"outline"}> {product.stock} Instock</Badge>
                ) : (
                  <Badge variant={"destructive"}> Out of stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full"> Add To Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
