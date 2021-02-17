// ActionCreators
// NOTE:
// I'll add the types here rather than add a `type.d.ts` file
// I could also use the `Ducks` pattern as an alternative (See: https://levelup.gitconnected.com/set-up-a-typescript-react-redux-project-35d65f14b869)
// I've been looking at: https://levelup.gitconnected.com/set-up-a-typescript-react-redux-project-35d65f14b869
//
//
//
//
// will use TileItemType[]
//
import { TileItemType } from "../../interfaces";
import { TypeKeys } from "./actionTypes";
// 1. READY
export interface Ready {
  type: TypeKeys.READY;
}

// Not sure how to do this...
//The payload contains the update to both Collections of tiles
export interface HandUpdate {
  type: TypeKeys.HAND_UPDATE;
  payload: {
    tiles: {
      initialTiles: TileItemType[];
      chosenTiles: TileItemType[];
    };
  };
}

export type TilesActions = Ready | HandUpdate;
