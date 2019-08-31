import { addTreeBranch } from "../actions/wood-actions";
import { Tool } from "../components/Tool/Tool";
import { ICommand } from "./Command";
import ForestFactory from "../components/Forest/ForestFactory";
import Tree, { TREES, TREE_PARTS } from "../components/Forest/Tree";
import { store } from "../index";

class GetWood implements ICommand {
  execute(treeSpecies: TREES, treePart: TREE_PARTS, tool: Tool): string {
    const tree = ForestFactory.provideTree(treeSpecies);

    const treeBranch = Tree.getTreePart(tree, treePart, tool);

    // How many ticks should pass before success action (in terms of redux) is fired
    const timeToCollectBranch: number =
      treeBranch.density / (tool.sharpness + tool.toughness);

    store.dispatch(addTreeBranch(treeBranch, timeToCollectBranch));

    return "Looking for wood";
  }
}

export { GetWood };
