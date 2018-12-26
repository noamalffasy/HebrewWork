import * as React from "react";
import { Component } from "react";

import { connect } from "react-redux";

import HealthBar from "components/HealthBar";

import { nextEnemy, updateState } from "reduxStore/actions";

import { ASSET_URL } from "utils/constants";

import { OpponentInterface, StoreInterface } from "utils/types";
import { Dispatch } from "redux";

interface Props {
  opponent: OpponentInterface;
  isPlayer: boolean;
  state: string;
  dispatch: Dispatch;
}

interface State {
  isHidden: boolean;
}

class OpponentHUD extends Component<Props, State> {
  state = {
    isHidden: false
  };

  componentWillReceiveProps(nextProps: Props) {
    const { isPlayer, state, dispatch } = nextProps;

    if (!isPlayer && state === "changeEnemy" && state !== this.props.state) {
      this.setState(
        prevState => ({
          ...prevState,
          isHidden: true
        }),
        () => {
          setTimeout(() => {
            dispatch(nextEnemy());

            this.setState(prevState => ({
              ...prevState,
              isHidden: false
            }), () => {
              setTimeout(() => {
                dispatch(updateState("startFight"))
              }, 500);
            });
          }, 1000);
        }
      );
    }
  }

  render() {
    const { opponent, isPlayer } = this.props;
    const { isHidden } = this.state;

    return (
      <div
        className={`OpponentHUD ${isPlayer ? "player" : "enemy"} ${
          isHidden ? "hide" : ""
        }`}
      >
        <div className="head">
          <div className="head-img" />
          <h1 className="name">{opponent.name}</h1>
        </div>
        <HealthBar opponent={opponent} isPlayer={isPlayer} />
        <style jsx>{`
          .OpponentHUD {
            display: flex;
            opacity: 1;
            align-items: center;
            transition: all 0.3s;
          }

          .OpponentHUD.enemy {
            flex-direction: row-reverse;
          }

          .OpponentHUD.hide {
            opacity: 0;
          }

          .OpponentHUD .head {
            display: flex;
            margin: 0 1rem 0 0;
            flex-direction: column;
            align-items: center;
          }

          .OpponentHUD.enemy .head {
            margin: 0 0 0 1rem;
          }

          .OpponentHUD .head .head-img {
            background-image: url(${ASSET_URL}/static/img/${this.props.opponent.srcName}/head.png);
            background-size: 90% 90%;
            background-repeat: no-repeat;
            background-position: center center;
            background-color: #a00;
            width: 4rem;
            height: 4rem;
            padding: 1rem;
            border-radius: 50%;
          }

          .OpponentHUD.enemy .head .head-img {
            transform: scaleX(-1);
          }

          .OpponentHUD .head h1.name {
            display: block;
            font-size: 1.2rem;
            line-height: 1.5rem;
            text-align: center;
            width: 4rem;
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

export default connect(mapStateToProps)(OpponentHUD);
