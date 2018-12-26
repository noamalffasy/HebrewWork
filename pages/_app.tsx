import * as React from "react";
import { Provider } from "react-redux";

import App, { Container } from "next/app";
import withReduxStore from "lib/with-redux-store";

import { OpponentInterface } from "utils/types";

interface Props {
  reduxStore: {
    player: OpponentInterface;
    enemy: OpponentInterface;
  };
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);