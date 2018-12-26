export interface OpponentInterface {
  id: number;
  hp: number;
  maxHP: number;
  name: string;
  srcName: string;
  isBoss?: boolean;
}

export interface QuestionInterface {
  id: number;
  question: string;
  sentence: string;
  answerLabel: string;
  correctAnswer: string;
}

export interface StoreInterface {
  player: OpponentInterface;
  enemy: OpponentInterface;
  state: string;
}