import * as React from "react";
import { Component } from "react";

interface Props {
  toShow: boolean;
  didWin: boolean;
}

class End extends Component<Props> {
  render() {
    const { didWin } = this.props;
    return (
      <div className={`end-outer ${this.props.toShow ? "show" : ""}`}>
        <div className="end-inner">
          <h1>{didWin ? "ניצחת!" : "הפסדת"}</h1>
          <p>
            {didWin
              ? "הצלחת לענות נכון על כל השאלות ולהביס את כל האויבים"
              : "לא הצלחת לענות נכון על כל השאלות"}
          </p>
          <span>{didWin ? "כל הכבוד!" : "תרצה לנסות שוב?"}</span>
          <p className="call-to-action">תרענן את הדף בכדי לשחק שוב</p>
        </div>
        <style jsx>{`
          .end-outer {
            position: absolute;
            display: none;
            min-height: 100%;
            min-width: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 2;
          }

          .end-outer.show {
            display: block;
          }

          .end-inner {
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

          .end-inner h1 {
            font-size: 4rem;
          }

          .end-inner p {
            font-size: 2rem;
          }

          .end-inner span {
            font-size: 3rem;
            font-weight: bold;
          }

          .end-inner p.call-to-action {
            font-size: 1.5rem;
            color: #9c9c9c;
            margin: 1rem 0 0;
          }
        `}</style>
      </div>
    );
  }
}

export default End;
