import Link from 'next/link';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import Button from '../helpers/RippleButton';
import { useRouter } from 'next/router';
import { useCartContext } from '../../context/cart';
import useTranslation from 'next-translate/useTranslation';
import { useUserContext } from '../../context/user';

const CartContent = () => {
  const { cart, clearCart, total_amount } = useCartContext();
  const { dispatch, user } = useUserContext();
  const { asPath } = useRouter();
  const { t } = useTranslation();
  console.log(user);
  return (
    <section className='px-5 py-8'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item._id} {...item} />
      ))}
      <hr />
      <div className='flex items-center justify-end mx-16 mt-8'>
        <label className='font-bold capitalize'>{t('cart:total')} :</label>
        <div className='px-4 text-xl text-primary'>
          <span className='px-2'>EGP</span>
          <span>{total_amount}</span>
        </div>
      </div>
      <div className='mx-2 my-2 text-sm text-right text-gray-400'>
        {t('cart:total-desc')}
      </div>
      <footer className='flex justify-end mt-4'>
        <div>
          <Link href='/product'>
            <button className='p-2 uppercase bg-gray-200 w-52 hover:bg-gray-300'>
              {t('cart:return-to-shop')}
            </button>
          </Link>
          <Link href={user && user.token && '/checkout'}>
            <button
              className='p-2 m-2 uppercase w-52 btn-primary'
              onClick={
                user && user.token
                  ? null
                  : () => dispatch({ type: 'OPEN_LOGIN' })
              }
            >
              {t('cart:check-out')}
            </button>
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default CartContent;
