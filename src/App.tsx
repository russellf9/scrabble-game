import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import { AppProvider } from "./context";
import { TILES_NAMES } from "./constants";
import { TileRackComponent } from "./components/tile-rack/TileRackComponent";

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
    </div>
  );
};

export default App;
