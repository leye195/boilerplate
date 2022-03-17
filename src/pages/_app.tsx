import type { AppProps } from 'next/app';
import AppProviders from 'AppProviders';
import '../styles/globals.css';
import { Hydrate } from 'react-query';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </AppProviders>
  );
}

export default MyApp;
