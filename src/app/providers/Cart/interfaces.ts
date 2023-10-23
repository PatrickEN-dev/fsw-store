import { Product } from "@prisma/client";

export interface ICartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  products: ICartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: ICartProduct) => void;
}
