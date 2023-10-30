import { Prisma } from "@prisma/client";
import OrderItem from "../../items/OrderItem";
interface IOrderListProps {
  orders: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>[];
}

const OrderList = ({ orders }: IOrderListProps) => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
