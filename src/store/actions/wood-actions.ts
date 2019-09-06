import { delayForNTicks } from "utils/timer";
import TreeBranch from "resources/wood/tree/tree-parts/TreeBranch";
import { AnyAction } from "redux";
import { Dispatch } from "react";

export enum WOOD_ACTIONS {
  ADD_TREE_BRANCH = "ADD_TREE_BRANCH",
  ADD_TREE_BRANCH_SUCCESS = "ADD_TREE_BRANCH_SUCCESS",
  ADD_TREE_BRANCH_FAILURE = "ADD_TREE_BRANCH_FAILURE"
}

/**
 * @param treeBranch
 * @param timeout - amount of ticks to delay action for
 * @returns TODO Should return ThunkAction
 */
export const addTreeBranch = (treeBranch: TreeBranch, timeout: number): any => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: WOOD_ACTIONS.ADD_TREE_BRANCH,
      payload: treeBranch
    });

    delayForNTicks(() => {
      dispatch({
        type: WOOD_ACTIONS.ADD_TREE_BRANCH_SUCCESS,
        payload: treeBranch
      });
    }, timeout);
  };
};
