import Categories from "./components/Categories";
import ProductList from "../../components/ProductList";
import SectionTitle from "./components/SectionTitle";
import PromoBanner from "./components/PromoBanner";
import {
  getKeyboards,
  getMouses,
  getProductDeals,
} from "@/helpers/getProductPrisma";

export default async function Home() {
  const productDeals = await getProductDeals();
  const keyBoards = await getKeyboards();
  const mouses = await getMouses();

  return (
    <main className="flex flex-col gap-8 py-8">
      <PromoBanner
        src={"/banner.svg"}
        alt={"até 55% de descontos só esse mês"}
      />

      <div className="px-5">
        <Categories />
      </div>

      <section>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productDeals} />
      </section>

      <PromoBanner
        src={"/mouse-banner.svg"}
        alt={"até 55% de descontos em mouses"}
      />

      <section>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyBoards} />
      </section>

      <PromoBanner
        src={"/headphone-banner.svg"}
        alt={"até 55% de descontos em mouses"}
      />

      <section>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </section>
    </main>
  );
}
