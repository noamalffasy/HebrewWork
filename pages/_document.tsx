import Document, { Head, Main, NextScript } from "next/document";

import { ASSET_URL } from "utils/constants";
import enemiesList from "utils/enemiesList";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      let images: HTMLImageElement[] = [];

      function preload(...urls: string[]) {
        for (let i = 0; i < urls.length; i++) {
          images[i] = document.createElement("img");
          images[i].src = urls[i];
        }
      }
      preload(
        ...[
          ...enemiesList,
          { srcName: `${ASSET_URL}/static/img/character/body.png` }
        ].map(character => character.srcName)
      );
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="עבודה בעברית 2018" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

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
