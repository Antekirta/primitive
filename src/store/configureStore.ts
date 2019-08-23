import { rootReducer } from "../reducers/indexReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
