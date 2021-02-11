import React from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPES } from "../../constants";

//TODO Get this to work
//type TileRackType = TILES_NAMES.INITIAL | TILES_NAMES.SELECTION;

type TileRackType = "Initial" | "Selection";

export interface TileRackProps {
  tileRackType: TileRackType | string;
  className: string;
  children: JSX.Element[];
}

type Props = TileRackProps;

export const TileRack = ({
  tileRackType,
  className,
  children,
}: Props): JSX.Element => {
  // TODO - how can I tidy up the `isOver` and `canDrop` ?
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ITEM_TYPES.DRAGGABLE_ITEM,
    drop: () => ({ name: tileRackType }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item: any) => {
      // only drop if the item is moving to a new Parent (TODO double check this)
      return item.currentParent !== tileRackType;
    },
  });
  return (
    <div ref={drop} className={className}>
      {children}
    </div>
  );
};
