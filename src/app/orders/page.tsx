import { Badge } from "@/components/ui/badge";
import { getuserOrders } from "@/helpers/order.prisma";
import { authOptions } from "@/lib/auth";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderList from "./components/lists/OrderList";
import ErrorMessage from "@/components/ErrorMessage";

export const dynamic = "force-dynamic";

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <ErrorMessage
        firstMessage={"Acesso negado!"}
        secondMessage={"Faça login para ver seus pedidos"}
      />
    );
  }

  const orders = await getuserOrders(session);

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <PackageSearchIcon size={16} />
        Meus pedidos
      </Badge>

      <OrderList orders={orders} />
    </div>
  );
};

export default OrderPage;
