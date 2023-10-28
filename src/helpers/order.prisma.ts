import { prismaClient } from "@/lib/prisma";
import { ICartProduct } from "@/providers/cart/interfaces";

export const createPrismaOrder = async (
  cartProducts: ICartProduct[],
  userId: string,
) => {
  await prismaClient.order.create({
    data: {
      userId,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
};
