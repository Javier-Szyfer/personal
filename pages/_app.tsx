import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";
import "../styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
