import { TypeKeys } from "./actionTypes";
import { Ready } from "./actionCreators";

export const ready = (): Ready => ({
  type: TypeKeys.READY,
});
