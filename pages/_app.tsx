import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>G&N Design - Projektowanie Stron Internetowych</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="G&N Design" />
        <meta name="description" content="Web design and development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
