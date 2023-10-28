import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";

interface IOrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: IOrderItemProps) => {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p>Pedido com {order.orderProducts.length} produto(s)</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <span className="text-[#8162FF]">{order.status}</span>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
