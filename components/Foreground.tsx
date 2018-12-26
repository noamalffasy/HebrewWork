import * as React from "react";
import { Component } from "react";

import { connect } from "react-redux";

import { ASSET_URL } from "utils/constants";

import { StoreInterface } from "utils/types";

interface Props {
  gameWidth: number;
  currentEnemy: {
    name: string;
    srcName: string;
  };
  state: string;
}

interface State {
  isEnemyHidden: boolean;
}

class Foreground extends Component<Props, State> {
  state = {
    isEnemyHidden: false
  };

  componentWillReceiveProps(nextProps: Props) {
    const { state } = nextProps;

    if (state === "changeEnemy" && state !== this.props.state) {
      this.setState(
        prevState => ({
          ...prevState,
          isEnemyHidden: true
        }),
        () => {
          setTimeout(() => {
            this.setState(prevState => ({
              ...prevState,
              isEnemyHidden: false
            }));
          }, 1000);
        }
      );
    }
  }

  render() {
    const numGrassBlocks = Math.ceil(this.props.gameWidth / 70);

    return (
      <div className="Foreground">
        <img
          className="opponent player"
          src={`${ASSET_URL}/static/img/character/body.png`}
          alt="שחקן"
        />
        <img
          className={`opponent enemy ${this.state.isEnemyHidden ? "hide" : ""}`}
          src={`${ASSET_URL}/static/img/${this.props.currentEnemy.srcName}/body.png`}
          alt="אויב"
        />
        <div className="grass">
          {[...Array(numGrassBlocks)].map((_, i) => {
            return <img src={`${ASSET_URL}/static/img/grass.png`} alt="אדמה" key={i} />;
          })}
        </div>
        <style jsx>{`
          .Foreground {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
          }

          .Foreground img.opponent {
            width: 10rem;
            height: 10rem;
            margin: 0 1rem -0.2rem;
            opacity: 1;
            transition: all 0.3s;
          }

          .Foreground img.opponent.enemy {
            margin: 0 1rem -0.2rem;
            float: right;
          }

          .Foreground img.opponent.hide {
            opacity: 0;
          }

          .Foreground .grass {
            width: 100%;
          }

          .Foreground .grass img {
            width: calc(100% / ${numGrassBlocks});
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state: StoreInterface) {
  const { state: gameState } = state;

  return { state: gameState };
}

export default connect(mapStateToProps)(Foreground);
