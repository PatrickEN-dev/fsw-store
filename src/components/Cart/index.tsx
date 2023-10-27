import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useCart } from "@/hooks/useCart";
import CartItem from "../CartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "../ui/separator";
import formatPrice from "@/helpers/formatPrice";
import CartSummaryItem from "../CartSummaryItem";

const Cart = () => {
  const {
    products,
    subTotalProductPriceWithoutDiscount,
    totalProductDiscount,
    totalProductPriceWithDiscount,
  } = useCart();
  return (
    <section className="flex flex-col gap-8">
      <header>
        <Badge
          className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant={"outline"}
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </header>

      <main className="flex flex-col gap-5">
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
      </main>

      <div className="flex flex-col gap-3">
        <Separator />

        <CartSummaryItem
          label="Subtotal"
          value={formatPrice(subTotalProductPriceWithoutDiscount)}
        />

        <Separator />

        <CartSummaryItem label="Entrega" value="GRÁTIS" />

        <Separator />

        <CartSummaryItem
          label="Descontos"
          value={formatPrice(totalProductDiscount)}
        />

        <Separator />

        <CartSummaryItem
          label="Total"
          value={formatPrice(totalProductPriceWithDiscount)}
          isBold
        />
      </div>
    </section>
  );
};

export default Cart;
