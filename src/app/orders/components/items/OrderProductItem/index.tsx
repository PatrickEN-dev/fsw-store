import formatPrice from "@/helpers/formatPrice";
import { computeProductTotalPrice } from "@/helpers/product";
import { OrderProduct, Prisma } from "@prisma/client";
import Image from "next/image";

interface IOrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: IOrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);
  return (
    <li className="flex items-center gap-4">
      <figure className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={orderProduct.product.name}
        />
      </figure>

      <section className="flex w-full flex-col gap-1 lg:gap-2">
        <header className="flex w-fit rounded-md bg-accent px-3 py-1">
          <p className="text-[10px] lg:text-xs">
            Vendido e entregue por <span className="font-bold">FSW Store</span>
          </p>
        </header>

        <p className="text-xs lg:text-sm">{orderProduct.product.name}</p>

        <div className="flex w-full items-center justify-between gap-1">
          <aside className="bottom-0 flex items-center justify-center gap-1 text-right lg:absolute lg:right-0 lg:top-0 lg:my-auto lg:flex-col lg:items-end">
            <p className="text-sm font-bold lg:text-xl">
              {formatPrice(productWithTotalPrice.totalPrice)}
            </p>

            {productWithTotalPrice.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-60 lg:text-sm">
                {formatPrice(Number(productWithTotalPrice.basePrice))}
              </p>
            )}
          </aside>

          <p className="text-xs opacity-60 lg:hidden">
            Quantidade: {orderProduct.quantity}
          </p>
          <p className="hidden text-sm opacity-60 lg:block">
            Quantidade: {orderProduct.quantity}
          </p>
        </div>
      </section>
    </li>
  );
};

export default OrderProductItem;
