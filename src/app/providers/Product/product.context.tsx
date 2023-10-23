"use client";

import { createContext, useState } from "react";
import { IProductContext } from "./interfaces";
import { IChildrenProps } from "@/@types/globals";

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext,
);

export const ProductProvider = ({ children }: IChildrenProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ProductContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};
