import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '../context/global';
import { useCartContext } from '../context/cart';
import { useUserContext } from '../context/user';
import useTranslation from 'next-translate/useTranslation';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { GrUserAdmin, GrUserExpert } from 'react-icons/gr';
import { logout } from '../apis/auth';

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const { total_items } = useCartContext();
  const { t } = useTranslation();
  const { isAuthenticated, dispatch: dispatchUser, user } = useUserContext();

  const [openMyInfo, setOpenMyInfo] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset === 0) setFixedNav(false);
      else setFixedNav(true);
    });
  }, []);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('ishop-token');
    dispatchUser('LOGOUT');
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-30 py-2 transition-all duration-300 backdrop-filter backdrop-blur ${
        fixedNav ? 'shadow-nav' : 'shadow-card'
      }`}
      style={{ backgroundColor: 'rgb(255, 255, 255, 0.5)' }}
    >
      <div className='container grid grid-cols-2 px-4 md:grid-cols-3 lg:grid-cols-[auto,1fr,auto]'>
        <button
          className='text-gray-600 lg:hidden'
          onClick={() => dispatch('OPEN_SIDEBAR_MENU')}
        >
          <div className='w-8 h-0.5 bg-gray-600 rounded mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600 rounded mb-1'></div>
          <div className='w-8 h-0.5 bg-gray-600 rounded'></div>
        </button>

        <h1 className='flex md:justify-self-center lg:justify-self-start justify-self-end'>
          <button
            className='hidden text-gray-600 ltr:mr-4 lg:inline-block rtl:ml-4'
            onClick={() => dispatch('OPEN_SIDEBAR_MENU')}
          >
            <div className='w-8 h-0.5 bg-gray-600 rounded mb-1'></div>
            <div className='w-5 h-0.5 bg-gray-600 rounded mb-1'></div>
            <div className='w-8 h-0.5 bg-gray-600 rounded'></div>
          </button>
          ishop
        </h1>
        <div className='w-[70%] items-center hidden capitalize lg:flex justify-self-end ltr:mr-16 relative rtl:ml-8'>
          <IoSearch
            size={20}
            className='absolute text-gray-400 ltr:left-2 rtl:right-2'
          />
          <input
            type='text'
            name='search'
            className='ltr:pr-4 rtl:pr-8 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-primary inline-block w-[80%] placeholder-shown:italic placeholder-shown:font-light placeholder-shown:text-sm ltr:pl-8 rtl:pl-4'
            placeholder={t('common:search-placeholder')}
          />
          <button className='px-4 py-2 font-light uppercase btn btn-primary rtl:mr-4 ltr:ml-4'>
            {t('common:search-keyword')}
          </button>
        </div>
        <ul className='items-center hidden md:flex justify-self-end'>
          {isAuthenticated ? (
            <li
              className='relative flex text-sm text-gray-600 cursor-pointer ltr:mr-4 rtl:ml-4'
              onClick={() => setOpenMyInfo(!openMyInfo)}
            >
              <GrUserExpert size={20} className='ltr:mr-2 rtl:ml-2' />{' '}
              {t('common:greeting')}, {user.name.split(' ')[0]}
              <ul
                className={`absolute ltr:left-0 transition-all duration-200 bg-white top-10 shadow-sort min-w-[160px] cursor-default rtl:right-0 ${
                  openMyInfo
                    ? 'opacity-100 visible scale-100'
                    : 'scale-75 opacity-0 invisible'
                }`}
              >
                <Link href='/profile'>
                  <li className='p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                    <AiOutlineUser
                      size={22}
                      className='inline-block ltr:mr-2 rtl:ml-2'
                    />
                    {t('common:my-account')}
                  </li>
                </Link>
                <Link href='/orders'>
                  <li className='p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                    <RiShoppingBag3Line
                      size={22}
                      className='inline-block ltr:mr-2 rtl:ml-2'
                    />
                    {t('common:my-orders')}
                  </li>
                </Link>
                <Link href='/wishlist'>
                  <li className='p-2 text-sm text-gray-500 capitalize transition-all duration-200 cursor-pointer hover:bg-gray-100'>
                    <FiHeart
                      size={22}
                      className='inline-block ltr:mr-2 rtl:ml-2'
                    />
                    {t('common:wishlist-keyword')}
                  </li>
                </Link>
                <li className='flex justify-center p-2 text-sm text-gray-500 capitalize transition-all duration-200 border-t-2'>
                  <button
                    className='px-2 py-1 uppercase text-primary hover:bg-primary-light -my-0.5'
                    onClick={handleLogout}
                  >
                    {t('common:logout')}
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <li
              className='flex text-gray-600 capitalize cursor-pointer ltr:mr-4 rtl:ml-4'
              onClick={() => dispatch('OPEN_SIDEBAR_LOGIN')}
            >
              <GrUserAdmin size={22} className='ltr:mr-1 rtl:ml-1' />
              {t('common:account-keyword')}
            </li>
          )}
          <li className='flex text-gray-600 capitalize cursor-pointer ltr:mr-4 rtl:ml-4 '>
            <IoMdHelpCircleOutline size={25} className='ltr:mr-1 rtl:ml-1' />
            {t('common:help')}
          </li>
          <li
            className='relative flex text-gray-600 capitalize cursor-pointer'
            onClick={() => dispatch('OPEN_SIDEBAR_CART')}
          >
            <FiShoppingCart size={22} className='ltr:mr-2 rtl:ml-2' />
            {t('common:cart-keyword')}
            <span className='absolute flex items-center justify-center w-5 h-5 text-sm text-white border-2 border-white rounded-full bg-primary -top-2 rtl:right-2 ltr:right-8'>
              {total_items}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
