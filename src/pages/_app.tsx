import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Hydrate } from 'react-query';
import AppProviders from 'AppProviders';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const isServer = typeof window === 'undefined';

if (process.env.NODE_ENV === 'development') {
  if (isServer) {
    (async () => {
      const server = await import('../mocks/server');
      server.default.listen();
    })();
  } else {
    (async () => {
      const worker = await import('../mocks/browser');
      worker.default.start();
    })();
  }
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppProviders>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </AppProviders>
  );
}

export default MyApp;
