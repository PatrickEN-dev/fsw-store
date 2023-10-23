"use client";

import { IChildrenProps } from "@/@types/globals";
import { createContext, useState } from "react";
import { ICartContext, ICartProduct } from "./interfaces";

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

export const CartProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);

  const addProductToCart = (product: ICartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
