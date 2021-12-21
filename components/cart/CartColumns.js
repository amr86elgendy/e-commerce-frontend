import { useRouter } from 'next/router';
import React from 'react';

const CartColumns = () => {
  const { locale } = useRouter();
  
  return (
    <div className='hidden mt-8 md:block'>
      <div className='grid capitalize grid-cols-[316px,1fr,1fr,1fr,auto] justify-items-center gap-x-4 lg:gap-x-12'>
        <h5 className='text-gray-400'>{locale === 'ar' ? 'المنتج' : 'item'}</h5>
        <h5 className='text-gray-400'>{locale === 'ar' ? 'السعر' : 'price'}</h5>
        <h5 className='text-gray-400'>
          {locale === 'ar' ? 'الكمية' : 'quantity'}
        </h5>
        <h5 className='text-gray-400'>
          {locale === 'ar' ? 'المجموع' : 'subtotal'}
        </h5>
        <span className='md:w-8 md:h-8'></span>
      </div>
      <hr className='md:mt-4 md:mb-12' />
    </div>
  );
};

export default CartColumns;
