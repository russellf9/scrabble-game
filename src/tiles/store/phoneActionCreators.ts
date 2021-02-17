import { TypeKeys } from "./actionTypes";

// 1. Recieve
export interface RecievePhones {
  type: TypeKeys.RECIEVE_PHONES;
  payload: {
    phones: any;
  };
}

export interface MoveIncart {
  type: TypeKeys.MOVE_INCART;
  payload: {
    id: string;
  };
}

export type PhoneActions = RecievePhones | MoveIncart;

export const moveIncart = (phoneId: string) => {
  return {
    type: TypeKeys.MOVE_INCART,
    id: phoneId,
  };
};
