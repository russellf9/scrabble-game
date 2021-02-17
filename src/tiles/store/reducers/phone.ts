import { PhoneActions } from "../phoneActionCreators";
import { TypeKeys } from "../actionTypes";
//
//
interface PhoneState {
  phones: any;
  id?: any;
}

const initialPhoneState: PhoneState = {
  phones: undefined,
};
export const phones = (
  state: PhoneState = initialPhoneState,
  action: any //PhoneActions
): any => {
  switch (action.type) {
    case TypeKeys.RECIEVE_PHONES:
      return {
        ...state,
        ...action.payload.phones,
      };

    case TypeKeys.MOVE_INCART:
      return {
        ...state,
        [action.id]: {
          inCart: "true",
        },
      };
    default:
      return state;
  }
};
