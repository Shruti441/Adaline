import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head' // ✅ Import Head to inject font link

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* ✅ Google Font for 'Playfair Display' */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
