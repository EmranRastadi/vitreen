import '../styles/globals.css';
import React, { useEffect } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from '@organisms/index';
import 'swiper/swiper.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from '@utils/Store';

function MyApp({ Component, pageProps }) {
  const [ queryClient ] = React.useState( () => new QueryClient() );

  useEffect( () => {
    const jssStyle = document.querySelector( '#jss-server-side' );
    if ( jssStyle ) {
      jssStyle.parentElement.removeChild( jssStyle );
    }
  }, [] );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StoreProvider>
          <ToastContainer position={'top-left'}/>
          <Navbar/>
          <Component {...pageProps} />
        </StoreProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
