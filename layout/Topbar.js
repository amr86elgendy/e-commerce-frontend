import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMoneyBillWaveAlt,
  FaDollarSign,
  FaPoundSign,
} from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi'
import 'flag-icon-css/css/flag-icon.min.css';

const Topbar = () => {
  return (
    <nav className='py-1 text-white bg-primary'>
      <div className='container grid items-center grid-cols-2 px-4 lg:grid-cols-3'>
        <ul className='flex'>
          <li className='relative mr-3 text-sm cursor-pointer top-left-links'>
            <FaMoneyBillWaveAlt className='inline-block' /> USD
            <ul>
              <li className='p-2 mb-1 text-gray-500 hover:bg-gray-100'>
                <FaDollarSign className='inline-block' /> USD
              </li>
              <li className='p-2 text-gray-500 hover:bg-gray-100'>
                <FaPoundSign className='inline-block' /> EGP
              </li>
            </ul>
          </li>
          <li className='relative text-sm uppercase cursor-pointer top-left-links'>
            <span className='m-1 flag-icon flag-icon-us'></span> Eng
            <ul>
              <li className='p-2 mb-2 text-gray-500 hover:bg-gray-100'>
                <span className='m-1 flag-icon flag-icon-us'></span> Eng
              </li>
              <li className='p-2 text-gray-500 hover:bg-gray-100'>
                <span className='m-1 flag-icon flag-icon-eg'></span> العربية
              </li>
            </ul>
          </li>
        </ul>
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
