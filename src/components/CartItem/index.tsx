import { ICartProduct } from "@/app/providers/Cart/interfaces";
import Image from "next/image";
import ProductPrice from "../ProductBasePrice";
import ChangeQuantityButton from "../ChangeQuantityButton";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";

interface ICartItemProps {
  product: ICartProduct;
}

const CartItem = ({ product }: ICartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <figure className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </figure>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <ProductPrice
              price={product.totalPrice}
              className="text-sm font-bold"
            />
            {product.discountPercentage > 0 && (
              <ProductPrice
                price={Number(product.basePrice)}
                className="text-xs line-through opacity-75"
              />
            )}
          </div>
          <ChangeQuantityButton />
        </div>
      </div>
      <Button size={"icon"} variant={"outline"}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
