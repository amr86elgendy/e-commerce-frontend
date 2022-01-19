import axios from 'axios';
import Head from 'next/head';
import BestSeller from '../components/home/BestSeller';
import Header from '../components/home/Header';
import NewArrival from '../components/home/NewArrival';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({ bestSeller, newArrival }) {
  return (
    <div>
      <Head>
        <title>i Shop | Home</title>
      </Head>
      <Header />
      <NewArrival products={newArrival} />
      <BestSeller products={bestSeller} />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  const {
    data: { products: newArrival },
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products?sort=createdAt`
  );

  const {
    data: { products: bestSeller },
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products?sort=sold`
  );
  return {
    props: {
      newArrival,
      bestSeller,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
