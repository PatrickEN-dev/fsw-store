import { prismaClient } from "@/lib/prisma";

export async function getCategories() {
  return await prismaClient.category.findMany();
}
