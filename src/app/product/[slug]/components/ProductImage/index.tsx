"use client";

import Image from "next/image";
import { useState } from "react";

interface IProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: IProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  const handleImageClick = (imageUrls: string) => setCurrentImage(imageUrls);
  return (
    <>
      <div className="flex flex-col">
        <figure className="flex h-[380px] w-full items-center justify-center bg-accent">
          <Image
            src={currentImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </figure>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
            ${
              imageUrl === currentImage &&
              "border-2 border-solid border-primary"
            }
        `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
