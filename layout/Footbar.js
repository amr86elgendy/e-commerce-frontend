import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../context/global";
import { useCartContext } from "../context/cart";
import { useWishlistContext } from "../context/wishlist";

const Footbar = () => {
  const { dispatch } = useGlobalContext();
  const { total_items } = useCartContext();
  const { wishlist } = useWishlistContext();
  return (
    <nav className="fixed bottom-0 left-0 right-0 pt-3 pb-2 bg-white shadow-footbar sm:hidden">
      <div className="container flex justify-around text-xs text-gray-700">
        <button
          className="capitalize"
          onClick={() => dispatch("OPEN_SIDEBAR_LOGIN")}
        >
          <AiOutlineUser size={22} className="mx-auto" /> account
        </button>
        <button className="relative">
          <Link href='/wishlist'>
            <a>
              <FiHeart size={22} className="mx-auto" />
            </a>
          </Link>
          <span className="absolute w-4 h-4 text-center text-white rounded-full bg-primary right-1 -top-2">
            {wishlist.length}
          </span>{" "}
          Wishlist
        </button>
        <button
          className="relative"
          onClick={() => dispatch("OPEN_SIDEBAR_CART")}
        >
          <FiShoppingCart size={22} className="mx-auto" />
          <span className="absolute w-4 h-4 text-center text-white bg-primary rounded-full -right-1.5 -top-2">
            {total_items}
          </span>{" "}
          Cart
        </button>
        <button className="capitalize">
          <FaSearch size={20} className="mx-auto" /> search
        </button>
      </div>
    </nav>
  );
};

export default Footbar;
