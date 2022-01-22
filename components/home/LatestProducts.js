import ProductCard from '../products/ProductCard';
import useTranslation from 'next-translate/useTranslation';

const LatestProducts = ({ products }) => {
  const { t } = useTranslation()
  return (
    <section className='py-20'>
      <header className='py-4 bg-gray-100 rounded-t-md'>
        <h1 className='italic font-bold tracking-wider text-center text-gray-400 uppercase'>
          {t('home:latest-products')}
        </h1>
      </header>
      <div className='grid gap-10 my-2 sm:grid-cols-2 xmd:grid-cols-3 xl:grid-cols-4'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
