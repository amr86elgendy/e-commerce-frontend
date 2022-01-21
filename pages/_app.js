import 'tailwindcss/tailwind.css';
import '../styles/app.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from '../layout';
import { UserProvider } from '../context/user';
import { GlobalProvider } from '../context/global';
import { ProductProvider } from '../context/product';
import { FilterProvider } from '../context/filter';
import { CartProvider } from '../context/cart';
import { WishlistProvider } from '../context/wishlist';
import { ToastProvider } from '../context/toast';
import { QueryClient, QueryClientProvider } from 'react-query';


import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link rel='icon' href='/diagram.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
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

export default appWithTranslation(MyApp, nextI18NextConfig);
