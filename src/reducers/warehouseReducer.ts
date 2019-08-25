import { WAREHOUSE_ACTIONS_TYPES } from "./../actions/warehouse/warehouseActionsTypes";
import { AnyAction } from "redux";
import { Action } from "redux";
import { warehouseStateInterface } from "./warehouseReducer";
import { TREE_PARTS } from "../components/Forest/Tree";
import TreeBranch from "../components/Forest/TreeBranch";

export interface warehouseStateInterface {
  warehouse: {
    rawMaterials: {
      wood: { [key in TREE_PARTS]: Array<TreeBranch> };
    };
  };
}

export const initialState: warehouseStateInterface = {
  warehouse: {
    rawMaterials: {
      wood: {
        [TREE_PARTS.BRANCH]: [],
        [TREE_PARTS.LEAVES]: [],
        [TREE_PARTS.TRUNK]: [],
        [TREE_PARTS.TWIGS]: [],
        [TREE_PARTS.ROOTS]: []
      }
    }
  }
};

export const warehouseReducer = (
  state = initialState,
  action: AnyAction
): warehouseStateInterface => {
  switch (action.type) {
    case WAREHOUSE_ACTIONS_TYPES.ADD_TREE_BRANCH_SUCCESS:
      const branches = state.warehouse.rawMaterials.wood.branch.concat(
        action.payload
      );

      return Object.assign({}, state, {
        warehouse: {
          rawMaterials: {
            wood: {
              [TREE_PARTS.BRANCH]: branches
            }
          }
        }
      } as warehouseStateInterface);
    default:
      return state;
  }
};
