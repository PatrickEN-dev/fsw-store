"use server";

import { createPrismaOrder } from "@/helpers/order.prisma";
import { ICartProduct } from "@/providers/cart/interfaces";

export const createOrder = async (
  cartProduct: ICartProduct[],
  userId: string,
) => {
  const order = await createPrismaOrder(cartProduct, userId);
  return order;
};
