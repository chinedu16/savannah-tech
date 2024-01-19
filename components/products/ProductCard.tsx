import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  id: string,
  price: number;
  discountPercentage: number;
  image: StaticImageData; // Assuming you are using `next/image` with static images
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  description,
  price,
  discountPercentage,
  image,
}) => {
  // Calculate discounted price
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <Link href={`/product/${id}`}>
      <div className="font-bold">
        <Image
          style={{ height: '280px' }}
          src={image}
          alt={title}
          width={239}
          height={280}
          className="w-full mb-6 object-cover"
        />
        <h3 className="text-main-text mb-3">{title}</h3>
        <p className="text-text-color mb-3">{description}</p>
        <div>
          <span className="text-muted">${price?.toFixed(2)}</span>
          <span className="text-success-secondary ml-2">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
