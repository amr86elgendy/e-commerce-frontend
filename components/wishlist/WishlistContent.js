import React from 'react'
import Link from 'next/link'
import WishlistColumns from './WishlistColumns';
import WishlistItem from './WishlistItem';
import { useWishlistContext } from '../../context/wishlist';
import Button from '../helpers/RippleButton';
import useTranslation from 'next-translate/useTranslation';

const WishlistContent = () => {
  const { wishlist } = useWishlistContext();
  const { t } = useTranslation()

  return (
    <section className='px-4 py-8'>
      <WishlistColumns />
      {wishlist.map((item) => (
        <WishlistItem key={item._id} {...item} />
      ))}
      <hr />
      <div className='flex justify-center mt-8'>
        <Link href='/products'>
          <button className='btn btn-primary px-4 py-1.5 uppercase'
          >
            {t('cart:return-to-shop')}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default WishlistContent
