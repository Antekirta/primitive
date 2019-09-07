import { AnyAction } from "redux";
import { iToolBaseParams } from "classes/tools/interface";

export enum TOOLS_ACTIONS {
  ADD_TOOL = "ADD_TOOL"
}

export const addTool = (toolParams: iToolBaseParams): AnyAction => {
  return {
    type: TOOLS_ACTIONS.ADD_TOOL,
    payload: toolParams
  };
};
