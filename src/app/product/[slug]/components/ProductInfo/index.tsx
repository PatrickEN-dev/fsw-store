"use client";

import ChangeQuantityButton from "@/components/ChangeQuantityButton";
import DiscountBadge from "@/components/DiscountBadge";
import ProductPrice from "@/components/ProductBasePrice";
import { Button } from "@/components/ui/button";
import formatPrice from "@/helpers/formatPrice";
import { IProductWithTotalPrice } from "@/helpers/product";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/hooks/useProduct";
import { TruckIcon } from "lucide-react";
import { toast } from "react-toastify";

interface IProductInfoProps {
  product: IProductWithTotalPrice;
}

const ProductInfo = ({ product }: IProductInfoProps) => {
  const { addProductToCart } = useCart();
  const { quantity } = useProduct();

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });

    toast.success("Produto adicionado ao carrinho", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      pauseOnHover: false,
    });
  };

  return (
    <div className="flex flex-col px-5">
      <h1 className="text-lg">{product.name}</h1>
      <span className="flex items-center gap-1">
        <h2 className="gap-2 text-2xl font-bold">
          {formatPrice(product.totalPrice)}
        </h2>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </span>
      {product.discountPercentage > 0 && (
        <ProductPrice
          price={Number(product.basePrice)}
          className="text-sm line-through opacity-75"
        />
      )}

      <ChangeQuantityButton mainDivClassName="mt-4 flex items-center gap-2" />

      <section className="mt-8 flex flex-col gap-3">
        <h3 className="text-base font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </section>

      <Button
        onClick={handleAddToCartClick}
        className="mt-8 font-bold uppercase"
      >
        Adicionar ao carrinho
      </Button>

      <section className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className=" flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <h3 className="text-xs">
              Entrega via <span className="font-semibold">FSPacket®</span>
            </h3>
            <legend className="text-xs text-[#8162FF]">
              Envio para <span className="font-semibold">todo o Brasil</span>
            </legend>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </section>
    </div>
  );
};

export default ProductInfo;
