import Board from './Board';
import Button from './Button';
import Status from './Status';
import styles from './App.module.css';
import {GameStatus, Player} from './types';

const initialSquares = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];

const initialPlayer: Player = 'X';
const initialStatus: GameStatus = 'PLAYING';
const initialMaxRemainingMoves = 9;

export default function App() {
  // TODO: Implement a `useGame` custom hook that replaces
  // the hardcoded values from above with state and logic.
  // To implemented the logic, you can make use of `./getWinner`

  function notImplementedYet() {
    alert('Not implemented yet');
  }

  return (
    <div className={styles.root}>
      <Board onMarkSquare={notImplementedYet} squares={initialSquares} />
      <Status
        status={initialStatus}
        curPlayer={initialPlayer}
        maxRemainingMoves={initialMaxRemainingMoves}
      />
      <div className={styles.actions}>
        <Button variant="secondary" onClick={notImplementedYet}>
          Reset
        </Button>
        <Button variant="secondary" onClick={notImplementedYet}>
          Load game state
        </Button>
      </div>
    </div>
  );
}
