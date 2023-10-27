"use client";

import { ProductContext } from "@/providers/product/product.context";
import { useContext } from "react";

export const useProduct = () => useContext(ProductContext);
