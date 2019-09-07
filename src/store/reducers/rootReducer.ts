import { peopleReducer } from "./people-reducer";
import { woodReducer } from "./wood-reducer";
import { toolReducer } from "./tools-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  woodStore: woodReducer,
  toolStore: toolReducer,
  peopleStore: peopleReducer
});
