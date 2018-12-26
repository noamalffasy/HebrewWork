import * as React from "react";
import { Component } from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";

import { updatePlayerHP, updateEnemyHP, updateState } from "reduxStore/actions";

import { QuestionInterface, OpponentInterface } from "utils/types";

interface Props {
  isOpen: boolean;
  isCorrect: boolean;
  question: QuestionInterface;
  enemy: OpponentInterface;
  state: string;
  keydown: { event: KeyboardEvent };
  dispatch: Dispatch;
}

interface State {
  isOpen: boolean;
}

class CorrectModal extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.dismissModal = this.dismissModal.bind(this);
  }

  correctModalDiv: HTMLDivElement;

  state = {
    isOpen: this.props.isOpen
  };

  componentWillReceiveProps(nextProps: Props) {
    if (
      nextProps.state === "showQuestion" &&
      nextProps.isOpen !== this.state.isOpen &&
      nextProps.isOpen
    ) {
      this.setState(prevState => ({
        ...prevState,
        isOpen: nextProps.isOpen
      }));

      if (nextProps.isOpen) {
        this.correctModalDiv.focus();
      }
    } else if (
      this.state.isOpen &&
      nextProps.keydown.event !== this.props.keydown.event
    ) {
      this.dismissModal();
    }
  }

  dismissModal() {
    if (this.props.state === "showQuestion" && this.state.isOpen) {
      const { isCorrect, enemy, dispatch } = this.props;

      this.setState(
        prevState => ({
          ...prevState,
          isOpen: false
        }),
        () => {
          if (isCorrect) {
            const newHP = -Math.floor(enemy.maxHP / (enemy.isBoss ? 3 : 2));

            dispatch(updateEnemyHP(newHP));
          } else {
            dispatch(updatePlayerHP(-10));
          }
          dispatch(updateState("attack"));
        }
      );
    }
  }

  render() {
    return (
      <div
        className={`correct-modal-outer ${!this.state.isOpen ? "hide" : ""}`}
        onKeyDown={this.dismissModal}
        ref={div => (this.correctModalDiv = div)}
      >
        <div className="correct-modal-inner">
          <h1>{this.props.isCorrect ? "צדקת!" : "טעית!"}</h1>
          <p>
            במשפט <span>{this.props.question.sentence}</span>
          </p>
          <p className="big">
            ה{this.props.question.answerLabel} הוא{" "}
            <span>{this.props.question.correctAnswer}</span>
          </p>
          <p className="call-to-action">לחץ על כל מקש בכדי להמשיך</p>
        </div>
        <style jsx>{`
          .correct-modal-outer {
            position: absolute;
            min-height: 100%;
            min-width: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 2;
          }

          .correct-modal-outer.hide {
            display: none;
          }

          .correct-modal-inner {
            direction: rtl;
            text-align: center;
            background: #fff;
            width: 90%;
            height: 70%;
            padding: 2rem 4rem;
            margin: 10rem auto;
            border-radius: 2px;
            box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.15);
          }

          .correct-modal-inner h1 {
            font-size: 2.5rem;
          }

          .correct-modal-inner p {
            font-size: 2.5rem;
            margin: 0;
          }

          .correct-modal-inner p span {
            font-size: 2.5rem;
            font-weight: bold;
          }

          .correct-modal-inner p.big {
            font-size: 3rem;
          }

          .correct-modal-inner p.big span {
            font-size: 3rem;
          }

          .correct-modal-inner p.call-to-action {
            font-size: 1.5rem;
            color: #9c9c9c;
            margin: 1rem 0 0;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { player, enemy, state: gameState } = state;
  return { player, enemy, state: gameState };
}

export default connect(mapStateToProps)(CorrectModal);
