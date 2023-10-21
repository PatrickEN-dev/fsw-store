import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      className="h-auto w-full px-5"
      sizes="100vw"
      width={0}
      height={0}
      {...props}
    />
  );
};

export default PromoBanner;
