import React from 'react'
import Link from 'next/link'
import WishlistColumns from './WishlistColumns';
import WishlistItem from './WishlistItem';
import { useWishlistContext } from '../../context/wishlist';
import { useRouter } from 'next/router';
import Button from '../helpers/RippleButton';

const WishlistContent = () => {
  const { wishlist, clearWishlist } = useWishlistContext();
  const { locale } = useRouter()

  return (
    <section className='px-4 py-8'>
      <WishlistColumns />
      {wishlist.map((item) => (
        <WishlistItem key={item._id} {...item} />
      ))}
      <hr />
      <div className='flex justify-around mt-8'>
        <Link href='/products'>
          <button className='btn btn-primary px-4 py-1.5 uppercase'
          >
            go shop
          </button>
        </Link>
        <Button
          className='bg-gray-100 px-4 py-1.5 hover:bg-gray-200 capitalize'
          onClick={clearWishlist}
        >
          clear all
        </Button>
      </div>
    </section>
  );
}

export default WishlistContent
