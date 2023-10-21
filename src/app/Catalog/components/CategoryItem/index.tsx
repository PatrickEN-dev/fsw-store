import { Category } from "@prisma/client";
import Image from "next/image";

interface ICategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItemProps) => {
  return (
    <li className="flex flex-col">
      <figure className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes={"100vw"}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </figure>

      <span className="rounded-bl-lg rounded-br-lg bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </span>
    </li>
  );
};

export default CategoryItem;
