import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItems";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
