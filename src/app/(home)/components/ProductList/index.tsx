import { mapArrayToProductItems } from "@/helpers/mapArrayToProductItem";
import { Product } from "@prisma/client";

interface IProductListProps {
  products: Product[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <section className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {mapArrayToProductItems(products)}
    </section>
  );
};

export default ProductList;
