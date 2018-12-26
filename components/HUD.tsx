import * as React from "react";
import { Component } from "react";

import OpponentHUD from "components/OpponentHUD";

import { OpponentInterface } from "utils/types";

interface Props {
  playerHP: number;
  currentEnemy: OpponentInterface;
}

class HUD extends Component<Props> {
  render() {
    return (
      <div className="HUD">
        <OpponentHUD
          opponent={{
            hp: this.props.playerHP,
            maxHP: 100,
            name: "במבה",
            srcName: "character"
          }}
          isPlayer={true}
        />
        <h1 className="stage">{this.props.currentEnemy.id + 1} שלב</h1>
        <OpponentHUD opponent={this.props.currentEnemy} isPlayer={false} />
        <style jsx>{`
            .HUD {
              display: flex;
              padding: 1rem 2rem;
              color #fff;
              justify-content: space-between;
              align-items: start;
            }

           .HUD .stage {
              text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default HUD;
