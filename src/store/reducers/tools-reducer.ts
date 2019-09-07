import { iTool } from "classes/tools/interface";
import { AnyAction } from "redux";

export interface iToolsReducerState {
  tools: Array<iTool>;
}

const initialState: iToolsReducerState = {
  tools: []
};

export const toolReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
