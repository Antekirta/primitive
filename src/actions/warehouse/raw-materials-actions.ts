import { delayForNTicks } from "./../../utils/timer";
import { WAREHOUSE_ACTIONS_TYPES } from "./warehouseActionsTypes";
import TreeBranch from "../../components/Forest/TreeBranch";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";

/**
 * should return ThunkAction
 * @param treeBranch
 * @param timeout - amount of ticks to delay action for
 */
export const addTreeBranch = (treeBranch: TreeBranch, timeout: number): any => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH,
      payload: treeBranch
    });

    delayForNTicks(() => {
      dispatch({
        type: WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH_SUCCESS,
        payload: treeBranch
      });
    }, timeout);
  };
};