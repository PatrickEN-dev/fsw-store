"use client";

import ChangeQuantityButton from "@/components/ChangeQuantityButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface IProductInfoProps {
  product: Pick<
    IProductWithTotalPrice,
    "basePrice" | "discountPercentage" | "description" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: IProductInfoProps) => {
  return (
    <div className="flex flex-col px-5">
      <h1 className="text-lg">{name}</h1>
      <span className="flex items-center gap-1">
        <h2 className="gap-2 text-2xl font-bold">{totalPrice.toFixed(2)}</h2>
        {discountPercentage > 0 && (
          <Badge className="left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {discountPercentage}%
          </Badge>
        )}
      </span>
      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R${Number(basePrice).toFixed(2)}
        </p>
      )}

      <ChangeQuantityButton />

      <section className="mt-8 flex flex-col gap-3">
        <h3 className="text-base font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </section>

      <Button className="mt-8 font-bold uppercase">
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
