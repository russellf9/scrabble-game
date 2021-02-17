import { combineReducers } from "redux";

import { tiles } from "./tiles";
import { phones } from "./phone";

const rootReducer = combineReducers({
  phones,
  tiles,
});

export default rootReducer;
