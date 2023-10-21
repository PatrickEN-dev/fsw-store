import { prismaClient } from "@/lib/prisma";

export async function getCategories() {
  return await prismaClient.category.findMany();
}

export async function getCategorySlugProducts(params: any) {
  return await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });
}
