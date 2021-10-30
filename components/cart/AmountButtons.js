import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className='grid items-center grid-cols-3 mb-4 w-36 justify-items-center'>
      <button
        type='button'
        className='flex items-center justify-center w-8 h-4 bg-transparent'
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className='text-2xl font-bold'>{amount}</h2>
      <button
        type='button'
        className='flex items-center justify-center w-8 h-4 bg-transparent'
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
