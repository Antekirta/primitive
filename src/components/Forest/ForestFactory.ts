import Tree, { TREES } from "resources/wood/tree/Tree";

class ForestFactory {
  static provideTree(treeSpecies: TREES) {
    return Tree.getTree(treeSpecies);
  }
}

export default ForestFactory;
