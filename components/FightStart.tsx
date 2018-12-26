import * as React from "react";
import { Component } from "react";

import { connect } from "react-redux";

import { updateState } from "reduxStore/actions";

import { Dispatch } from "redux";

interface Props {
  toShow: boolean;
  dispatch?: Dispatch;
}

interface State {
  toShow: boolean;
  showReady: boolean;
  showGo: boolean;
}

class FightStart extends Component<Props, State> {
  state = {
    toShow: this.props.toShow,
    showReady: false,
    showGo: false
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.toShow !== this.state.toShow) {
      this.setState(prevState => ({
        ...prevState,
        toShow: nextProps.toShow
      }));

      if (nextProps.toShow) {
        setTimeout(() => {
          this.showAnimation();
        }, 500);
      }
    }
  }

  showAnimation = () => {
    this.setState(
      prevState => ({
        ...prevState,
        showReady: true
      }),
      () => {
        setTimeout(() => {
          this.setState(
            prevState => ({
              ...prevState,
              showReady: false
            }),
            () => {
              setTimeout(() => {
                this.setState(
                  prevState => ({
                    ...prevState,
                    showGo: true
                  }),
                  () => {
                    setTimeout(() => {
                      this.setState(
                        prevState => ({
                          ...prevState,
                          showGo: false
                        }),
                        () => {
                          this.props.dispatch(updateState("showQuestion"));
                          this.setState(prevState => ({
                            ...prevState,
                            toShow: false
                          }));
                        }
                      );
                    }, 1000);
                  }
                );
              }, 250);
            }
          );
        }, 1500);
      }
    );
  };

  render() {
    return (
      <div className={`FightStart ${this.state.toShow ? "show" : ""}`}>
        <h1 className={`ready ${this.state.showReady ? "show" : ""}`}>
          מוכנים?
        </h1>
        <h1 className={`go ${this.state.showGo ? "show" : ""}`}>התחילו!</h1>
        <style jsx>{`
          .FightStart {
            display: none;
            position: absolute;
            direction: rtl;
            margin: auto;
            height: 15rem;
            width: 70%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
          }

          .FightStart.show {
            display: block;
          }

          .FightStart h1 {
            position: absolute;
            text-align: center;
            font-size: 10rem;
            color: #c00;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            transform: scale(0);
            transition: all 0.15s;
          }

          .FightStart h1.show {
            transform: scale(1);
          }
        `}</style>
      </div>
    );
  }
}

export default connect()(FightStart);
