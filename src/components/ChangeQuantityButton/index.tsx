"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useProduct } from "@/hooks/useProduct";
import { twMerge } from "tailwind-merge";

interface IChangeQuantityButtonProps {
  mainDivClassName?: string;
  decreaseButtonClassName?: string;
  increaseButtonClassName?: string;
  spanClassName?: string;
  ArrowLeftIconClassName?: string;
  ArrowRightIconClassName?: string;
  props?: any;
}

const ChangeQuantityButton = ({
  mainDivClassName,
  decreaseButtonClassName,
  increaseButtonClassName,
  spanClassName,
  ArrowLeftIconClassName,
  ArrowRightIconClassName,
  props,
}: IChangeQuantityButtonProps) => {
  const { quantity, setQuantity } = useProduct();

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => setQuantity((prev) => prev + 1);

  return (
    <div className={twMerge("px-2 py-[2px]", mainDivClassName)}>
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleDecreaseQuantityClick}
        className={twMerge("", decreaseButtonClassName)}
      >
        <ArrowLeftIcon
          size={16}
          className={twMerge("", ArrowLeftIconClassName)}
        />
      </Button>

      <span className={twMerge("", spanClassName)}>{quantity}</span>

      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleIncreaseQuantityClick}
        className={twMerge("", increaseButtonClassName)}
      >
        <ArrowRightIcon
          size={16}
          className={twMerge("", ArrowRightIconClassName)}
        />
      </Button>
    </div>
  );
};

export default ChangeQuantityButton;
