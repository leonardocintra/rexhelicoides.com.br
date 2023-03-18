import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/MenuHeader";

export default function RootLayout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Rex - Helicoides</title>
        <meta name="description" content="Rex Helicoides" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
