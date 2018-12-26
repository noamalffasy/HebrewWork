import * as React from "react";
import { Component } from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";

import { updateState } from "reduxStore/actions";

interface Props {
  state?: string;
  keydown: { event: KeyboardEvent };
  dispatch: Dispatch;
}

interface State {
  isOpen: boolean;
}

class Intro extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.dismissModal = this.dismissModal.bind(this);
  }

  introDiv: HTMLDivElement;

  state = {
    isOpen: true
  };

  componentDidMount() {
    this.introDiv.focus();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.keydown.event !== this.props.keydown.event) {
      this.dismissModal();
    }
  }

  dismissModal() {
    if (this.state.isOpen) {
      this.setState(prevState => ({
        ...prevState,
        isOpen: false
      }));

      this.props.dispatch(updateState("startFight"));
    }
  }

  render() {
    return (
      <div
        className={`intro-outer ${!this.state.isOpen ? "hide" : ""}`}
        onKeyDown={this.dismissModal}
        ref={div => (this.introDiv = div)}
      >
        <div className="intro-inner">
          <h1>ברוכים הבאים!</h1>
          <p>
            זהו משחק אינטרקטיבי בו עליכם להביס אויבים. את האויבים אתם מביסים
            באמצעות מענה על שאלות בעברית.
          </p>
          <span>בהצלחה!</span>

          <p className="call-to-action">לחץ על כל מקש בכדי להתחיל</p>
        </div>
        <style jsx>{`
          .intro-outer {
            position: absolute;
            min-height: 100%;
            min-width: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 2;
          }

          .intro-outer.hide {
            display: none;
          }

          .intro-inner {
            direction: rtl;
            text-align: center;
            background: #fff;
            width: 90%;
            height: 70%;
            padding: 2rem 4rem;
            margin: 4rem auto;
            border-radius: 2px;
            box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.15);
          }

          .intro-inner h1 {
            font-size: 4rem;
          }

          .intro-inner p {
            font-size: 2rem;
          }

          .intro-inner span {
            font-size: 3rem;
            font-weight: bold;
          }

          .intro-inner p.call-to-action {
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
  return { state: state.state };
}

export default connect(mapStateToProps)(Intro);
