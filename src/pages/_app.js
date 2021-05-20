import "./global.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  return NProgress.start();
});

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

// https://stackoverflow.com/questions/64722812/what-typescript-type-should-nextjs-app-tsx-component-and-pageprops-be
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
