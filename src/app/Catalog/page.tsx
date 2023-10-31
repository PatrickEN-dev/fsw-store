import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import { getCategories } from "@/helpers/getCategoryPrisma";
import CategoryItem from "./components/CategoryItem";

const CatalogPage = async () => {
  const categories = await getCategories();
  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
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
