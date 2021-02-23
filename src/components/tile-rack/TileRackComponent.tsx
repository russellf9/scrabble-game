import { useContext } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { AppContext } from "../../context";
import { MovableItem } from "../../components/drag-and-drop/movable-item/MovableItem";
import { TileComponent } from "../../components/tile/TileComponent";
import { TileRack } from "../../components/tile-rack/TileRack";

import { ITEM_TYPES } from "../../constants";
import { ItemType, MovableItemType, TileItemType } from "../../interfaces";
import { Types } from "../../reducers";
type TileRackType = "Initial" | "Selection";

export interface TileRackProps {
  tileRackType: TileRackType | string;
  className: string;
  //children: JSX.Element[];
}

type Props = TileRackProps;

export const TileRackComponent = ({ tileRackType, className }: Props) => {
  const { state, dispatch } = useContext(AppContext);

  const changeItemParentHandler = (
    currentItem: ItemType,
    newParent: string
  ) => {
    console.log(
      `changeItemParentHandler | currentItem: ${currentItem.name} | newParent: ${newParent} | index: ${currentItem.index}`
    );
    debugger;
    dispatch({
      type: Types.MoveTile,
      payload: {
        newParent,
        currentParent: currentItem.currentParent,
        name: currentItem.name,
        index: currentItem.index,
      },
    });
  };
  const moveItemHandler = (
    dragIndex: number,
    hoverIndex: number,
    currentParent: string
  ) => {
    console.log(
      `moveItemHandler | dragIndex: ${dragIndex} | hoverIndex: ${hoverIndex} | currentParent: ${currentParent}`
    );
    dispatch({
      type: Types.DropTile,
      payload: {
        dragIndex,
        hoverIndex,
        currentParent,
      },
    });
  };

  const renderTiles = (item: TileItemType, index: number) => (
    <>
      <MovableItem
        changeItemParent={changeItemParentHandler}
        currentParent={item ? item.currentParent : "not-known"}
        index={index}
        key={item.id}
        moveItemHandler={moveItemHandler}
        name={`${item ? item.name : "not-known"}`}
      >
        <TileComponent letter={item.letter} score={item.score} />
      </MovableItem>
    </>
  );

  const tileType = tileRackType === "Initial" ? "Initial" : "Selection";
  const tiles = state.tiles[tileType].map(renderTiles);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ITEM_TYPES.DRAGGABLE_ITEM,
    drop: () => ({ name: tileRackType }),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item: any) => {
      return item.currentParent !== tileRackType;
    },
  });
  return (
    <>
      <div ref={drop} className={className}>
        {tiles}
      </div>
    </>
  );
};
