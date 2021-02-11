import { Tile, TileItemType } from "./interfaces";

export const ITEM_TYPES = {
  DRAGGABLE_ITEM: "draggable_item",
};

export const TILES_NAMES = {
  INITIAL: "Initial",
  SELECTION: "Selection",
};

const { INITIAL } = TILES_NAMES;

const allTiles: Tile[] = [
  { letter: "e", score: 1, count: 12 },
  { letter: "a", score: 1, count: 9 },
  { letter: "i", score: 1, count: 9 },
  { letter: "o", score: 1, count: 8 },
  { letter: "n", score: 1, count: 6 },
  { letter: "r", score: 1, count: 6 },
  { letter: "t", score: 1, count: 6 },
  { letter: "l", score: 1, count: 4 },
  { letter: "s", score: 1, count: 4 },
  { letter: "u", score: 1, count: 4 },

  { letter: "d", score: 2, count: 4 },
  { letter: "g", score: 2, count: 3 },

  { letter: "b", score: 3, count: 2 },
  { letter: "c", score: 3, count: 2 },
  { letter: "m", score: 3, count: 2 },
  { letter: "p", score: 3, count: 2 },

  { letter: "f", score: 4, count: 2 },
  { letter: "h", score: 4, count: 2 },
  { letter: "v", score: 4, count: 2 },
  { letter: "w", score: 4, count: 2 },
  { letter: "y", score: 4, count: 2 },

  { letter: "k", score: 5, count: 1 },

  { letter: "j", score: 8, count: 1 },
  { letter: "x", score: 8, count: 1 },

  { letter: "q", score: 10, count: 1 },
  { letter: "z", score: 10, count: 1 },
];
const initialLetters: Tile[] = [
  allTiles[0],
  allTiles[25],
  allTiles[3],
  allTiles[3],
  allTiles[8],
  allTiles[22],
  allTiles[7],
];

// TODO keep here for the time being
export const originalTiles: TileItemType[] = initialLetters.map(
  (obj, index) => {
    return {
      ...obj,
      id: index,
      name: `${index}-${obj.letter}`,
      currentParent: INITIAL,
    };
  }
);

// utility function to test the values in the model
export const displayItems = (items: any) => {
  items.forEach((item: any) => {
    console.log("item ", item);
  });
};
