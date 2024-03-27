import PlayerSymbol from './PlayerSymbol';
import {GameStatus, Player} from './types';

type Props = {
  status: GameStatus;
  curPlayer: Player;
  maxRemainingMoves: number;
};

export default function Status({status, curPlayer, maxRemainingMoves}: Props) {
  switch (status) {
    case 'PLAYING':
      return (
        <div>
          <p>
            Current player: <PlayerSymbol player={curPlayer} />
          </p>
          <p>Max. remaining moves: {maxRemainingMoves}</p>
        </div>
      );

    case 'WON':
      return (
        <p>
          <PlayerSymbol player={curPlayer} /> has won
        </p>
      );

    case 'DRAW':
      return <p>Draw</p>;
  }
}
