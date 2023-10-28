import { prismaClient } from "@/lib/prisma";
import { ICartProduct } from "@/providers/cart/interfaces";
import { Session } from "next-auth";

export const createPrismaOrder = async (
  cartProducts: ICartProduct[],
  userId: string,
) => {
  return await prismaClient.order.create({
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

export const getuserOrders = async (session: any) => {
  return await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
};
