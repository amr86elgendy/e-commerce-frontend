import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../../context/global';
import { useCartContext } from '../../context/cart';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Button from '../helpers/RippleButton';
import useTranslation from 'next-translate/useTranslation'
import { useUserContext } from '../../context/user';

const CartSide = () => {
  const { t } = useTranslation();
  const { push } = useRouter()
  const { dispatch } = useGlobalContext();
  const { user } = useUserContext();
  const { toggleAmount, total_amount, cart, removeItem } = useCartContext();

  const redirectUser = () => {
    if (user) {
      dispatch('CLOSE_SIDEBAR_LO_CA');
      push('/checkout');
    } else {
      dispatch('OPEN_SIDEBAR_LOGIN');
    }
  };

  return (
    <div className={`flex flex-col ${cart.length && 'justify-between'} h-full`}>
      <div className='flex justify-between p-4 border-b'>
        <h3 className='tracking-wider uppercase text-primary'>
          {t('common:cart')}
        </h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_LO_CA')}
        />
      </div>
      {cart.length < 1 ? (
        <div className='flex flex-col items-center'>
          <HiOutlineShoppingBag size={60} color='gray' className='my-4' />
          <h3 className='mb-8 font-normal tracking-wider uppercase'>
            {t('cart:empty-cart')}
          </h3>
          <Link href='/products'>
            <button
              className='px-6 py-2 tracking-widest uppercase btn btn-primary'
              onClick={() => dispatch('CLOSE_SIDEBAR_LO_CA')}
            >
              {t('cart:return-to-shop')}
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
                  <img
                    src={`${process.env.NEXT_PUBLIC_APP_URL}${item.image}`}
                    alt=''
                    className='w-full h-ful'
                  />
                </a>
                <div className='flex-1 overflow-hidden'>
                  <a
                    href=''
                    className='block overflow-hidden text-sm whitespace-nowrap overflow-ellipsis'
                  >
                    {item.name}
                  </a>
                  <div className='text-sm text-gray-500'>EGP {item.price}</div>
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
              <h3 className='capitalize'>{t('cart:total')} :</h3>
              <p>EGP {total_amount}</p>
            </div>
            <p className='my-3 text-sm font-light leading-6'>
              {t('cart:total-desc')}
            </p>
            <Link href='/cart'>
              <a>
                <Button
                  className='w-full p-2 mb-4 uppercase bg-gray-300 hover:bg-gray-400'
                  onClick={() => dispatch('CLOSE_SIDEBAR_LO_CA')}
                >
                  {t('cart:view-cart')}
                </Button>
              </a>
            </Link>
            <button
              className='w-full p-2 mb-4 uppercase btn-primary'
              onClick={redirectUser}
            >
              {t('cart:check-out')}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSide;
