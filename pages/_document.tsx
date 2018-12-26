import Document, { Head, Main, NextScript } from "next/document";

import { ASSET_URL } from "utils/constants";
import enemiesList from "utils/enemiesList";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentWillMount() {
    let images = [];
    function preload(...urls: string[]) {
      for (let i = 0; i < urls.length; i++) {
        images[i] = new Image();
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
