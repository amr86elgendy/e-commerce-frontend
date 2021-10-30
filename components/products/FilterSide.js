import Button from '../helpers/RippleButton';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/global';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../../context/filter';
import { getUniqueValues } from '../helpers/constant';

const FilterSide = () => {
  const [size, setSize] = useState('all');

  const { dispatch } = useGlobalContext();
  const {
    filters: { text, category, brand, color, min_price, price, max_price },
    all_products,
    updateFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const brands = getUniqueValues(all_products, 'brand');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <div>
      <div className='flex justify-between p-4 border-b'>
        <h3 className='tracking-wider uppercase text-primary'>filter</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 transform cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_LEFT')}
        />
      </div>
      {/* BY NAME */}
      <div className='p-4 border-b'>
        <h5 className='capitalize'>
          by name<div className='bg-black h-0.5 mt-1 w-16'></div>
        </h5>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search...'
          onChange={updateFilters}
          className='block w-full px-3 py-1 mt-6 border-2 border-gray-400'
        />
      </div>
      {/* CATEGORY */}
      <div className='p-4 border-b'>
        <h5 className='capitalize'>
          by category<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='overflow-y-scroll max-h-40'>
          {categories.map((el, i) => (
            <li key={i} className={`flex items-center mt-2 cursor-pointer`}>
              <input
                type='checkbox'
                name='category'
                id={el}
                value={el}
                checked={category === el}
                onChange={updateFilters}
              />
              <label htmlFor={el} className='ml-4 cursor-pointer'>
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* COLOR */}
      <div className='p-4 border-b'>
        <h5 className='mb-2 capitalize'>
          by color<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='overflow-y-scroll max-h-40'>
          {colors.map((el, i) => (
            <li key={i} className='flex items-center mb-2 cursor-pointer'>
              <button
                name='color'
                className={`w-7 h-7 mr-3 flex items-center justify-center rounded-full ${
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
      <div className='p-4 border-b'>
        <h5 className='mb-2 capitalize'>
          by price<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <div className='mt-5'>
          <p className='text-sm'>$ {price}</p>
          <input
            type='range'
            name='price'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
            className='block h-1 my-2 outline-none appearance-none bg-primary'
          />
        </div>
      </div>
      {/* SIZE */}
      <div className='p-4 border-b'>
        <h5 className='mb-2 capitalize'>
          by size<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='flex flex-wrap overflow-y-scroll max-h-40'>
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
      <div className='p-4 border-b'>
        <h5 className='mb-2 capitalize'>
          by brand<div className='w-16 bg-black h-0.5 mt-1'></div>
        </h5>
        <ul className='overflow-y-scroll max-h-40'>
          {brands.map((el, i) => (
            <li
              key={i}
              name='brand'
              className='flex items-center mt-2 cursor-pointer'
            >
              <input
                type='checkbox'
                name='brand'
                id={el === 'all' ? 'all-brands' : el}
                value={el}
                checked={brand === el}
                onChange={updateFilters}
              />
              <label
                htmlFor={el === 'all' ? 'all-brands' : el}
                className='ml-4 cursor-pointer'
              >
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSide;
