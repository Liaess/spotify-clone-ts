import { SongProvider } from "@/context/playlist";
import GlobalStyle from "@/styles/GlobalStyles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "next-auth";

function MyApp({ Component, pageProps }: AppProps<{session: Session}>) {
  return (
    <>
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
