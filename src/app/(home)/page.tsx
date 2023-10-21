import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="p-5">
      <Image
        className="h-auto w-full"
        sizes="100vw"
        src="/banner.svg"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
      />

      <div className="mt-8">
        <Categories />
      </div>
    </main>
  );
}
