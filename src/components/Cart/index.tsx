import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { products } = useCart();
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
