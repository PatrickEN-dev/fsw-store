import ProductItem from "@/components/ProductItem";
import { Product } from "@prisma/client";
import { computeProductTotalPrice } from "./product";

export function mapArrayToProductItems(
  dataArray: Product[],
): React.ReactNode[] {
  return dataArray.map((data) => (
    <ProductItem key={data.id} product={computeProductTotalPrice(data)} />
  ));
}
