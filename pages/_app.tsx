import React from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

import { OpenGraph } from '../_data/social-media';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefaultSeo {...OpenGraph} />
      <Component {...pageProps} />
    </>
  );
}