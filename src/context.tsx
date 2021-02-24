import React, { createContext, useReducer } from "react";
import { originalChosenTiles, originalTiles } from "./constants";
import { TileItemType } from "./interfaces";
import { TileActions, tilesReducer } from "./reducers";

export type InitialStateType = {
  tiles: {
    Initial: TileItemType[];
    Selection: TileItemType[];
  };
};

const initialState = {
  tiles: {
    Initial: originalTiles,
    Selection: originalChosenTiles,
  },
};
//
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<TileActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ tiles }: InitialStateType, action: TileActions) => ({
  tiles: tilesReducer(tiles, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
