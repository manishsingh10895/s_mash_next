import { ColorModeScript } from '@chakra-ui/react';

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';


import theme from '../libs/theme';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name='application-name' content='Manish Singh' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Manish Singh' />
                    <meta name='description' content="Manish Singh's Personal Website" />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#202023' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#202023' />

                    <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/icon-152x152.png' />

                    <link rel='manifest' href='/manifest.json' />
                    <link rel='mask-icon' href='/icon-192x192.png' color='#5bbad5' />
                    <link rel='shortcut icon' href='/favicon.ico' />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://s-ma.sh' />
                    <meta name='twitter:title' content='Manish Singh' />
                    <meta name='twitter:description' content="Manish Singh's Personal Website" />
                    <meta name='twitter:image' content='https://s-ma.sh/icon-192x192.png' />
                    <meta name='twitter:creator' content='@S_mash011' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Manish Singh' />
                    <meta property='og:description' content="Manish Singh's Personal Website" />
                    <meta property='og:site_name' content='Manish Singh' />
                    <meta property='og:url' content='https://s-ma.sh' />
                    <meta property='og:image' content='https://s-ma.sh/icons/icon-384x384.png' />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}