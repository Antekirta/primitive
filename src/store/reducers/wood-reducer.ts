import { WOOD_ACTIONS } from "../actions/wood-actions";
import { AnyAction } from "redux";
import { TREE_PARTS } from "../../components/Forest/tree/Tree";
import TreeBranch from "../../components/Forest/tree/tree-parts/TreeBranch";
import TreePart from "../../components/Forest/tree/tree-parts/TreePart";

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
      const treePart = action.payload as TreePart;

      const treeParts = state.wood[treePart.treePartGetter].concat(treePart);

      const wood = Object.assign({}, state.wood, {
        [treePart.treePartGetter]: treeParts
      });

      return Object.assign({}, state, { wood } as IWoodReducerState);
    default:
      return state;
  }
};
