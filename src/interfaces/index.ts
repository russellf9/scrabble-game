export interface Tile {
  count?: number; // the original data has the `count` property, but the JSX element doesn't need it
  letter: string;
  score: number;
}

export interface ItemType {
  currentParent: string;
  key?: number;
  id?: number;
  name: string;
  index?: number;
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
  initialTiles: TileItemType;
  chosenTiles: TileItemType;
}
