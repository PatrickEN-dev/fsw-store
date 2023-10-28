import { OrderProduct } from "@prisma/client";
import OrderProductItem from "../../items/OrderProductItem";

interface IOrderProductItemListProps {
  orderProducts: OrderProduct[];
}

const OrderProductItemList = ({
  orderProducts,
}: IOrderProductItemListProps) => {
  return (
    <ul className="mt-3">
      {orderProducts.map((orderProduct: any) => (
        <OrderProductItem key={orderProduct.id} orderProduct={orderProduct} />
      ))}
    </ul>
  );
};

export default OrderProductItemList;
