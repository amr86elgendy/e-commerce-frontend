import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { GrUserAdmin, GrUserExpert } from 'react-icons/gr';
import { useGlobalContext } from '../context/global';
import { useCartContext } from '../context/cart';
import { useWishlistContext } from '../context/wishlist';
import { useUserContext } from '../context/user';
import { IoMdLogOut, IoMdHelpCircleOutline } from 'react-icons/io';
import { logout } from '../apis/auth';
import { AiOutlineUser } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';

const Footbar = () => {
  const { t } = useTranslation();
  const { dispatch } = useGlobalContext();
  const { total_items } = useCartContext();
  const { wishlist } = useWishlistContext();
  const { isAuthenticated, dispatch: dispatchUser, user } = useUserContext();

  const [openMyInfo, setOpenMyInfo] = useState(false);
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('ishop-token');
    dispatchUser('LOGOUT');
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 pt-3 pb-2 bg-white shadow-footbar md:hidden'>
      <div className='container flex justify-around text-xs text-gray-700'>
        {isAuthenticated ? (
          <a
            className='relative capitalize cursor-pointer'
            onClick={() => setOpenMyInfo(!openMyInfo)}
          >
            <GrUserExpert size={22} className='mx-auto' />{' '}
            {t('common:greeting')}, {user.name.split(' ')[0]}
            <ul
              className={`absolute ltr:left-0 transition-all duration-200 bg-white bottom-10 shadow-sort min-w-[160px] cursor-default rtl:right-0 ${
                openMyInfo
                  ? 'opacity-100 visible scale-100'
                  : 'scale-75 opacity-0 invisible'
              }`}
            >
              <li className='flex justify-center p-2 text-sm text-gray-500 capitalize transition-all duration-200 border-t-2'>
                <button
                  className='px-2 py-1 uppercase text-primary hover:bg-primary-light -my-0.5'
                  onClick={handleLogout}
                >
                  {t('common:logout')}
                </button>
              </li>
              <Link href='/wishlist'>
                <li className='flex p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                  <FiHeart
                    size={22}
                    className='inline-block ltr:mr-2 rtl:ml-2'
                  />
                  {t('common:wishlist')}
                </li>
              </Link>
              <Link href='/orders'>
                <li className='flex p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                  <RiShoppingBag3Line
                    size={22}
                    className='inline-block ltr:mr-2 rtl:ml-2'
                  />
                  {t('common:my-orders')}
                </li>
              </Link>
              <Link href='/profile'>
                <li className='flex p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                  <AiOutlineUser
                    size={22}
                    className='inline-block ltr:mr-2 rtl:ml-2'
                  />
                  {t('common:my-account')}
                </li>
              </Link>
            </ul>
          </a>
        ) : (
          <button
            className='capitalize'
            onClick={() => dispatch('OPEN_SIDEBAR_LOGIN')}
          >
            <GrUserAdmin size={23} className='mx-auto' /> account
          </button>
        )}
        <button className='relative'>
          <IoMdHelpCircleOutline size={24} className='mx-auto' />
          {t('common:help')}
        </button>
        <button
          className='relative'
          onClick={() => dispatch('OPEN_SIDEBAR_CART')}
        >
          <FiShoppingCart size={22} className='mx-auto' />
          <span className='absolute w-[18px] h-[18px] text-center text-white bg-primary rounded-full ltr:-right-1.5 -top-2 rtl:right-2'>
            {total_items}
          </span>{' '}
          {t('common:cart')}
        </button>
        <button className='capitalize'>
          <FaSearch size={20} className='mx-auto' />
          {t('common:search')}
        </button>
      </div>
    </nav>
  );
};

export default Footbar;
