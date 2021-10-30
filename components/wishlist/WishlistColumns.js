import { useRouter } from 'next/router';
import React from 'react';

const WishlistColumns = () => {
  const { locale } = useRouter()
  return (
    <div className='hidden md:block mt-8'>
      <div className='grid grid-cols-1fr-1fr-100 gap-x-4 lg:gap-x-12 capitalize'>
        <h5 className={`text-gray-400 ${locale === 'ar' ? 'font-helv mr-8' : 'ml-8'}`}>
          {locale === 'ar' ? 'أسم المنتج' : 'item'}
        </h5>
        <h5 className={`text-gray-400 justify-self-center lg:justify-self-start ${locale === 'ar' ? 'font-helv mr-4' : ''}`}>
          {locale === 'ar' ? 'السعر' : 'price'}
        </h5>
        <span className='md:w-8 md:h-8'></span>
      </div>
      <hr className='md:mt-4 md:mb-12' />
    </div>
  );
};

export default WishlistColumns;
