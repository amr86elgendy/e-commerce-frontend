import axios from 'axios';
import Head from 'next/head';
import BestSeller from '../components/home/BestSeller';
import Header from '../components/home/Header';
import LatestProducts from '../components/home/LatestProducts';

export default function Home({ bestSeller, latestProducts }) {
  return (
    <div className='container px-4'>
      <Head>
        <title>i Shop | Home</title>
      </Head>
      <Header />
      <LatestProducts products={latestProducts} />
      <BestSeller products={bestSeller} />
    </div>
  );
}

export async function getServerSideProps() {
  const {
    data: { products: latestProducts },
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products?sort=createdAt&limit=4`
  );

  const {
    data: { products: bestSeller },
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products?sort=sold&limit=4`
  );
  return {
    props: {
      latestProducts,
      bestSeller,
    },
  };
}