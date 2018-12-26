import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const assetPrefix =
      process.env.NODE_ENV === "production" ? "/HebrewWork" : "";

    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href={`${assetPrefix}/static/css/bootstrap/bootstrap-reboot.min.css`}
          />
          <link
            rel="stylesheet"
            href={`${assetPrefix}/static/css/bootstrap/bootstrap-grid.min.css`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
