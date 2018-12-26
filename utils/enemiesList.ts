import { OpponentInterface } from "./types";

const enemiesList: OpponentInterface[] = [
  {
    id: 0,
    hp: 100,
    maxHP: 100,
    name: "הראש החושב",
    srcName: "thinking_head",
    isBoss: false
  },
  {
    id: 1,
    hp: 100,
    maxHP: 100,
    name: "קירבי",
    srcName: "kirby",
    isBoss: false
  },
  {
    id: 2,
    hp: 100,
    maxHP: 100,
    name: "קוזו",
    srcName: "emperor",
    isBoss: false
  },
  {
    id: 3,
    hp: 100,
    maxHP: 100,
    name: "אליעזר בן יהודה",
    srcName: "eliazer_ben_judah",
    isBoss: true
  }
];

export default enemiesList;
