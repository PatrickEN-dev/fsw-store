import { Product } from "@prisma/client";

export interface IProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): IProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }
  const totalDiscount =
    Number(product.basePrice) * Number(product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
