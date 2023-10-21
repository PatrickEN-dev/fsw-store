import { prismaClient } from "@/lib/prisma";

export async function getProductDeals() {
  return await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
}

export async function getKeyboards() {
  return await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
}

export async function getMouses() {
  return await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
}
