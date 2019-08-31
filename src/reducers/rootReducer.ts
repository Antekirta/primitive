import { woodReducer } from "./wood-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  woodStore: woodReducer
});