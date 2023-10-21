import { IslugParams } from "@/@types/globals";
import { getProductBySlug } from "@/helpers/getProductPrisma";
import ProductImages from "./components/ProductImage";

const ProductDetailPage = async ({ params: { slug } }: IslugParams) => {
  const productBySlug = await getProductBySlug(slug);

  if (!productBySlug) return null;
  return (
    <div>
      <ProductImages
        name={productBySlug.name}
        imageUrls={productBySlug.imageUrls}
      />
    </div>
  );
};

export default ProductDetailPage;
