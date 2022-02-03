import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import CartContent from '../../components/cart/CartContent';
import { useCartContext } from '../../context/cart';
import Breadcrumb from '../../components/helpers/Breadcrumb';
import { useRouter } from 'next/router';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import useTranslation from 'next-translate/useTranslation';
;


const cart = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const path = pathname.split('/').slice(1);
  const { cart } = useCartContext();

  if (cart.length < 1)
    return (
      <>
        <Head>
          <title>Elgendy E-Commerce | Cart</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='author' content='Amr Elgendy' />
          <meta name='description' content='e-commerce website' />
        </Head>
        <section className='flex flex-col items-center pt-16 min-h-forMobile md:min-h-page'>
          <HiOutlineShoppingBag size={70} color='gray' className='mb-4' />
          <h2 className='mb-8 font-normal tracking-wider uppercase'>
            {t('cart:empty-cart')}
          </h2>
          <p className='mb-8 text-sm text-center text-gray-500'>
            {t('cart:cart-desc-1')}
            <br />
            {t('cart:cart-desc-2')}
          </p>
          <Link href='/products'>
            <button className='px-6 py-2 tracking-widest uppercase btn btn-primary'>
              {t('cart:return-to-shop')}
            </button>
          </Link>
        </section>
      </>
    );
  return (
    <>
      <Head>
        <title>i Shop | Cart</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <Breadcrumb path={path} />
      <section className='container min-h-forMobile md:min-h-page'>
        <CartContent />
      </section>
    </>
  );
};

export default cart;
