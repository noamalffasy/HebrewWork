import * as React from "react";
import { Component } from "react";

import { OpponentInterface } from "utils/types";

interface Props {
  opponent: OpponentInterface;
  isPlayer: boolean;
}

class HealthBar extends Component<Props> {
  render() {
    return (
      <div className={`health-outer ${this.props.isPlayer}`}>
        <div className="healthbar">
          <div className="health" />
        </div>
        <span className="hp">
          {this.props.opponent.hp > 0 ? this.props.opponent.hp : 0}
        </span>
        <style jsx>{`
          .health-outer {
            display: flex;
            width: 12rem;
            margin-top: -2rem;
            align-items: center;
          }

          .health-outer.enemy {
            flex-direction: row-reverse;
          }

          .health-outer .healthbar {
            width: 10rem;
            height: 1rem;
            border: 1px solid #161616;
          }

          .health-outer .healthbar .health {
            width: ${this.props.opponent.hp}%;
            height: 100%;
            background: #c00;
            transition: all 0.3s;
          }

          .health-outer span.hp {
            margin: 0 0 0 0.5rem;
          }

          .health-outer.enemy span.hp {
            margin: 0 0.5rem 0 0;
          }
        `}</style>
      </div>
    );
  }
}

export default HealthBar;
