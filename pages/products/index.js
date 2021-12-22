import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/helpers/Breadcrumb';
import ProductList from '../../components/products/ProductList';
import Sortbar from '../../components/products/Sortbar';
import Filter from '../../components/products/Filter';
import { useProductContext } from '../../context/product';
import { useEffect } from 'react';
import { getProducts } from '../../apis/product';

const index = ({ products }) => {
  const { pathname } = useRouter();
  const path = pathname.split('/').slice(1);
  const { dispatch } = useProductContext();

  useEffect(() => {
    dispatch('ALL_PRODUCTS', products);
  }, [products]);
  
  return (
    <>
      <Head>
        <title>i Shop | Our Products</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <Breadcrumb path={path} />
      <main className='container px-4'>
        <Sortbar />
        <Filter />
        <ProductList />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getProducts();

  if (!data) return { notFound: true };

  return {
    props: { products: data.products },
  };
}

export default index;
