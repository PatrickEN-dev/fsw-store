import { IProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "../DiscountBadge";

interface IProductItemProps {
  product: IProductWithTotalPrice;
}

const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
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
            <DiscountBadge className="absolute left-2 top-2">
              {product.discountPercentage}
            </DiscountBadge>
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
    </Link>
  );
};

export default ProductItem;
