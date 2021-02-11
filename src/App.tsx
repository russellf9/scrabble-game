import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "./App.css";
import { MovableItem } from "./components/drag-and-drop/movable-item/MovableItem";
import { TileComponent } from "./components/tile/TileComponent";
import { TileRack } from "./components/tile-rack/TileRack";
import { TILES_NAMES, originalTiles } from "./constants";
import { ItemType } from "./interfaces";

function App() {
  const isMobile = window.innerWidth < 600;

  const { INITIAL, SELECTION } = TILES_NAMES;

  const [items, setItems] = useState(originalTiles);

  // TODO create type for `currentItem`
  const changeItemParentHandler = (
    currentItem: ItemType,
    newParent: string
  ): void => {
    console.log(`changeItemParentHandler  ${currentItem.name} | ${newParent} `);
    setItems((prevState) => {
      //displayItems(items);
      return prevState.map((e) => {
        return {
          ...e,
          currentParent:
            e.name === currentItem.name ? newParent : e.currentParent,
        };
      });
    });
    //console.log(`end...`);
    //displayItems(items);
  };

  // TODO  resolve this function
  // 1. Why when dropping is there no hover index?
  // 2. Add function so the items Collection is remade in the correct order
  const moveItemHandler = (dragIndex: number, hoverIndex: number): void => {
    //console.log(`New - moveItemHandler | ${dragIndex} | ${hoverIndex}`);

    const dragItem = items[dragIndex];
    //console.log(`the item we are about to reorder is: ${dragItem.name}`);

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];
        // remove the item with the "hoverIndex" and replace it with the "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  // TODO work out the exact return type here
  const returnItemsForTileRack = (parentName: string) => {
    return items
      .filter((item) => item.currentParent === parentName)
      .map((item, index) => (
        <MovableItem
          changeItemParent={changeItemParentHandler}
          currentParent={item.currentParent}
          index={index}
          key={item.id}
          moveItemHandler={moveItemHandler}
          name={`${item.id}-${item.letter}`}
        >
          <TileComponent letter={item.letter} score={item.score} />
        </MovableItem>
      ));
  };

  return (
    <div className="App">
      <div className="container">
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <TileRack tileRackType={INITIAL} className="tiles-container initial">
            {returnItemsForTileRack(INITIAL)}
          </TileRack>
          <TileRack
            tileRackType={SELECTION}
            className="tiles-container selection"
          >
            {returnItemsForTileRack(SELECTION)}
          </TileRack>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
