import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import client from '@config/apollo.config';

//estilos de normalize
import 'normalize.css';
//estilos globales
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
