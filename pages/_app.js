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
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link rel='icon' href='/diagram.ico' />
      </Head>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}

export default MyApp
