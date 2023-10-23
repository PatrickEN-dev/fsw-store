"use client";

import { CartContext } from "@/app/providers/Cart/cart.context";
import { useContext } from "react";

export const useCart = () => useContext(CartContext);
