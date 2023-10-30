import { Badge } from "@/components/ui/badge";
import { getProductDeals } from "@/helpers/getProductPrisma";
import { mapArrayToProductItems } from "@/helpers/mapArrayToProductItem";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const productDeals = await getProductDeals();

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {mapArrayToProductItems(productDeals)}
      </div>
    </div>
  );
};

export default DealsPage;
