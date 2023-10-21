import { Product } from "@prisma/client";

interface IProductWithTotalPrice extends Product {
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
  const totalPrice =
    Number(product.basePrice) * Number(product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
};
