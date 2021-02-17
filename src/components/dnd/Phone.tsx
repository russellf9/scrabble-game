import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import "../../App.css";
import { ItemTypes } from "../dnd/Constants";
import { moveIncart } from "../../tiles/store/phoneActionCreators";

interface PhoneProps {
  id: number;
  brand: string;
  isDragging: boolean;
  connectDragSource: any;
}

interface PhoneActions {
  dispatch: Function;
}

type Props = PhoneActions & PhoneProps;

const phoneSpec = {
  beginDrag(props: PhoneProps) {
    console.log(`begin drag {}`);
    return {
      name: props.brand,
      id: props.id,
    };
  },
  // TODO see if I can type the monitor to `DropTargetMonitor`
  endDrag(props: Props, monitor: any, component: any) {
    if (monitor.didDrop()) {
      const dragItem = monitor.getItem();
      const dropResult = monitor.getDropResult();
      console.log(`You dropped: ${dragItem.name} | into ${dropResult.name}`);

      props.dispatch(moveIncart(dragItem.id));
    } else {
      return;
    }
  },
};

let collect = (connect: any, monitor: any) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};
const Phone = ({
  brand,
  id,
  isDragging,
  connectDragSource,
}: Props): JSX.Element => {
  const opacity = isDragging ? 0.4 : 1;
  const style = {
    opacity: opacity,
  };

  const phoneClass = isDragging ? `ui card phone drag` : `ui card phone`;

  return connectDragSource(
    <div className={phoneClass} style={style}>
      <div className="phone">
        <p>
          {id}-{brand}
        </p>
        <p>getting there...</p>
      </div>
    </div>
  );
};

export default connect()(
  DragSource(ItemTypes.PHONE, phoneSpec, collect)(Phone)
);
