import Link from 'next/link';
import Image from 'next/image';
import Star from './Star';

const ListView = ({ products }) => {
  return (
    <section className='grid px-5 my-8 gap-y-4'>
      {products.map((product) => {
        const {
          _id,
          images,
          name,
          price,
          description,
          averageRating,
          numReviews,
          slug,
        } = product;
        return (
          <article
            key={_id}
            className='items-center md:grid grid-cols-[auto,1fr] gap-x-6 hover:scale-[1.01] hover:shadow-filter'
          >
            <figure className='overflow-hidden sm:w-56'>
              <Image
                src={`${process.env.NEXT_PUBLIC_APP_URL}${images[0]}`}
                alt={slug}
                width={390}
                height={310}
                layout='responsive'
                className='align-middle transition-transform duration-1000 scale-100 hover:scale-125'
              />
            </figure>
            <div>
              <h4 className='px-4 mb-2 font-semibold'>{name}</h4>
              <h5 className='px-4 mb-3 text-primary'>{price}</h5>
              <p className='px-4 mb-4 text-sm text-gray-500'>
                {description.substring(0, 150)}...
              </p>
              <div className='flex items-center justify-between px-4'>
                <Star rating={averageRating} numReviews={numReviews} />
                <Link href={`/products/${slug}?id=${_id}`}>
                  <button className='py-1.5 btn btn-primary px-4 rounded'>
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
