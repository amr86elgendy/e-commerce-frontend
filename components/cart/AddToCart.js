import { useState } from 'react';
import Link from 'next/link';
import { useCartContext } from '../../context/cart';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';
import useTranslation from 'next-translate/useTranslation';

const AddToCart = ({ product }) => {
  const { t } = useTranslation()
  const { _id, quantity, colors, sizes } = product;
  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [mainSize, setMainSize] = useState(0);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    if (amount === quantity) return;
    setAmount((v) => v + 1);
  };

  const decrease = () => {
    if (amount === 1) return;
    setAmount((v) => v - 1);
  };

  return (
    <div>
      <div className='grid mt-4 grid-cols-[125px,1fr]'>
        <span className='font-bold capitalize'>{t('products:color')} :</span>
        <div className='flex'>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={
                mainColor === color
                  ? 'flex items-center justify-center w-6 h-6 rounded-full mr-2 border-none cursor-pointer opacity-100 focus:outline-none'
                  : 'flex items-center justify-center w-6 h-6 rounded-full mr-2 border-none cursor-pointer opacity-50 focus:outline-none'
              }
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck className='text-white' /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='grid items-center mt-4 grid-cols-[125px,1fr]'>
        <span className='font-bold capitalize'>{t('products:size')} :</span>
        <div className='flex'>
          {sizes.map((size, index) => (
            <button
              key={index}
              className={
                `flex items-center justify-center w-4 h-4 rounded-full mr-2 p-4 cursor-pointer text-sm ${
                  mainSize === index ? 'bg-gray-700 text-white' : 'bg-white text-gray-400 border border-gray-400'
                }`}
              onClick={() => setMainSize(index)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-8'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link href='/cart'>
          <a
            className='btn btn-primary px-6 py-1.5 uppercase mt-4'
            onClick={() => addToCart(_id, mainColor, amount, product)}
          >
            {t('cart:add-to-cart')}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
