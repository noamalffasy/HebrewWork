import * as React from "react";
import { Component } from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";

import HUD from "components//HUD";
import Foreground from "components/Foreground";

import { OpponentInterface } from "utils/types";

interface Props {
  player: OpponentInterface;
  enemy: OpponentInterface;
  dispatch: Dispatch;
}

interface State {
  gameWidth: number;
}

class Game extends Component<Props, State> {
  state = {
    gameWidth: 1420
  };

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      gameWidth: window.innerWidth
    }));
  }

  render() {
    return (
      <div className="Game">
        <HUD playerHP={this.props.player.hp} currentEnemy={this.props.enemy} />
        <Foreground
          gameWidth={this.state.gameWidth}
          currentEnemy={this.props.enemy}
        />
        <style jsx>{`
          .Game {
            position: absolute;
            background-image: url(/static/img/background.jpg);
            height: 100%;
            width: 100%;
            z-index: 0;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { player, enemy } = state;
  return { player, enemy };
}

export default connect(mapStateToProps)(Game);
