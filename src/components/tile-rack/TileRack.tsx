import React from "react";
//import { useDrop } from "react-dnd";
import { ITEM_TYPES } from "../../constants";

//TODO Get this to work
//type TileRackType = TILES_NAMES.INITIAL | TILES_NAMES.SELECTION;

export type TileRackType = "Initial" | "Selection";

export interface TileRackProps {
  tileRackType: TileRackType | string | undefined;
  className: string;
  children?: any; // SX.Element[];
}

type Props = TileRackProps;

export const TileRack = ({
  //
  tileRackType,
  className,
  children,
}: Props): JSX.Element => {
  return <div className={className}>{children}</div>;
};
