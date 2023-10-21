import { CATEGORY_ICON } from "@/app/constants/categoryIcon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

interface ICategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItemProps) => {
  return (
    <Badge
      variant={"outline"}
      className="flex items-center justify-center gap-3 rounded-lg py-2"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
