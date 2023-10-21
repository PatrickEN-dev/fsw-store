import Image from "next/image";
import Categories from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/ProductList";

export default async function Home() {
  const productDeals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main>
      <Image
        className="h-auto w-full px-5"
        sizes="100vw"
        src="/banner.svg"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={productDeals} />
      </div>
    </main>
  );
}
