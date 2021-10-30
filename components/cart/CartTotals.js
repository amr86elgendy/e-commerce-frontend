import Link from 'next/link';
import { useCartContext } from '../../context/cart';
import { useUserContext } from '../../context/auth';

const CartTotals = () => {
  const { dispatch, user } = useUserContext();
  const { shipping_fee, total_amount } = useCartContext();

  return (
    <section className='flex justify-center mt-10 md:justify-end'>
      <div>
        <article className='px-8 py-6 border border-gray-300 rounded shadow-md sm:px-12'>
          <h5
            className={`grid grid-cols-125-1fr sm:grid-cols-200-1fr sm:text-lg`}
          >
            subtotal
            <span>{total_amount}</span>
          </h5>
          <p
            className={`grid grid-cols-125-1fr sm:grid-cols-200-1fr capitalize mb-2`}
          >
            shipping fee
            <span>{shipping_fee}</span>
          </p>
          <hr />
          <h4
            className={`grid grid-cols-125-1fr sm:grid-cols-200-1fr mt-8  sm:text-xl`}
          >
            order total
            <span className='text-third'>{total_amount + shipping_fee}</span>
          </h4>
        </article>
        {user && user.token ? (
          <Link href='/checkout'>
            <button
              className={`uppercase w-full py-2.5 bg-secondary hover:bg-third mt-4 text-center rounded focus:outline-none transition-all duration-300`}
            >
              proceed to checkout
            </button>
          </Link>
        ) : (
          <button
            onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            className={`uppercase w-full py-2.5 bg-secondary hover:bg-third mt-4 text-white font-semibold text-center rounded focus:outline-none transition-all duration-300`}
          >
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
