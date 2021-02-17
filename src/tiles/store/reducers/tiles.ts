import { TypeKeys } from "../actionTypes";
//import { TileItemType } from "../../interfaces";
import { TilesActions } from "../actionCreators";
import { RootState } from "../../../interfaces";

export const initialState: RootState = {
  //tiles: {
  name: "russell",
  initialTiles: [], // TODO type somehow
  chosenTiles: [],
  //},
};

export const tiles = (
  state: RootState = initialState,
  action: TilesActions
): Object => {
  switch (action.type) {
    case TypeKeys.READY:
      console.log("ready");

      return {
        ...state,
      };

    default:
      return state;
  }
};
