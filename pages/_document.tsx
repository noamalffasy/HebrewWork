import Document, { Head, Main, NextScript } from "next/document";

import { ASSET_URL } from "utils/constants";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href={`${ASSET_URL}/static/css/bootstrap/bootstrap-reboot.min.css`}
          />
          <link
            rel="stylesheet"
            href={`${ASSET_URL}/static/css/bootstrap/bootstrap-grid.min.css`}
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
