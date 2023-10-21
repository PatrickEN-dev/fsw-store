import Image from "next/image";
import Categories from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/ProductList";
import SectionTitle from "./components/SectionTitle";
import PromoBanner from "./components/PromoBanner";

export default async function Home() {
  const productDeals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyBoards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <main className="flex flex-col gap-8">
      <PromoBanner
        src={"/banner.svg"}
        alt={"até 55% de descontos só esse mês"}
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productDeals} />
      </div>

      <PromoBanner
        src={"/mouse-banner.svg"}
        alt={"até 55% de descontos em mouses"}
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyBoards} />
      </div>

      <PromoBanner
        src={"/headphone-banner.svg"}
        alt={"até 55% de descontos em mouses"}
      />
    </main>
  );
}
