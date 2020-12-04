import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import SEO from "../next-seo.config.js";
import "../styles/globals.css";
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: "400",
        letterSpacing: "0.00938em",
      },
      body2: {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: "400",
        letterSpacing: "0.00938em",
      },
      h6: {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: "400",
        letterSpacing: "0.00938em",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
