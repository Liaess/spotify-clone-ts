import GlobalStyle from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { Html } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
