import { SongProvider } from "@/context/playlist";
import GlobalStyle from "@/styles/GlobalStyles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SongProvider>
        <SessionProvider session={session}>
          <ToastContainer />
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </SongProvider>
    </>
  );
}

export default MyApp;
