import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserContext } from '../context/auth';
import { useWishlistContext } from '../context/wishlist';
import Breadcrumb from '../components/helpers/Breadcrumb';
import WishlistContent from '../components/wishlist/WishlistContent';
// import { useToastContext } from '../context/toast';
// import { v4 as uuidv4 } from 'uuid';
import { FiHeart } from 'react-icons/fi';

const wishlist = () => {
  const { pathname, push } = useRouter();
  const path = pathname.split('/').slice(1);
  const { wishlist } = useWishlistContext();
  const { user } = useUserContext();
  // const { dispatch } = useToastContext()

  // useEffect(() => {
  //   if (!user) {
  //     dispatch({
  //       type: 'ADD_NOTIFICATION',
  //       payload: {
  //         id: uuidv4(),
  //         type: 'danger',
  //         message:
  //           locale === 'ar'
  //             ? 'غير مسموح يرجي تسجيل الدخول'
  //             : 'un authorized please login',
  //       },
  //     });
  //     push('/');
  //   }
  // }, [user]);

  if (wishlist.length < 1)
    return (
      <>
        <Head>
          <title>Elgendy E-Commerce | Wishlist</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='author' content='Amr Elgendy' />
          <meta name='description' content='e-commerce website' />
        </Head>
        <div className='flex flex-col items-center pt-16 min-h-forMobile md:min-h-page'>
          <FiHeart size={70} color='gray' className='mb-4' />
          <h2 className='mb-8 font-normal tracking-wider uppercase'>
            your wishlist is empty
          </h2>
          <p className='mb-8 text-sm text-center text-gray-500'>
            You don't have any products in the wishlist yet.
            <br />
            You will find a lot of interesting products on our "Shop" page.
          </p>
          <Link href='/products'>
            <button className='px-6 py-2 tracking-widest uppercase btn btn-primary'>
              return to shop
            </button>
          </Link>
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Elgendy E-Commerce | Wishlist</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <Breadcrumb path={path} />
      <section className='container min-h-forMobile md:min-h-page'>
        <WishlistContent />
      </section>
    </>
  );
};

export default wishlist;
