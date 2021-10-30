import { useRouter } from 'next/router';
import ProductCard from '../products/ProductCard';

const BestSeller = ({ products }) => {
  const { locale } = useRouter();

  return (
    <section className='px-5 py-20 bg-gray-100'>
      <h1
        className='mb-3 italic font-bold tracking-wider text-center uppercase md:text-5xl'
      >
        best-Seller
      </h1>
      <div className='w-24 h-1 mx-auto bg-secondary'></div>
      <div className='grid gap-10 my-16 sm:grid-cols-2 xmd:grid-cols-3 xl:grid-cols-4'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
