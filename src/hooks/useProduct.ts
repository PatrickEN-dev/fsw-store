"use client";

import { ProductContext } from "@/app/providers/Product/product.context";
import { useContext } from "react";

export const useProduct = () => useContext(ProductContext);
