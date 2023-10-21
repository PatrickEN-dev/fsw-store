import { IProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowDown01Icon } from "lucide-react";

interface IProductItemProps {
  product: IProductWithTotalPrice;
}

const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDown01Icon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <span className="flex flex-col gap-2">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                R${product.totalPrice.toFixed(2)}
              </p>

              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                R${Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
              R${product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </span>
    </div>
  );
};

export default ProductItem;
