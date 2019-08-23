import { warehouseReducer } from "./warehouseReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  warehouse: warehouseReducer
});
