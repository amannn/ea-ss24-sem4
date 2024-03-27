import {Player} from './types';

type Props = {
  player: Player;
};

export default function PlayerSymbol({player}: Props) {
  return <>{player === 'X' ? 'X' : 'O'}</>;
}
