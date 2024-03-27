import {Squares} from './types';

export default function getWinner(squares: Squares) {
  const rows = squares;

  const columns = [
    [rows[0][0], rows[1][0], rows[2][0]],
    [rows[0][1], rows[1][1], rows[2][1]],
    [rows[0][2], rows[1][2], rows[2][2]]
  ];

  const diagonals = [
    [rows[0][0], rows[1][1], rows[2][2]],
    [rows[0][2], rows[1][1], rows[2][0]]
  ];

  const allLines = [...rows, ...columns, ...diagonals];

  for (const line of allLines) {
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }

  return undefined;
}
