import { getCategories } from "@/helpers/getCategoryPrisma";
import CategoryItem from "./components/CategoryItem";
import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";

const CatalogPage = async () => {
  const categories = await getCategories();
  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <ul className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>

      {/* <CategoryList /> */}
    </main>
  );
};

export default CatalogPage;
