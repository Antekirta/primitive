import { WAREHOUSE_ACTIONS_TYPES } from "./warehouseActionsTypes";
import TreeBranch from "../../components/Forest/TreeBranch";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";

export const addTreeBranch = (treeBranch: TreeBranch): any => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH,
      payload: treeBranch
    });

    setTimeout(() => {
      dispatch({
        type: WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH_SUCCESS,
        payload: treeBranch
      });
    }, 5000);
  };
};
