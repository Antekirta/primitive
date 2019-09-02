import { peopleReducer } from './people-reducer';
import { woodReducer } from "./wood-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  woodStore: woodReducer,
  peopleStore: peopleReducer
});