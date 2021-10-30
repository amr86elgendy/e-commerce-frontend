import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../context/global";
import { useCartContext } from "../context/cart";
import { useWishlistContext } from "../context/wishlist";

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const { total_items } = useCartContext();
  const { wishlist } = useWishlistContext();

  return (
    <header
      className="sticky top-0 left-0 right-0 z-30 py-2 transition-all duration-300 backdrop-filter backdrop-blur"
      style={{ backgroundColor: "rgb(255, 255, 255, 0.5)" }}
    >
      <div className="container grid grid-cols-2 px-4 sm:grid-cols-3">
        <button
          className="text-gray-600 lg:hidden"
          onClick={() => dispatch("OPEN_SIDEBAR_MENU")}
        >
          <div className="w-8 h-0.5 bg-gray-600 rounded mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 rounded mb-1"></div>
          <div className="w-8 h-0.5 bg-gray-600 rounded"></div>
        </button>

        <h1 className="sm:justify-self-center lg:justify-self-start justify-self-end">
          ishop
        </h1>
        <ul className="items-center flex-1 hidden capitalize lg:flex justify-evenly">
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-500">
            <Link href="/">home</Link>
          </li>
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-500">
            <Link href="/products">products</Link>
          </li>
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-500">
            <Link href="/about">about us</Link>
          </li>
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-500">
            <Link href="/contact">contact us</Link>
          </li>
        </ul>
        <ul className="items-center hidden sm:flex justify-self-end">
          <li className="mr-4 text-gray-600 cursor-pointer">
            <FaSearch size={20} />
          </li>
          <li
            className="mr-4 text-gray-600 cursor-pointer"
            onClick={() => dispatch("OPEN_SIDEBAR_LOGIN")}
          >
            <AiOutlineUser size={23} />
          </li>
          <li className="relative mr-4 text-gray-600 cursor-pointer">
            <Link href="/wishlist">
              <a>
                <FiHeart size={22} />
              </a>
            </Link>
            <span className="absolute flex items-center justify-center w-4 h-4 text-sm text-white rounded-full bg-primary -top-2 -right-1/3">
              {wishlist.length}
            </span>
          </li>
          <li
            className="relative mr-2 text-gray-600 cursor-pointer"
            onClick={() => dispatch("OPEN_SIDEBAR_CART")}
          >
            <FiShoppingCart size={22} />
            <span className="absolute flex items-center justify-center w-4 h-4 text-sm text-white rounded-full bg-primary -top-2 -right-1/3">
              {total_items}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
