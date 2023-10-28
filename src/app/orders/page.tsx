import { Badge } from "@/components/ui/badge";
import { getuserOrders } from "@/helpers/order.prisma";
import { authOptions } from "@/lib/auth";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderList from "./OrderList";

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
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
