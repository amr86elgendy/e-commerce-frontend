import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/helpers/Breadcrumb';
import ProductList from '../../components/products/ProductList';
import Sortbar from '../../components/products/Sortbar';
import Filter from '../../components/products/Filter'

const index = () => {
  const { pathname } = useRouter();
  const path = pathname.split('/').slice(1);

  return (
    <>
      <Head>
        <title>Elgendy E-Commerce | Our Products</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <Breadcrumb path={path} />
      <main
        className='container px-4'
      >
        <Sortbar />
        <Filter />
        <ProductList />
      </main>
    </>
  );
}

export default index
