import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useCart } from "@/hooks/useCart";
import CartItem from "../CartItem";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useCart();
  return (
    <div className=" flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Você ainda não adicionou um produto ao carrinho
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
