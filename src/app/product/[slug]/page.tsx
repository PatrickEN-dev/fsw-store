import { IslugParams } from "@/@types/globals";
import { getProductBySlug } from "@/helpers/getProductPrisma";

const ProductDetailPage = async ({ params: { slug } }: IslugParams) => {
  const productBySlug = await getProductBySlug(slug);

  if (!productBySlug) return null;
  return <div>{productBySlug.name}</div>;
};

export default ProductDetailPage;
