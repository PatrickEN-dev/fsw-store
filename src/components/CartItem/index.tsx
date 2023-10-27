import Image from "next/image";
import ProductPrice from "../ProductBasePrice";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { ICartProduct } from "@/providers/cart/interfaces";

interface ICartItemProps {
  product: ICartProduct;
}

const CartItem = ({ product }: ICartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <article className="flex items-center justify-between">
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
          <h2 className="text-xs">{product.name}</h2>

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
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant="outline" onClick={handleRemoveProductClick}>
        <TrashIcon size={16} />
      </Button>
    </article>
  );
};

export default CartItem;
