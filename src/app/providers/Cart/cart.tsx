"use client";

import { IChildrenProps } from "@/@types/globals";
import { createContext } from "react";
import { ICartContext } from "./interfaces";

const cartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
});

export const CartProvider = ({ children }: IChildrenProps) => {
  return (
    <cartContext.Provider
      value={{
        products: [],
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
