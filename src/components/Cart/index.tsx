import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useCart } from "@/hooks/useCart";
import CartItem from "../CartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "../ui/separator";
import formatPrice from "@/helpers/formatPrice";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";
import SummaryItem from "../SummaryItem";

const Cart = () => {
  const { data } = useSession();
  const {
    products,
    subTotalProductPriceWithoutDiscount,
    totalProductDiscount,
    totalProductPriceWithDiscount,
  } = useCart();

  const handleFinishPourchaseClick = async () => {
    // TODO: redirecionar para o login
    if (!data?.user) return alert("Você precisa fazer login para continuar");

    const order = await createOrder(products, (data?.user as User).id);

    const checkout = await createCheckout(products, order.id);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };
  return (
    <section className="flex h-full flex-col gap-8">
      <header>
        <Badge
          className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant={"outline"}
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </header>

      <main className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="mt-10 text-center font-semibold">
                Você ainda não adicionou produtos ao carrinho
              </p>
            )}
          </div>
        </ScrollArea>
      </main>

      {products.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            <Separator />

            <SummaryItem
              label="Subtotal"
              value={formatPrice(subTotalProductPriceWithoutDiscount)}
            />

            <Separator />

            <SummaryItem label="Entrega" value="GRÁTIS" />

            <Separator />

            <SummaryItem
              label="Descontos"
              value={formatPrice(totalProductDiscount)}
            />

            <Separator />

            <SummaryItem
              label="Total"
              value={formatPrice(totalProductPriceWithDiscount)}
              isBold
            />
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPourchaseClick}
          >
            Finalizar compra
          </Button>
        </>
      )}
    </section>
  );
};

export default Cart;
