import 'tailwindcss/tailwind.css';
import '../styles/app.css';
import Head from 'next/head';
import Layout from '../layout';
import { UserProvider } from '../context/auth';
import { GlobalProvider } from '../context/global';
import { ProductProvider } from '../context/product';
import { FilterProvider } from '../context/filter';
import { CartProvider } from '../context/cart';
import { WishlistProvider } from '../context/wishlist';
import { ToastProvider } from '../context/toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/diagram.ico' />
      </Head>
      <UserProvider>
        <GlobalProvider>
          <ProductProvider>
            <FilterProvider>
              <CartProvider>
                <WishlistProvider>
                  <ToastProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ToastProvider>
                </WishlistProvider>
              </CartProvider>
            </FilterProvider>
          </ProductProvider>
        </GlobalProvider>
      </UserProvider>
    </>
  );
}

export default MyApp
