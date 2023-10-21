import { getCategories } from "@/helpers/getCategoryPrisma";
import CategoryItem from "../CategoryItem";

const CategoryList = async () => {
  const categories = await getCategories();
  return (
    <ul className="grid grid-cols-2 gap-8">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
