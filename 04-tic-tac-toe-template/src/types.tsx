export type GameStatus = 'PLAYING' | 'WON' | 'DRAW';

export type Player = 'X' | 'O';

export type SquareContent = undefined | Player;

export type Row = Array<SquareContent>;

export type Squares = Array<Row>;
