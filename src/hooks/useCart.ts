"use client";

import { CartContext } from "@/providers/cart/cart.context";
import { useContext } from "react";

export const useCart = () => useContext(CartContext);
