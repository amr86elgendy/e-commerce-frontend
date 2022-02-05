import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useGlobalContext } from '../../context/global';
import { useFilterContext } from '../../context/filter';
import { getUniqueValues } from '../helpers/constant';

const Filter = () => {
  const [size, setSize] = useState('all');
  const { openFilter } = useGlobalContext();
  const {
    filters: { text, category, brand, color, min_price, price, max_price },
    updateFilters,
    all_products,
    dispatch,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const brands = getUniqueValues(all_products, 'brand');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <aside
      className={`shadow-filter my-8 h-[155vh] overflow-hidden hidden lg:block transition-all ${
        openFilter ? 'w-[250px] px-4' : 'w-0'
      }`}
    >
      {/* CATEGORY */}
      <div className='mt-4 border-b border-[#ededed]'>
        <h5 className='font-semibold capitalize'>
          by category<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='overflow-y-scroll max-h-40'>
          {categories.map((el, i) => (
            <li key={i} className='flex items-center my-2'>
              <input
                type='checkbox'
                name='category'
                id={el}
                value={el}
                checked={category === el}
                onChange={updateFilters}
              />
              <label htmlFor={el} className='cursor-pointer ltr:ml-4 rtl:mr-4'>
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* COLOR */}
      <div className='mt-2 border-b border-[#ededed]'>
        <h5 className='font-semibold capitalize'>
          by color<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='my-4 overflow-y-scroll max-h-40'>
          {colors.map((el, i) => (
            <li key={i} className='flex items-center my-2 cursor-pointer'>
              <button
                name='color'
                className={`w-7 h-7 ltr:mr-3 flex items-center justify-center rounded-full rtl:ml-3 ${
                  color === el ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ backgroundColor: el }}
                data-color={el}
                onClick={updateFilters}
              >
                {color === el ? (
                  <FaCheck size={14} color={el === 'all' ? 'black' : 'white'} />
                ) : (
                  ''
                )}
              </button>
              <span className='text-sm'>{el}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* PRICE */}
      <div className='mt-2 border-b border-[#ededed]'>
        <h5 className='font-semibold capitalize'>
          by price<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <div className='my-4'>
          <p className='text-sm'>{price}</p>
          <input
            type='range'
            name='price'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
            className='h-1 outline-none appearance-none bg-primary'
          />
        </div>
      </div>
      {/* SIZE */}
      <div className='mt-2 border-b border-[#ededed]'>
        <h5 className='font-semibold capitalize'>
          by size<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='flex flex-wrap my-4 overflow-y-scroll max-h-40'>
          {['all', 'small', 'medium', 'large', 'xlarge', 'xxlarge'].map(
            (el, i) => (
              <li
                key={i}
                className={`flex items-center justify-center w-16 h-16 mt-2 mr-2 text-xs border border-gray-400 rounded-full cursor-pointer ${
                  size === el && 'text-white bg-gray-400'
                }`}
                onClick={() => setSize(el)}
              >
                {el}
              </li>
            )
          )}
        </ul>
      </div>
      {/* BRAND */}
      <div className='mt-2 border-b border-[#ededed]'>
        <h5 className='font-semibold capitalize'>
          by brand <div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='my-4 overflow-y-scroll max-h-40'>
          {brands.map((el, i) => (
            <li
              key={i}
              name='brand'
              className='flex items-center mt-2 cursor-pointer'
            >
              <input
                type='radio'
                name='brand'
                id={el === 'all' ? 'all-brands' : el}
                value={el}
                checked={brand === el}
                onChange={updateFilters}
              />
              <label
                htmlFor={el === 'all' ? 'all-brands' : el}
                className='cursor-pointer ltr:ml-4 rtl:mr-4'
              >
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
