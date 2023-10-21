import { IslugParams } from "@/@types/globals";
import { getProductBySlug } from "@/helpers/getProductPrisma";
import ProductImages from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ProductList";

const ProductDetailPage = async ({ params: { slug } }: IslugParams) => {
  const productBySlug = await getProductBySlug(slug);

  if (!productBySlug) return null;
  return (
    <div className="flex flex-col gap-5 pb-8">
      <ProductImages
        name={productBySlug.name}
        imageUrls={productBySlug.imageUrls}
      />
      <ProductInfo product={computeProductTotalPrice(productBySlug)} />
      <ProductList products={productBySlug.category.Products} />
    </div>
  );
};

export default ProductDetailPage;
