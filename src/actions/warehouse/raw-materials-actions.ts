import { WAREHOUSE_ACTIONS_TYPES } from './warehouseActionsTypes';
import TreeBranch from "../../components/Forest/TreeBranch";
import { AnyAction } from "redux";

export const addTreeBranch = (treeBranch: TreeBranch): AnyAction => {
  return {
    type: WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH,
    payload: treeBranch
  };
};
