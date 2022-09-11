import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-167339952-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-167339952-1');
        `,
            }}
          />{" "}
          <link rel="shortcut icon" href="/fav.svg" />
          <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twcard"
          />
          <meta name="twitter:site" content="@javvvs_" />
          <meta name="twitter:creator" content="@javvvs_" />
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twcard"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/aldi/image/upload/v1662922210/javier/javvvs-open-graph-card_otdyor.jpg"
            key="ogimage"
          />
          <meta
            property="og:image:alt"
            content="javier.onl - open graph card"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
