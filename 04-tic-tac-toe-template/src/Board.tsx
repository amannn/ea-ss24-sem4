import {Squares} from './types';
import PlayerSymbol from './PlayerSymbol';
import styles from './Board.module.css';

type Props = {
  squares: Squares;
  onMarkSquare(rowIndex: number, columnIndex: number): void;
};

export default function Board({squares, onMarkSquare}: Props) {
  return (
    <table className={styles.root}>
      <tbody>
        {squares.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.row}>
            {row.map((square, columnIndex) => (
              <td
                key={columnIndex}
                className={styles.square}
                onClick={() => onMarkSquare(rowIndex, columnIndex)}
              >
                {square != null && <PlayerSymbol player={square} />}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
