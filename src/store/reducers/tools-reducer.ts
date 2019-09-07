import { iTool } from "classes/tools/interface";
import { TOOLS } from "classes/tools/Tool";
import { AnyAction } from "redux";
import { TOOLS_ACTIONS } from "store/actions/tools-actions"; 

export interface iToolsReducerState {
  tools: {
    [key in TOOLS]: Array<iTool>;
  };
}

const initialState: iToolsReducerState = {
  tools: {
    [TOOLS.STONE]: [],
    [TOOLS.STICK]: [],
    [TOOLS.STONE_AXE]: []
  }
};

export const toolReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOOLS_ACTIONS.ADD_TOOL:
      const tool = action.payload as iTool;

      const tools = Object.assign({}, state, {
        [tool.name]: tool
      });

      return Object.assign({}, state, tools);
    default:
      return state;
  }
};
