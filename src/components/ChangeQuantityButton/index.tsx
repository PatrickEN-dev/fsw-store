"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const ChangeQuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => setQuantity((prev) => prev + 1);

  return (
    <div className="mt-4 flex items-center gap-2">
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleDecreaseQuantityClick}
      >
        <ArrowLeftIcon size={16} />
      </Button>

      <span>{quantity}</span>

      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleIncreaseQuantityClick}
      >
        <ArrowRightIcon size={16} />
      </Button>
    </div>
  );
};

export default ChangeQuantityButton;
