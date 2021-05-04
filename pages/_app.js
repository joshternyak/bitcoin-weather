import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bitcoin Weather - See Real-Time Bitcoin Price Predictions</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
