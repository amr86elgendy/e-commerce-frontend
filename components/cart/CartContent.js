import Link from 'next/link';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCartContext } from '../../context/cart';
import { useUserContext } from '../../context/user';
import { useGlobalContext } from '../../context/global';

const CartContent = () => {
  const { cart, total_amount } = useCartContext();
  const { user } = useUserContext();
  const { dispatch } = useGlobalContext();
  const { push } = useRouter();
  const { t } = useTranslation();

  const redirectUser = () => {
    if (user) {
      push('/checkout');
    } else {
      dispatch('OPEN_SIDEBAR_LOGIN');
    }
  };
  
  return (
    <section className='px-5 py-8'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item._id} {...item} />
      ))}
      <hr />
      <footer className='grid mt-8 lg:grid-cols-3'>
        <article className='flex flex-col items-center lg:col-start-3'>
          <div className='flex'>
            <label className='font-bold capitalize'>{t('cart:total')} :</label>
            <div className='text-xl rtl:pr-4 text-primary ltr:pl-4'>
              <span className='px-2'>EGP</span>
              <span>{total_amount}</span>
            </div>
          </div>
          <div className='my-2 text-sm text-gray-400'>
            {t('cart:total-desc')}
          </div>
          <div>
            <Link href='/products'>
              <button className='p-2 uppercase bg-gray-300 w-36 xl:w-44 hover:bg-gray-400'>
                {t('cart:return-to-shop')}
              </button>
            </Link>

            <button
              className='p-2 m-2 uppercase w-36 xl:w-44 btn-primary'
              onClick={redirectUser}
            >
              {t('cart:check-out')}
            </button>
          </div>
        </article>
      </footer>
    </section>
  );
};

export default CartContent;
