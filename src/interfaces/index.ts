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
