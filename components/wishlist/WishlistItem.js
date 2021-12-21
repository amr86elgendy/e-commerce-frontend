import React from "react";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useWishlistContext } from "../../context/wishlist";

const CartItem = ({ _id, images, name, price, slug }) => {
  const { removeItemFromWishlist } = useWishlistContext();

  return (
    <div className='grid items-center grid-cols-2 mb-12 md:grid-cols-[1fr,1fr,100px] grid-rows-[75px] gap-x-4 lg:gap-x-12 gap-y-4'>
      <div className='grid grid-rows-[75px] grid-cols-[75px,125px] md:grid-cols-[100px,200px] gap-4 items-center text-center md:text-left md:h-full'>
        <Link href={`/products/${slug}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_APP_URL}${images[0]}`}
            alt={name}
            className='block object-cover w-full h-full rounded cursor-pointer'
          />
        </Link>
        <div>
          <h5 className='text-xs md:text-sm'>{name}</h5>
          <h5 className='text-xs text-primary md:hidden'>{price}</h5>
        </div>
      </div>
      <h5 className='hidden font-normal md:block text-primary justify-self-center lg:justify-self-start'>
        {price}
      </h5>
      <FaTrash
        className='text-gray-700 cursor-pointer hover:text-red-500 justify-self-end sm:justify-self-center'
        onClick={() => removeItemFromWishlist(_id)}
      />
    </div>
  );
};

export default CartItem;
