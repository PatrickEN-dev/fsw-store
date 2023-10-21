import { Product } from "@prisma/client";
import Image from "next/image";

interface IProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[170px] w-[156px] max-w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <span>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
      </span>
    </div>
  );
};

export default ProductItem;
