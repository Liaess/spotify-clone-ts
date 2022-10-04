import { SongProvider } from "@/context/playlist";
import GlobalStyle from "@/styles/GlobalStyles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "next-auth";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>Spotify</title>
      </Head>
      <SongProvider>
        <SessionProvider session={pageProps.session}>
          <ToastContainer />
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </SongProvider>
    </>
  );
}

export default MyApp;
