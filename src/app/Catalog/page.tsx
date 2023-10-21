import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoryList from "./components/CategoryList";

const CatalogPage = () => {
  return (
    <main className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <CategoryList />
    </main>
  );
};

export default CatalogPage;
