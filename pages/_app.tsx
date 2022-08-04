import React from 'react';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main';
import theme from '../libs/theme';
import Fonts from '../components/Fonts';
import Chakra from '../components/chakra';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return <>
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        </Head>
        <Chakra cookies={pageProps.cookies}>
          <Fonts />
          <Layout router={router}>
            <AnimatePresence
              presenceAffectsLayout={false}
              exitBeforeEnter
              initial={false}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 });
                }
              }}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </Chakra>
      </Hydrate>
    </QueryClientProvider>
  </>
}

export default MyApp
