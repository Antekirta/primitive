import { WOOD_ACTIONS } from "./../actions/wood-actions";
import { AnyAction } from "redux";
import { TREE_PARTS } from "./../components/Forest/Tree";
import TreeBranch from "../components/Forest/TreeBranch";

export interface IWoodReducerState {
  wood: {
    [key in TREE_PARTS]: Array<TreeBranch>;
  };
}

const initialState: IWoodReducerState = {
  wood: {
    [TREE_PARTS.BRANCH]: [],
    [TREE_PARTS.LEAVES]: [],
    [TREE_PARTS.TRUNK]: [],
    [TREE_PARTS.TWIGS]: [],
    [TREE_PARTS.ROOTS]: []
  }
};

export const woodReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WOOD_ACTIONS.ADD_TREE_BRANCH_SUCCESS:
      const branches = state.wood.branch.concat(action.payload);

      return Object.assign({}, state, {
        wood: {
          [TREE_PARTS.BRANCH]: branches
        }
      } as IWoodReducerState);
    default:
      return state;
  }
};
