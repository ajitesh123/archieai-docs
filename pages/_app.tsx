import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Archie AI Documentation</title>
        <meta name="description" content="Documentation for Archie AI features and tools" />
        <meta property="og:title" content="Archie AI Documentation" />
        <meta property="og:description" content="Documentation for Archie AI features and tools" />
        <meta property="og:image" content="https://yourdomain.com/default-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Archie AI Documentation" />
        <meta name="twitter:description" content="Documentation for Archie AI features and tools" />
        <meta name="twitter:image" content="https://yourdomain.com/default-og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}