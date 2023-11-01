"use client";

import { IErrorProps } from "@/@types/globals";
import ErrorPage from "@/components/ErrorPage";

export default function Error({ reset }: IErrorProps) {
  return <ErrorPage reset={reset} />;
}
