import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItemList from "../../lists/OrderProductItemList";
import { Separator } from "@/components/ui/separator";
import SummaryItem from "@/components/SummaryItem";
import formatPrice from "@/helpers/formatPrice";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import { getOrderStatus } from "@/app/orders/helpers/status";

export interface IOrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: IOrderItemProps) => {
  const orderSubtotalPrice = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const orderTotalPrice = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      const productTotalPrice = computeProductTotalPrice(orderProduct.product);

      return acc + productTotalPrice.totalPrice * orderProduct.quantity;
    }, 0);
  }, [order.orderProducts]);

  const orderTotalDiscounts = orderTotalPrice - orderSubtotalPrice;

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <h3 className="font-bold uppercase">
                Pedido com {order.orderProducts.length} produto(s)
              </h3>
              <span className="text-sm font-bold opacity-60">
                Feito em {format(order.createdAt, "dd/MM/yyyy 'às' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <section className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <span className="text-[#8162FF]">
                    {getOrderStatus(order.status)}
                  </span>
                </div>
                <div>
                  <p className="font-bold">Data</p>
                  <span className="opacity-60">
                    {format(order.createdAt, "dd/MM/yyyy")}
                  </span>
                </div>

                <div>
                  <p className="font-bold">Pagamento</p>
                  <span className="opacity-60">Cartão</span>
                </div>
              </div>
              <OrderProductItemList orderProducts={order.orderProducts} />
            </section>

            <div className="flex w-full flex-col gap-1 text-xs">
              <Separator />

              <SummaryItem
                label="Subtotal"
                value={formatPrice(orderSubtotalPrice)}
                extraClasses="py-3 lg:text-sm w-full"
              />

              <Separator />

              <SummaryItem
                label="Entrega"
                value="FRETE GRÁTIS"
                extraClasses="py-3 lg:text-sm w-full"
              />

              <Separator />

              <SummaryItem
                label="Descontos"
                value={formatPrice(orderTotalDiscounts)}
                extraClasses="py-3 lg:text-sm w-full"
              />

              <Separator />

              <SummaryItem
                label={"Total"}
                value={formatPrice(orderTotalPrice)}
                extraClasses="text-sm font-bold lg:text-base"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
