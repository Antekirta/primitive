import { addTreeBranch } from "./../actions/warehouse/raw-materials-actions";
import { TREE_BRANCH_EVENTS } from "../components/Forest/TreeBranch";
import { Tool } from "../components/Tool/Tool";
import { ICommand } from "./Command";
import ForestFactory from "../components/Forest/ForestFactory";
import Tree, { TREES, TREE_PARTS } from "../components/Forest/Tree";
import { store } from "../index";

export default class GetWood implements ICommand {
  execute(treeSpecies: TREES, treePart: TREE_PARTS, tool: Tool): string {
    const tree = ForestFactory.provideTree(treeSpecies);

    const treeBranch = Tree.getTreePart(tree, treePart, tool);

    store.dispatch(addTreeBranch(treeBranch));

    return "Looking for wood"; 
  }
}
