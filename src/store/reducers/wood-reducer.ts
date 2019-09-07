import { AnyAction } from "redux";
import { WOOD_ACTIONS } from "store/actions/wood-actions";
import { TREE_PARTS } from "classes/resources/wood/tree/Tree";
import {TreePart, TreeBranch} from "classes/resources/wood/tree/tree-parts";

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
