import Link from 'next/link';
import Image from 'next/image';
import Star from './Star';

const ListView = ({ products }) => {
  console.log(products);
  return (
    <section className='grid px-5 mb-16 gap-y-12'>
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
            className='items-center lg:grid grid-cols-[auto,1fr] gap-x-6'
          >
            <figure className='mb-4 overflow-hidden rounded sm:w-96'>
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
              <h4 className='mb-2 text-xl font-semibold'>{name}</h4>
              <h5 className='mb-3 text-secondary'>{price}</h5>
              <p className='mb-4 text-gray-500'>
                {description.substring(0, 150)}...
              </p>
              <Star rating={averageRating} numReviews={numReviews} />
              <Link href={`/products/${slug}?id=${_id}`}>
                <button className='px-4 py-1.5 mt-4 btn btn-primary'>
                  Details
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
