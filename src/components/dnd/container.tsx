import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Phone from "./Phone";
import Cart from "./Cart";

export const Container = (): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="shopping-cart">
        <Cart />
        <Phone id={1} brand="iPhone" />
      </div>
    </DndProvider>
  );
};
