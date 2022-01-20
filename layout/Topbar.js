import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import 'flag-icon-css/css/flag-icon.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Topbar = () => {
  const { asPath, locale } = useRouter();
  return (
    <nav className='py-1 text-white bg-primary'>
      <div className='container grid items-center grid-cols-2 px-4 lg:grid-cols-3'>
        <div className='flex items-center'>
          <Link href={asPath} locale='ar'>
            <a
              className={`text-xs capitalize ${
                locale === 'ar' && 'opacity-50'
              }`}
            >
              عربي{' '}
              <span className='m-1 rounded-full flag-icon flag-icon-eg'></span>
            </a>
          </Link>
          <span className='items-center hidden mx-2 text-gray-200 sm:flex'>
            |
          </span>
          <Link href={asPath} locale='en'>
            <a
              className={`text-xs capitalize ${
                locale === 'en' && 'opacity-50'
              }`}
            >
              english{' '}
              <span className='m-1 rounded-full flag-icon flag-icon-gb'></span>
            </a>
          </Link>
        </div>
        <div className='hidden lg:block justify-self-center'>
          Summer sale discount off 50% !
        </div>
        <ul className='flex justify-self-end'>
          <li className='items-center hidden sm:flex'>
            <FiPhoneCall className='mr-2' />
            0123456789
          </li>
          <span className='items-center hidden mx-2 text-gray-200 sm:flex'>
            |
          </span>
          <a
            href='https://www.facebook.com'
            target='_blank'
            className='flex items-center justify-center w-8 h-8 transition duration-300 rounded-full facebook'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://www.facebook.com'
            target='_blank'
            className='flex items-center justify-center w-8 h-8 transition duration-300 rounded-full twitter'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.facebook.com'
            target='_blank'
            className='flex items-center justify-center w-8 h-8 transition duration-300 rounded-full instagram'
          >
            <FaInstagram />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
