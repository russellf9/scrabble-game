import { useContext } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { AppContext } from "../../context";
import { MovableItem } from "../../components/drag-and-drop/movable-item/MovableItem";
import { TileComponent } from "../../components/tile/TileComponent";
import { ITEM_TYPES } from "../../constants";
import { ItemType, TileItemType } from "../../interfaces";
import { Types } from "../../reducers";

type TileRackType = "Initial" | "Selection";

export interface TileRackProps {
  tileRackType: TileRackType | string;
  className: string;
}

type Props = TileRackProps;

export const TileRackComponent = ({
  tileRackType,
  className,
}: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  const changeItemParentHandler = (
    currentItem: ItemType,
    newParent: string
  ): void => {
    dispatch({
      type: Types.ChangeParent,
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
  ): void => {
    dispatch({
      type: Types.MoveTile,
      payload: {
        dragIndex,
        hoverIndex,
        currentParent,
      },
    });
  };

  const renderTiles = (item: TileItemType, index: number): JSX.Element => (
    <MovableItem
      changeItemParent={changeItemParentHandler}
      currentParent={item.currentParent}
      index={index}
      key={item.id}
      moveItemHandler={moveItemHandler}
      name={`${item ? item.name : "not-known"}`}
    >
      <TileComponent letter={item.letter} score={item.score} />
    </MovableItem>
  );

  const tileType = tileRackType === "Initial" ? "Initial" : "Selection";
  const tiles = state.tiles[tileType].map(renderTiles);

  const [, drop] = useDrop({
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
      <p style={{ display: "none" }}>state: {JSON.stringify(state.tiles)}</p>
    </>
  );
};
