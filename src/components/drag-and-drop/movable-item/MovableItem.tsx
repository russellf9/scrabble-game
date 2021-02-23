import * as React from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemType } from "../../../interfaces";
import { ITEM_TYPES } from "../../../constants";

export interface MovavbleItemProps {
  name: string;
  index: number;
  currentParent: string;
  children: JSX.Element;
}

export interface MovableItemDispatchProps {
  changeItemParent: (currentItem: ItemType, newParent: string) => void;
  moveItemHandler: (
    dragIndex: number,
    hoverIndex: number,
    currentParent: string
  ) => void;
}

type Props = MovavbleItemProps & MovableItemDispatchProps;

export const MovableItem = ({
  name,
  index,
  currentParent,
  children,
  changeItemParent,
  moveItemHandler,
}: Props): JSX.Element => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPES.DRAGGABLE_ITEM,
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      console.log(
        `cant work this out | dragIndex: ${dragIndex} | hover index: ${hoverIndex}`
      );
      //debugger
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      const current = ref.current;

      console.log(`current: ${current}`);
      if (!current) {
        return;
      }

      const element = current as Element;
      const hoverBoundingRect = element.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top

      const offsetY = clientOffset ? clientOffset.y : 0;
      const hoverClientY = offsetY - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      //
      console.log("should be calling moveItemHandler");
      moveItemHandler(dragIndex, hoverIndex, currentParent);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, name, currentParent, type: ITEM_TYPES.DRAGGABLE_ITEM },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // TODO remove some of the consts here
      const didDrop = monitor.didDrop();
      debugger;

      if (item && dropResult && dropResult.name) {
        const newParent = dropResult.name;
        changeItemParent(item, newParent);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
      {children}
    </div>
  );
};
