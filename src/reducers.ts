import { Key } from "react";
import { TileItemType } from "./interfaces";

type ActionMap<M extends { [index: string]: any }> = {
  [key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  MoveTile = "MOVE_TILE", // for moveItemHandler
  ChangeParent = "CHANGE_PARENT", // for changeItemParentHandler
}

type TilePayload = {
  [Types.MoveTile]: {
    dragIndex: number;
    hoverIndex: number;
    currentParent: string;
  };
  [Types.ChangeParent]: {
    newParent: string;
    currentParent: string;
    name: string;
  };
};

type DropItemPayload = {
  dragIndex: number;
  hoverIndex: number;
  currentParent: string;
};

type ChangeParentPayLoad = {
  currentParent: string;
  index: number;
  name: string;
  newParent: string;
};

export type TileActions = ActionMap<TilePayload>[keyof ActionMap<TilePayload>];

// TODO I wasn't able to type the `state` here
const moveItems = (action: TileActions, state: any) => {
  const payload: DropItemPayload = action.payload as DropItemPayload;
  const { currentParent, dragIndex, hoverIndex } = payload;
  let arrayToMutate = state[currentParent];
  const itemToMove: TileItemType = arrayToMutate[dragIndex];

  arrayToMutate.splice(dragIndex, 1);
  arrayToMutate.splice(hoverIndex, 0, itemToMove);

  return arrayToMutate;
};

const changeParent = (action: TileActions, state: any) => {
  const payload: ChangeParentPayLoad = action.payload as ChangeParentPayLoad;

  const { currentParent, index, newParent } = payload;

  let arrayToRemoveItemFrom = state[currentParent];

  const itemToMove: TileItemType = arrayToRemoveItemFrom[index];

  arrayToRemoveItemFrom.splice(index, 1);

  let arrayToAddItemTo = state[newParent];
  arrayToAddItemTo.push(itemToMove); // TODO work out correct index later...

  // there must be a btter way!
  const currentParentIsInitial = currentParent === "Initial";
  const currentParentIsSelection = currentParent === "Selection";

  return {
    Initial: currentParentIsInitial ? arrayToRemoveItemFrom : arrayToAddItemTo,
    Selection: currentParentIsSelection
      ? arrayToRemoveItemFrom
      : arrayToAddItemTo,
  };
};

export const tilesReducer = (
  //state: TileItemType[], TODO work out types...
  state: any,
  action: TileActions
): any => {
  // TileItemType[] => {
  switch (action.type) {
    case Types.MoveTile:
      const payload: DropItemPayload = action.payload as DropItemPayload;
      //console.log(payload);
      const { currentParent } = payload;
      //
      //console.log(`is ${currentParent === "Initial"}`);
      const currentParentIsInitial = currentParent === "Initial";
      const currentParentIsSelection = currentParent === "Selection";
      return {
        Initial: currentParentIsInitial
          ? moveItems(action, state)
          : [...state.Initial],
        Selection: currentParentIsSelection
          ? moveItems(action, state)
          : [...state.Selection],
      };
    case Types.ChangeParent:
      return changeParent(action, state);

    default:
      return [...state];
  }
};
