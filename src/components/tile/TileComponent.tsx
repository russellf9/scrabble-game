import { ReactElement } from "react";
import { Tile } from "../../interfaces";

type Props = Tile;

export const TileComponent = ({ letter, score }: Props): ReactElement<Tile> => {
  return (
    <div className="center-box tile">
      <h1>{letter}</h1>
      <p className="score">{score}</p>
    </div>
  );
};
