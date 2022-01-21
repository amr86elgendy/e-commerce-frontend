import ProductCard from '../products/ProductCard';
import useTranslation from 'next-translate/useTranslation';

const BestSeller = ({ products }) => {
  const { t, lang } = useTranslation();
  console.log(lang);
  return (
    <section className='py-2'>
      <header className='py-4 bg-gray-100 rounded-t-md'>
        <h1 className='italic font-bold tracking-wider text-center text-gray-400 uppercase'>
          {t('home:best-seller')}
          {/* Best-Seller */}
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

export default BestSeller;
