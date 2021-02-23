import { useContext } from "react";
import { AppContext } from "./context";
import { Container } from "./components/dnd/container";
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import { AppProvider } from "./context";
import { TileRackComponent } from "./components/tile-rack/TileRackComponent";
import Toggle from "./components/toggle/toggle";
import { TILES_NAMES } from "./constants";

const App = (): JSX.Element => {
  const { INITIAL, SELECTION } = TILES_NAMES;

  return (
    <div className="App">
      <div className="container">
        <AppProvider>
          <DndProvider backend={HTML5Backend}>
            <TileRackComponent
              tileRackType={INITIAL}
              className="tiles-container initial"
            />
            <TileRackComponent
              tileRackType={SELECTION}
              className="tiles-container selection"
            />
          </DndProvider>
        </AppProvider>
      </div>
      <Toggle /> <Container />
    </div>
  );
};

export default App;
