import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import '../styles/globals.css';

import {OpenGraph} from '../_data/social-media';
import {ThemeProvider} from "next-themes";
import TagManager from 'react-gtm-module';
import {me} from "../_data/user-data";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        TagManager.initialize({gtmId: me.gtm});
    }, []);
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <DefaultSeo {...OpenGraph} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}