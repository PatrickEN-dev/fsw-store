"use client";

import { IChildrenProps } from "@/@types/globals";
import { createContext, useEffect, useMemo, useState } from "react";
import { ICartContext, ICartProduct } from "./interfaces";

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subTotalProductPriceWithoutDiscount: 0,
  totalProductPriceWithDiscount: 0,
  totalProductDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const PRODUCTS_STORAGE_KEY = '@fsw-store/products';

export const CartProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState<ICartProduct[]>(() => {
    if (typeof window !== 'undefined') {
      const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      return storedProducts ? JSON.parse(storedProducts) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
  
    if (isBrowser) {
      const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(parsedProducts);
      }
    }
  }, []);

  const subTotalProductPriceWithoutDiscount = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const totalProductPriceWithDiscount = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0);
  }, [products]);

  const totalProductDiscount =
    totalProductPriceWithDiscount - subTotalProductPriceWithoutDiscount;

  const addProductToCart = (product: ICartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        subTotalProductPriceWithoutDiscount,
        totalProductPriceWithDiscount,
        totalProductDiscount,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};