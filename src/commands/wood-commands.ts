import { iPerson } from "./../components/People/Person/Person";
import { setPersonOccupation } from "./../actions/people-actions";
import { addTreeBranch } from "../actions/wood-actions";
import { Tool } from "../components/Tool/Tool";
import { ICommand } from "./Command";
import ForestFactory from "../components/Forest/ForestFactory";
import Tree, { TREES, TREE_PARTS } from "../components/Forest/Tree";
import { store } from "../index";

interface iGetWoodParams {
  treeSpecies: TREES;
  treePart: TREE_PARTS;
  tool: Tool;
}

class GetWood implements ICommand {
  execute(personId: string, params: iGetWoodParams): void {
    const tree = ForestFactory.provideTree(params.treeSpecies);

    const treeBranch = Tree.getTreePart(tree, params.treePart, params.tool);

    // How many ticks should pass before success action (in terms of redux) is fired
    const timeToCollectBranch: number =
      treeBranch.density / (params.tool.sharpness + params.tool.toughness);

    store.dispatch(addTreeBranch(treeBranch, timeToCollectBranch));

    store.dispatch(
      setPersonOccupation(
        personId,
        {
          title: `Looking for a ${params.treePart} of ${params.treeSpecies}`
        },
        timeToCollectBranch
      )
    );
  }
}

export { GetWood };
