import * as React from "react";
import { Component } from "react";

import { connect } from "react-redux";
import keydown from "react-keydown";

import Intro from "components/Intro";
import End from "components/End";
import FightStart from "components/FightStart";
import Game from "components/Game";
import Question from "components/Question";

import questions from "utils/questionsList";
import { updateState } from "reduxStore/actions";

import { StoreInterface, OpponentInterface } from "utils/types";
import { Dispatch } from "redux";
import enemiesList from "utils/enemiesList";

interface Props {
  state: string;
  player: OpponentInterface;
  enemy: OpponentInterface;
  keydown: { event: KeyboardEvent };
  dispatch: Dispatch;
}

interface State {
  questionID: number;
}

@keydown
class Index extends Component<Props, State> {
  componentWillReceiveProps(nextProps: Props) {
    const { state, enemy, player, dispatch } = nextProps;
    if (state === "attack" && this.props.state === "showQuestion") {
      setTimeout(() => {
        this.setState(
          prevState => ({
            ...prevState,
            questionID: prevState.questionID + 1
          }),
          () => {
            if (player.hp === 0) {
              dispatch(updateState("lose"));
            } else if (enemy.hp > 0) {
              dispatch(updateState("showQuestion"));
            } else {
              if (enemy.id < enemiesList.length - 1) {
                dispatch(updateState("changeEnemy"));
              } else {
                dispatch(updateState("win"));
              }
            }
          }
        );
      }, 1500);
    }
  }

  state = {
    questionID: 0
  };

  render() {
    const { keydown, state } = this.props;

    return (
      <div className="app">
        <Intro keydown={keydown} />
        <End
          toShow={state === "win" || state === "lose"}
          didWin={state === "win"}
        />
        <FightStart toShow={state === "startFight"} />
        <Question
          keydown={keydown}
          question={questions[this.state.questionID]}
          toShow={state === "showQuestion"}
        />
        <Game />
      </div>
    );
  }
}

function mapStateToProps(state: StoreInterface) {
  const { state: gameState, enemy, player } = state;
  return { state: gameState, enemy, player };
}

export default connect(mapStateToProps)(Index);
