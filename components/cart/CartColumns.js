import useTranslation from 'next-translate/useTranslation';

const CartColumns = () => {
  const { t } = useTranslation();
  return (
    <div className='hidden mt-8 md:block'>
      <div className='grid capitalize grid-cols-[316px,1fr,1fr,1fr,auto] justify-items-center gap-x-4 lg:gap-x-12'>
        <h5 className='text-gray-400'>{t('cart:item')}</h5>
        <h5 className='text-gray-400'>{t('cart:price')}</h5>
        <h5 className='text-gray-400'>{t('cart:quantity')}</h5>
        <h5 className='text-gray-400'>{t('cart:subtotal')}</h5>
        <span className='md:w-8 md:h-8'></span>
      </div>
      <hr className='md:mt-4 md:mb-12' />
    </div>
  );
};

export default CartColumns;
