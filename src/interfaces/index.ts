export interface Tile {
  count?: number;
  letter: string;
  score: number;
}

export interface ItemType {
  currentParent: string;
  key?: number;
  id?: number;
  name?: string;
}

export type TileItemType = Tile & ItemType;

export interface MovableItemType {
  changeItemParent: Function;
  children: any;
  currentParent: string;
  index: any;
  key: number;
  moveItemHandler: Function;
  name: string;
}

// Note - for the `tileReducer`
export interface Tiles {
  name: string;
  tiles: {
    initialTiles: TileItemType;
    chosenTiles: TileItemType;
  };
}

//TODO this seems like an unnecessary complication to avoid the extra `tiles` level on the state level
export interface TilesRootState {
  tiles: RootState;
}

export interface RootState {
  name: string;
  initialTiles: any; //TileItemType;
  chosenTiles: any; // TileItemType;
}
