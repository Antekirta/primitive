import { TREE_BRANCH_EVENTS } from '../components/Forest/TreeBranch';
import { Tool, TOOLS } from "../components/Tool/Tool";
import { ICommand } from "./Command";
import ForestFactory from "../components/Forest/ForestFactory";
import Tree, { TREES, TREE_PARTS } from "../components/Forest/Tree";

interface ICollectWoodCommand {
  wood: string; // TODO add enum wood
  tool: object; // TODO add Tool class instance
}

class GetWood implements ICommand {
  // TODO add enum wood, add Tool class instance
  execute(treeSpecies: TREES, tool: Tool) {
    const tree = ForestFactory.provideTree(treeSpecies);

    const treeBranch = Tree.getTreePart(
      tree,
      TREE_PARTS.BRANCH,
      tool
    );

    treeBranch.on(TREE_BRANCH_EVENTS.PRODUCE_HEAT, (data: any) => {
      console.log('data:', data)
    })

    treeBranch.light()
  }
}

export default GetWood;
