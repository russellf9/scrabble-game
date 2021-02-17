import { RootState } from "../../../interfaces";

export const getName = (state: RootState): string => {
  //console.log(`hi from the Selector!`, state.tiles.name);
  return "roger"; //state.tiles.name;
};
