import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../../context/global';
import { useCartContext } from '../../context/cart';
import Button from '../helpers/RippleButton';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const CartSide = () => {
  const { dispatch } = useGlobalContext();
  const { toggleAmount, total_amount, cart, removeItem } = useCartContext();

  return (
    <div className={`flex flex-col ${cart.length && 'justify-between'} h-full`}>
      <div className='flex justify-between p-4 border-b'>
        <h3 className='tracking-wider uppercase text-primary'>shopping cart</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 transform cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_RIGHT')}
        />
      </div>
      {cart.length < 1 ? (
        <div className='flex flex-col items-center'>
          <HiOutlineShoppingBag size={60} color='gray' className='my-4' />
          <h3 className='mb-8 font-normal tracking-wider uppercase'>
            your cart is empty
          </h3>
          <Link href='/products'>
            <button
              className='px-6 py-2 tracking-widest uppercase btn btn-primary'
              onClick={() => dispatch('CLOSE_SIDEBAR_RIGHT')}
            >
              return to shop
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className='flex-1 overflow-y-scroll'>
            {cart.map((item) => (
              <div
                className='flex items-center p-5 transition-all duration-300 border-b border-gray-300 hover:bg-gray-100 gap-x-4'
                key={item._id}
              >
                <a href='' className='block w-32'>
                  <img src={item.image} alt='' className='w-full h-ful' />
                </a>
                <div className='flex-1 overflow-hidden'>
                  <a
                    href=''
                    className='block overflow-hidden text-sm whitespace-nowrap overflow-ellipsis'
                  >
                    {item.name}
                  </a>
                  <div className='text-sm text-gray-500'>${item.price}</div>
                  <div className='flex flex-col items-center mt-4'>
                    <div className='grid items-center w-32 h-10 grid-cols-3 justify-items-center'>
                      <button
                        type='button'
                        className='flex items-center justify-center w-4 h-2 py-4 text-xs'
                        onClick={() => toggleAmount(item._id, 'dec')}
                      >
                        <FaMinus />
                      </button>
                      <h3 className='font-medium'>{item.amount}</h3>
                      <button
                        type='button'
                        className='flex items-center justify-center w-4 h-2 py-4 text-xs'
                        onClick={() => toggleAmount(item._id, 'inc')}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      className='mt-4 text-gray-500 hover:text-red-500'
                      onClick={() => removeItem(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='p-5 border-t border-gray-300 shadow-md'>
            <div className='flex justify-between'>
              <h3 className='capitalize'>subtotal :</h3>
              <p>${total_amount}</p>
            </div>
            <p className='my-3 text-sm font-light leading-6'>
              Taxes, shipping and discounts codes calculated at checkout
            </p>
            <Link href='/cart'>
              <a>
                <Button
                  className='w-full p-2 mb-4 uppercase bg-gray-200 hover:bg-gray-300'
                  onClick={() => dispatch('CLOSE_SIDEBAR_RIGHT')}
                >
                  view cart
                </Button>
              </a>
            </Link>
            <Button className='w-full p-2 uppercase btn-primary'>
              check out
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSide;
