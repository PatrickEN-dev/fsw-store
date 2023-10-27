import { IProductWithTotalPrice } from "@/helpers/product";

export interface ICartProduct extends IProductWithTotalPrice {
  quantity: number;
}

export interface ICartContext {
  products: ICartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subTotalProductPriceWithoutDiscount: number;
  totalProductPriceWithDiscount: number;
  totalProductDiscount: number;
  addProductToCart: (product: ICartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}
