import Head from 'next/head';
import BestSeller from '../components/home/BestSeller';
import Header from '../components/home/Header';
import NewArrival from '../components/home/NewArrival';

export default function Home({ bestSeller, newArrival }) {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <Header />
      <NewArrival products={newArrival} />
      <BestSeller products={bestSeller} />
    </div>
  );
}

export async function getServerSideProps() {
  const resNew = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/new-arrival`
  );
  const newArrival = await resNew.json();
  const resBest = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/best-seller`
  );
  const bestSeller = await resBest.json();
  return {
    props: {
      newArrival,
      bestSeller,
    },
  };
}
