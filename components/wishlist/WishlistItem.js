import React from "react";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useWishlistContext } from "../../context/wishlist";

const CartItem = ({ _id, images, name, price, slug }) => {
  const { removeItemFromWishlist } = useWishlistContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-1fr-1fr-100 grid-rows-75 gap-x-4 lg:gap-x-12 gap-y-4 items-center mb-12">
      <div className="grid grid-rows-75 grid-cols-75-125 md:grid-cols-100-200 gap-4 items-center text-center md:text-left md:h-full">
        <Link href={`/products/${slug}`}>
          <img
            src={images[0]}
            alt={name}
            className="block w-full h-full rounded object-cover cursor-pointer"
          />
        </Link>
        <div>
          <h5 className="text-xs md:text-sm">{name}</h5>
          <h5 className="text-xs text-primary md:hidden">{price}</h5>
        </div>
      </div>
      <h5 className="hidden md:block text-primary font-normal justify-self-center lg:justify-self-start">
        {price}
      </h5>
      <FaTrash
        className="text-gray-700 hover:text-red-500 cursor-pointer justify-self-end sm:justify-self-center"
        onClick={() => removeItemFromWishlist(_id)}
      />
    </div>
  );
};

export default CartItem;
