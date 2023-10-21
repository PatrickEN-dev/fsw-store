import { CATEGORY_ICON } from "@/app/constants/categoryIcon";
import { Badge } from "@/components/ui/badge";
import { getCategorySlugProducts } from "@/helpers/getCategoryPrisma";
import { mapArrayToProductItems } from "@/helpers/mapArrayToProductItem";

const CategoryProducts = async ({ params }: any) => {
  const categorySlugProducts = await getCategorySlugProducts(params);
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.slug}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {mapArrayToProductItems(categorySlugProducts)}
      </div>
    </div>
  );
};

export default CategoryProducts;
