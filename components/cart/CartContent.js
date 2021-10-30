import Link from 'next/link';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import Button from '../helpers/RippleButton'
import { useCartContext } from '../../context/cart';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <section className='px-5 py-8'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item._id} {...item} />
      ))}
      <hr />
      <div className='flex justify-around mt-8'>
        <Link href='/products'>
          <a>
            <button className='btn px-4 py-1.5 btn-primary uppercase'>go shop</button>
          </a>
        </Link>
        <Button
          className='px-4 bg-gray-100 py-1.5 hover:bg-gray-200 capitalize'
          onClick={clearCart}
        >
          clear all
        </Button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;
