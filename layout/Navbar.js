import { useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '../context/global';
import { useCartContext } from '../context/cart';
import { useWishlistContext } from '../context/wishlist';
import { useUserContext } from '../context/user';
import { FaUserCheck, FaSearch, FaUserLock, FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { logout } from '../apis/auth';

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const { total_items } = useCartContext();
  const { wishlist } = useWishlistContext();
  const { isAuthenticated, dispatch: dispatchUser } = useUserContext();

  const [openMyInfo, setOpenMyInfo] = useState(false);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('ishop-token');
    dispatchUser('LOGOUT');
  }

  return (
    <header
      className='sticky top-0 left-0 right-0 z-30 py-2 transition-all duration-300 backdrop-filter backdrop-blur'
      style={{ backgroundColor: 'rgb(255, 255, 255, 0.5)' }}
    >
      <div className='container grid grid-cols-2 px-4 sm:grid-cols-3'>
        <button
          className='text-gray-600 lg:hidden'
          onClick={() => dispatch('OPEN_SIDEBAR_MENU')}
        >
          <div className='w-8 h-0.5 bg-gray-600 rounded mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600 rounded mb-1'></div>
          <div className='w-8 h-0.5 bg-gray-600 rounded'></div>
        </button>

        <h1 className='sm:justify-self-center lg:justify-self-start justify-self-end'>
          ishop
        </h1>
        <ul className='items-center flex-1 hidden capitalize lg:flex justify-evenly'>
          <li className='transition-colors duration-200 cursor-pointer hover:text-gray-500'>
            <Link href='/'>home</Link>
          </li>
          <li className='transition-colors duration-200 cursor-pointer hover:text-gray-500'>
            <Link href='/products'>products</Link>
          </li>
          <li className='transition-colors duration-200 cursor-pointer hover:text-gray-500'>
            <Link href='/about'>about us</Link>
          </li>
          <li className='transition-colors duration-200 cursor-pointer hover:text-gray-500'>
            <Link href='/contact'>contact us</Link>
          </li>
        </ul>
        <ul className='items-center hidden sm:flex justify-self-end'>
          <li className='mr-4 text-gray-600 cursor-pointer'>
            <FaSearch size={20} />
          </li>
          {isAuthenticated ? (
            <li
              className='relative mr-2 text-gray-600 cursor-pointer'
              onClick={() => setOpenMyInfo(!openMyInfo)}
            >
              <FaUserCheck size={25} />
              <ul
                className={`absolute right-0 transition-all duration-200 bg-white top-10 shadow-sort w-28 ${
                  openMyInfo
                    ? 'opacity-100 visible scale-100'
                    : 'scale-75 opacity-0 invisible'
                }`}
              >
                <Link href='/profile'>
                  <li className='py-3 pl-3 text-sm text-left text-gray-500 capitalize transition-all duration-200 hover:bg-gray-100'>
                    <FaUserAlt className='inline-block' /> profile
                  </li>
                </Link>
                <li
                  className='py-3 pl-3 text-sm text-left text-gray-500 capitalize transition-all duration-200 hover:bg-gray-100'
                  onClick={handleLogout}
                >
                  <IoLogOut className='inline-block' /> log out
                </li>
              </ul>
            </li>
          ) : (
            <li
              className='mr-4 text-gray-600 cursor-pointer'
              onClick={() => dispatch('OPEN_SIDEBAR_LOGIN')}
            >
              <FaUserLock size={23} />
            </li>
          )}
          <li className='relative mr-4 text-gray-600 cursor-pointer'>
            <Link href='/wishlist'>
              <a>
                <FiHeart size={22} />
              </a>
            </Link>
            <span className='absolute flex items-center justify-center w-4 h-4 text-sm text-white rounded-full bg-primary -top-2 -right-1/3'>
              {wishlist.length}
            </span>
          </li>
          <li
            className='relative mr-2 text-gray-600 cursor-pointer'
            onClick={() => dispatch('OPEN_SIDEBAR_CART')}
          >
            <FiShoppingCart size={22} />
            <span className='absolute flex items-center justify-center w-4 h-4 text-sm text-white rounded-full bg-primary -top-2 -right-1/3'>
              {total_items}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
