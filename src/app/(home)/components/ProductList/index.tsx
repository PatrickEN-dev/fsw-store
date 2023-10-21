import ProductItem from "@/components/ProductItem";
import { Product } from "@prisma/client";

interface IProductListProps {
  products: Product[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <section className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
