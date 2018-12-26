import * as React from "react";
import { Component } from "react";

import { connect } from "react-redux";

import CorrectModal from "components/CorrectModal";
import Input from "components/Input";

import { QuestionInterface, StoreInterface } from "utils/types";

interface Props {
  question: QuestionInterface;
  toShow: boolean;
  keydown: { event: KeyboardEvent };
  state?: string;
}

interface State {
  isOpen: boolean;
  isCorrect: boolean;
  showCorrectModal: boolean;
}

class Question extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.checkAnswer = this.checkAnswer.bind(this);
    this.dismissModal = this.dismissModal.bind(this);
  }

  questionDiv: HTMLDivElement;
  answerInput: Input;

  state = {
    isOpen: this.props.toShow,
    isCorrect: null,
    showCorrectModal: false
  };

  componentWillReceiveProps(nextProps: Props) {
    if (
      nextProps.state === "showQuestion" &&
      nextProps.toShow !== this.props.toShow
    ) {
      this.setState(prevState => ({
        ...prevState,
        isOpen: nextProps.toShow
      }));

      if (nextProps.toShow) {
        this.questionDiv.focus();
        this.answerInput.input.focus();
      }
    } else if (
      nextProps.state !== "showQuestion" &&
      this.props.state === "showQuestion"
    ) {
      this.setState(prevState => ({
        ...prevState,
        isOpen: false,
        showCorrectModal: false,
        isCorrect: null
      }));
    }
  }

  checkAnswer(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" && this.state.isOpen) {
      const { correctAnswer } = this.props.question;
      const userAnswer = this.answerInput.input.value;

      this.setState(prevState => ({
        ...prevState,
        isCorrect: userAnswer === correctAnswer,
        showCorrectModal: true
      }));

      this.answerInput.input.value = "";

      this.dismissModal();
    }
  }

  dismissModal() {
    this.setState(prevState => ({
      ...prevState,
      isOpen: false
    }));
  }

  render() {
    return (
      <>
        <CorrectModal
          keydown={this.props.keydown}
          isOpen={this.state.showCorrectModal}
          isCorrect={this.state.isCorrect}
          question={this.props.question}
        />
        <div
          className={`questions-outer ${!this.state.isOpen ? "hide" : ""}`}
          onKeyDown={this.checkAnswer}
          ref={div => (this.questionDiv = div)}
        >
          <div className="questions-inner">
            <h1>שאלה מספר {this.props.question.id}</h1>
            <p>{this.props.question.question}</p>
            <span>{this.props.question.sentence}</span>
            <div className="answer">
              <Input
                type="text"
                label={this.props.question.answerLabel}
                autofocus
                ref={input => (this.answerInput = input)}
              />
            </div>
            <p className="call-to-action">
              לחץ על מקש האנטר בכדי לבדוק את התשובה
            </p>
          </div>
          <style jsx>{`
            .questions-outer {
              position: absolute;
              min-height: 100%;
              min-width: 100%;
              background: rgba(0, 0, 0, 0.4);
              z-index: 2;
            }

            .questions-outer.hide {
              display: none;
            }

            .questions-inner {
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

            .questions-inner h1 {
              font-size: 2.5rem;
            }

            .questions-inner p {
              font-size: 3rem;
              margin: 0;
            }

            .questions-inner span {
              font-size: 4rem;
              font-weight: bold;
            }

            .questions-inner .answer {
              font-size: 2rem;
              width: 50%;
              margin: 1.5rem auto;
            }

            .questions-inner p.call-to-action {
              font-size: 1.5rem;
              color: #9c9c9c;
              margin: 1rem 0 0;
            }
          `}</style>
        </div>
      </>
    );
  }
}

function mapStateToProps(state: StoreInterface) {
  const { state: gameState } = state;
  return { state: gameState };
}

export default connect(mapStateToProps)(Question);
