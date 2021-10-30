import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cart';

const CartItem = ({ _id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(_id, 'inc');
  };
  const decrease = () => {
    toggleAmount(_id, 'dec');
  };

  return (
    <div className='grid items-center mb-12 grid-cols-200-auto-auto md:grid-cols-1fr4-auto grid-rows-75 gap-x-4 lg:gap-x-12 gap-y-4 justify-items-center'>
      <div className='grid items-center gap-4 text-center grid-rows-75 grid-cols-75-125 md:grid-cols-100-200 md:text-left md:h-full'>
        <img
          src={image}
          alt={name}
          className='block object-cover w-full h-full rounded'
        />
        <div>
          <h5 className='text-xs md:text-sm'>{name.substring(0, 20)}</h5>
          <p className='flex items-center justify-center text-xs tracking-wider text-gray-400 capitalize md:text-sm'>
            color :
            <span
              className='inline-block w-2 h-2 ml-2 rounded md:w-3 md:h-3'
              style={{ background: color }}
            />
          </p>
          <h5 className='text-xs text-secondary md:hidden'>{price}</h5>
        </div>
      </div>
      <h5 className='hidden font-normal md:block text-secondary'>{price}</h5>

      <div className='grid items-center w-16 grid-cols-3 justify-items-center md:w-24'>
        <button
          type='button'
          className='flex items-center justify-center w-4 h-2 py-4 text-xs bg-transparent md:w-6 md:h-4 md:text-base'
          onClick={decrease}
        >
          <FaMinus />
        </button>
        <h2 className='font-bold'>{amount}</h2>
        <button
          type='button'
          className='flex items-center justify-center w-4 h-2 py-4 text-xs bg-transparent md:w-6 md:h-4 md:text-base'
          onClick={increase}
        >
          <FaPlus />
        </button>
      </div>

      <h5 className='hidden font-normal text-gray-400 md:block'>
        {price * amount}
      </h5>
      <FaTrash onClick={() => removeItem(_id)} className='cursor-pointer text-gray-700 hover:text-red-500' />
    </div>
  );
};

export default CartItem;