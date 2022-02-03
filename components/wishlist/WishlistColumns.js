import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const WishlistColumns = () => {
  const { t } = useTranslation()
  return (
    <div className='hidden mt-8 md:block'>
      <div className='grid grid-cols-[1fr,1fr,100px] gap-x-4 lg:gap-x-12 capitalize'>
        <h5
          className='text-gray-400 rtl:mr-8 ltr:ml-8 '
        >
          {t('cart:item')}
        </h5>
        <h5
          className='text-gray-400 justify-self-center lg:justify-self-start rtl:mr-4'
        >
          {t('cart:price')}
        </h5>
        <span className='md:w-8 md:h-8'></span>
      </div>
      <hr className='md:mt-4 md:mb-12' />
    </div>
  );
};

export default WishlistColumns;
