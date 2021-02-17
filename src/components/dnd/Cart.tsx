import { DropTarget, DropTargetMonitor, DropTargetConnector } from "react-dnd";
import { ItemTypes } from "../dnd/Constants";

interface CartProps {
  canDrop: boolean;
  isOver: boolean;
  connectDropTarget: any;
}

// DnD cartSpec
const cartSpec = {
  drop() {
    return { name: "Shopping Cart" };
  },
};

// DnD DropTarget
let collect = (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
};

const Cart = ({
  canDrop,
  isOver,
  connectDropTarget,
}: CartProps): JSX.Element => {
  let isActive = canDrop && isOver;

  let backgroundColor = "#AAAAAA";
  if (isActive) {
    backgroundColor = "#F7F7BD";
  } else if (canDrop) {
    backgroundColor = "#F7F7F7";
  }

  const style = {
    backgroundColor: backgroundColor,
  };

  return connectDropTarget(
    <div className="shopping-cart" style={style}>
      {isActive ? "Hu whtever" : "Drag here to order"}
    </div>
  );
};

export default DropTarget(ItemTypes.PHONE, cartSpec, collect)(Cart);
