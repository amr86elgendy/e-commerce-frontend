import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/helpers/Breadcrumb';
import Star from '../../components/products/Star';
import ProductImages from '../../components/products/ProductImages';
import AddToCart from '../../components/cart/AddToCart';
import { getProduct } from '../../apis/product';

const ProductDetails = ({ product }) => {
  const { locale, pathname, query } = useRouter();
  const path = [pathname.split('/')[1], query.slug];

  if (!product) return <h1>Loading ...!</h1>;

  const {
    _id: SKU,
    name,
    brand,
    description,
    images,
    averageRating,
    numReviews,
    price,
    quantity,
  } = product;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <section className='min-h-page' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Breadcrumb path={path} />
        <div className='container px-5 py-12'>
          <Link href='/products'>
            <a className='capitalize py-1.5 px-4 btn btn-primary'>
              {locale === 'ar' ? 'العودة الي المنتجات' : 'back to shop'}
            </a>
          </Link>
          <div className='grid gap-8 mt-8 mb-8 lg:grid-cols-2'>
            <ProductImages images={images} />
            <section>
              <h2 className='mb-4 text-xl font-semibold sm:text-3xl'>{name}</h2>
              <Star rating={averageRating} numReviews={numReviews} />
              <h5 className='my-4 text-lg text-primary'>{price}</h5>
              <p className='mb-4 leading-loose text-paragraph'>{description}</p>
              <p
                className={
                  quantity === 0
                    ? 'capitalize w-72 grid grid-cols-[125px,1fr] mb-4 text-red-600'
                    : 'capitalize w-72 grid grid-cols-[125px,1fr] mb-4 text-primary'
                }
              >
                <span className='font-bold text-black'>Available : </span>
                {quantity > 0 ? 'In stock' : 'out of stock'}
              </p>
              <p className='grid mb-4 text-xs capitalize sm:text-base grid-cols-[125px,1fr]'>
                <span className='text-base font-bold'>SKU :</span>
                {SKU}
              </p>
              <p className='grid mb-4 capitalize w-72 grid-cols-[125px,1fr]'>
                <span className='font-bold'>Brand :</span>
                {brand}
              </p>
              <hr />
              {quantity > 0 && <AddToCart product={product} />}
            </section>
          </div>
          {/* <Reviews /> */}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ query }) {
  
  const data = await getProduct(query.id)
  
  if (!data) return { notFound: true };

  return {
    props: { product: data.product },
  };
}

export default ProductDetails;
